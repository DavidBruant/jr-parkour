---
styles:
    - href: "./main.css"
scripts: 
    - src: "./build/bundle.js"
      defer: true
---


<section class="parkour" id="acceuil">
    <section class="explications">
        <p>
            La justice restaurative est une forme de justice complémentaire à la justice pénale
            qui s'intéresse aux besoins de la victime et de l'auteur qui ne sont pas 
            couverts par la justice pénal
        </p>
    </section>
    <section class="liens">
        <a href="#commencer-démarche">  
            <p>Je souhaite commencer une démarche de justice restaurative</p>
            <img src="https://parcours-victimes.fr/wp-content/uploads/2020/09/adultes.png">
        </a>
        <a href="#contacté-démarche">  
            <p>J'ai été contacté.e pour participer à une démarche de justice restaurative</p>
            <img src="https://parcours-victimes.fr/wp-content/uploads/2020/09/adultes.png">
        </a>
        <a href="#pro">  
            <p>Je suis un.e professionnel.le et je cherche des informations sur l'IFJR</p>
            <img src="https://parcours-victimes.fr/wp-content/uploads/2020/09/adultes.png">
        </a>
    </section>
</section>

<section class="parkour" id="commencer-démarche">
    <section class="explications">
        <p>Vous souhaitez commencer une démarche de justice restaurative</p>
        <p class="TODO">...Ptèt une explication de quoi ça concerne (pénal) et quoi ça ne concerne pas (civil)... Ptèt pour le civil, essayer de rediriger vers d'autres associations qui font de la JR pour le civil</p>
    </section>
    <section>
        <p>
            Pour savoir vers qui vous tourner, vous pouvez saisir ici votre commune. 
            Nous vous donnerons les coordonnées de la personne la plus pertinente pour vous renseigner dans votre zone géographique
        </p>
        <input type="search" list="communes" placeholder="Pau">
        <datalist id="communes"></datalist>
        <h1>Tous les contacts</h1>
        <output>
            <section class="contact" data-departements="64,33">
                <h1 class="person-name">Dav Bru</h1>
                <h2 class="structure">L'Échappée Belle - antenne Sud ouest</h2>
                <ul>
                    <li>email: <a href="mailto:yo@jr.fr">yo@jr.fr</a></li>
                    <li>téléphone: <a href="tel:0500000000">0500000000</a></li>
                </ul>
            </section>
            <section class="contact" data-departements="59,60">
                <h1 class="person-name">Avi Rua</h1>
                <h2 class="structure">L'Échappée Belle - antenne Nord est</h2>
                <ul>
                    <li>email: <a href="mailto:yo@jr.fr">yo@jr.fr</a></li>
                    <li>téléphone: <a href="tel:0300000000">0300000000</a></li>
                </ul>
            </section>
            <section class="contact" data-departements="06">
                <h1 class="person-name">Dvd Brnt</h1>
                <h2 class="structure">L'Échappée Belle - antenne Sud est</h2>
                <ul>
                    <li>email: <a href="mailto:yo@jr.fr">yo@jr.fr</a></li>
                    <li>téléphone: <a href="tel:0400000000">0400000000</a></li>
                </ul>
            </section>
            <section class="contact" data-departements="95,75">
                <h1 class="person-name">Ai Ua</h1>
                <h2 class="structure">L'Échappée Belle - antenne île-de-france</h2>
                <ul>
                    <li>email: <a href="mailto:yo@jr.fr">yo@jr.fr</a></li>
                    <li>téléphone: <a href="tel:0100000000">0100000000</a></li>
                </ul>
            </section>
            <section class="contact">
                <h1 class="person-name">Al Mar</h1>
                <h2 class="structure">IFJR - contact général</h2>
                <ul>
                    <li>email: <a href="mailto:yo@jr.fr">yo@ifjr.fr</a></li>
                    <li>téléphone: <a href="tel:0600000000">0600000000</a></li>
                </ul>
            </section>
        </output>
    </section>
</section>

<section class="parkour" id="contacté-démarche">
    <section class="explications">
        <p>Vous avez été contacté pour une démarche</p>
    </section>
    <section class="TODO">
        Voilà les infos !
    </section>
</section>

<section class="parkour" id="pro">
    <section class="explications TODO">
        <p>... Ptèt un texte ici ...</p>
    </section>
</section>


<script>
    if(!location.hash || location.hash.length <= 2){
        location.replace("#acceuil");
    }
</script>