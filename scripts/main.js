//@ts-check

/*import App from './App.svelte';

const app = new App({
	target: document.querySelector('.svelte-main'),
	props: {
		name: 'from Svelte'
	}
});*/


import debounce from "just-debounce-it";
import {json} from "d3-fetch";

const commencerDémarcheSection = document.querySelector('#commencer-démarche')

const contactGéoSearchInput = commencerDémarcheSection.querySelector('input')
const communeDatalist = commencerDémarcheSection.querySelector('datalist')

const contactSections = commencerDémarcheSection.querySelectorAll('.contact[data-departements]')

console.log('contactSections', contactSections)


let controller;

// @ts-ignore
contactGéoSearchInput.addEventListener('input', debounce( ({target: {value}}) => {
	
	for(const section of contactSections){
		section.removeAttribute('hidden')
	}

	if(value.length >= 1){

		if(controller){
			console.log('abort!!')
			controller.abort();
		}
		controller = new AbortController();

		json(`https://geo.api.gouv.fr/communes?nom=${value}&fields=departement&boost=population&limit=8`, {signal: controller.signal})
		.then(results => {
			console.log('results for', value, results)
			controller = undefined;

			// if there is a number in value
			const numberMatches = value.match(/\d+/);
			const numberInValueAsString = numberMatches && numberMatches[0];
			const name = value.match(/[A-Za-z]\D*[A-Za-z]/)[0]

			// @ts-ignore
			console.log('numberInValueAsString', numberInValueAsString, results.length)

			if(numberInValueAsString){
				// find the single corresponding result
				// @ts-ignore
				results = results.filter( ({nom, departement: {code}}) => {console.log(name, nom, code, numberInValueAsString); return numberInValueAsString === code && name === nom } )
			}

			// @ts-ignore
			if(results.length === 1){
				const result = results[0];
				console.log('result', result)
				const departementCode = result.departement.code;

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
				communeDatalist.innerHTML = '';

				// @ts-ignore
				for(const {nom, departement: {code}} of results){
					const option = document.createElement('option');
					option.value = `${nom} (${code})`
					option.textContent = `${nom} (${code})`

					communeDatalist.append(option)
				}
			}
		})
		.catch(error => {
			console.error('err', error)
		})
	}
}, 300))



