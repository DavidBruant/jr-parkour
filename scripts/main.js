//@ts-check

import {json} from "d3-fetch";
import "awesomplete"

const commencerDémarcheSection = document.querySelector('#commencer-démarche')

const contactGéoSearchInput = commencerDémarcheSection.querySelector('input')

const contactSections = commencerDémarcheSection.querySelectorAll('.contact[data-departements]')


const communesP = json('https://geo.api.gouv.fr/communes?fields=nom,codeDepartement')
// @ts-ignore
.then(communes => {

	const listCommunes = new Map(
		// @ts-ignore
		communes.map(
			({nom, codeDepartement}) => [`${nom} (${codeDepartement})`, {nom, codeDepartement}]
		)
	)

	// @ts-ignore
	new Awesomplete(
		contactGéoSearchInput, 
		{
			// @ts-ignore
			list: [...listCommunes.keys()]
		}
	)

	return listCommunes;
})

const onInput = ({target: {value}, type, text}) => {
	if(type === 'awesomplete-select'){
		value = text.value;
	}


	//const departementMatches = value.match(/2[AB]/) || value.match(/\d+/);
	//const departementInValueAsString = departementMatches && departementMatches[0];
	const nameMatch = value.match(/[A-Za-z]\D*[A-Za-z]/)
	const name = nameMatch && nameMatch[0]

	communesP.then(communes => {
		let selectedCommune;

		if(communes.has(value)){
			selectedCommune = communes.get(value);
		}
		else{
			const sameNameCommunes = [...communes.values()].filter( ({nom}) => nom === name )

			if(sameNameCommunes.length === 1){
				selectedCommune = sameNameCommunes[0]
			}
		}

		if(selectedCommune){
			const departementCode = selectedCommune.codeDepartement;

			for(const section of contactSections){
				const deps = (section.getAttribute('data-departements') || '').split(',');
				if(deps.length >=1){
					if(deps.includes(departementCode)){
						section.removeAttribute('hidden')
					}
					else{
						section.setAttribute('hidden', 'hidden')
					}
				}
				else{
					// do nothing; keep visible
				}
			}
		}
		else{
			for(const section of contactSections){
				section.removeAttribute('hidden')
			}
		}

	})

}

// @ts-ignore
contactGéoSearchInput.addEventListener('input', onInput)
// @ts-ignore
contactGéoSearchInput.addEventListener('awesomplete-select', onInput)
