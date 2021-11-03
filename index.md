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
            <section class="contact" data-departements="09,12,16,17,19,23,24,31,32,33,40,46,47,64,65,79,81,82,86,87">
                <h1 class="person-name">Émilie MATIGNON & Eulalie SPYCHIGER</h1>
                <h2 class="structure">IFJR - antenne Sud ouest</h2>
                <ul>
                    <li>email: <a href="mailto:coordination.sud-ouest@justicerestaurative.org">coordination.sud-ouest@justicerestaurative.org</a></li>
                    <li>téléphone: <a href="tel:06 77 99 27 15">06 77 99 27 15</a> & <a href="tel:06 32 57 71 25">06 32 57 71 25</a></li>
                </ul>
            </section>
            <section class="contact" data-departements="02,08,10,21,25,39,51,52,54,55,57,58,59,60,62,67,68,70,71,75,77,80,88,89,90,91,92,93,94">
                <h1 class="person-name">Héloïse SQUELBUT</h1>
                <h2 class="structure">IFJR - antenne Nord-est</h2>
                <ul>
                    <li>email: <a href="mailto:coordination.nord-est@justicerestaurative.org">coordination.nord-est@justicerestaurative.org</a></li>
                    <li>téléphone: <a href="tel:06 08 99 80 44">06 08 99 80 44</a></li>
                </ul>
            </section>
            <section class="contact" data-departements="01,03,04,05,06,07,11,13,15,2A,2B,26,30,34,38,42,43,48,63,66,69,73,74,84">
                <h1 class="person-name">Noémie MICOULET</h1>
                <h2 class="structure">IFJR - antenne Sud-est</h2>
                <ul>
                    <li>email: <a href="mailto:coordination.sud-est@justicerestaurative.org">coordination.sud-est@justicerestaurative.org</a></li>
                    <li>téléphone: <a href="tel:07 81 12 51 89">07 81 12 51 89</a></li>
                </ul>
            </section>
            <section class="contact" data-departements="974">
                <h1 class="person-name">Océane LABURRE (majeurs) & Émilie LE PORT (mineurs)</h1>
                <h2 class="structure">L'Échappée Belle - antenne Réunion</h2>
                <ul>
                    <li>email: <a href="mailto:coordination.reunion@justicerestaurative.org">coordination.reunion@justicerestaurative.org</a></li>
                    <li>téléphone: <a href="tel:0693 802 803">0693 802 803</a></li>
                </ul>
                <ul>
                    <li>email: <a href="mailto:coordination.reunion-mineurs@justicerestaurative.org">coordination.reunion-mineurs@justicerestaurative.org</a></li>
                    <li>téléphone: <a href="tel:0693 855 311">0693 855 311</a></li>
                </ul>
            </section>
            <section class="contact">
                <h1 class="person-name">Al Mar</h1>
                <h2 class="structure">IFJR - contact général</h2>
                <ul>
                    <li>email: <a href="mailto:contact@justicerestaurative.org">contact@justicerestaurative.org</a></li>
                    <li>téléphone: <a href="tel:05.59.27.46.88">05.59.27.46.88</a></li>
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