---
styles:
    - href: "./main.css"
---

<script>
    if(!location.hash || location.hash.length <= 2){
        location.hash = "#acceuil";
    }
</script>

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
            <p>J'ai été contacté pour participer à une démarche de justice restaurative</p>
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
            Pour savoir vers qui vous tourner, vous pouvez saisir ici votre commune ou votre département. 
            Nous vous donnerons les coordonnées de la personne la plus pertinente pour vous renseigner dans votre zone géographique
        </p>
        <input type="search">
        <output></output>
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