const sequelize = require('./models');

console.log(`On teste la connexion à la BDD`);

sequelize.authenticate()
.then(() => {
    console.log('Connexion établie!')

    // Forcer la synchronisation entre mon code et la BDD
    // Code génère la BDD
    sequelize.sync({ force: true })
    .then(() => {
        console.log('Les tables de ma BDD ont été bien générées!')
        sequelize.models.avis.create(
            {
                note: "4",
                message: "vraiment pas mal"
            }
        )
        sequelize.models.avis.create(
            {
                note: "5",
                message: "Super film !!!!!!!"
            }
        )
        sequelize.models.avis.create(
            {
                note: "1",
                message: "vraiment pas terrible ..."
            }
        )
        sequelize.models.avis.create(
            {
                note: "3",
                message: "Bon film, un peu déçu de la fin"
            }
        )
        sequelize.models.avis.create(
            {
                note: "1",
                message: "beaucoup trop long"
            }
        )
        sequelize.models.avis.create(
            {
                note: "0",
                message: "Très naze"
            }
        )
        sequelize.models.avis.create(
            {
                note: "5",
                message: "la note parle d'elle même"
            }
        )
        sequelize.models.avis.create(
            {
                note: "3",
                message: "ok tier"
            }
        )
        sequelize.models.pseudo.create(
            {
                pseudo: "Mokthar"
            }
        )
        sequelize.models.pseudo.create(
            {
                pseudo: "Djnze"
            }
        )
        sequelize.models.pseudo.create(
            {
                pseudo: "Zigoilo"
            }
        )
        sequelize.models.pseudo.create(
            {
                pseudo: "zapdos"
            }
        )
        sequelize.models.pseudo.create(
            {
                pseudo: "oulavdos"
            }
        )
        sequelize.models.acteur.create(
            {
                nom: "Worthington",
                prenom: "James"
            }
        )
        sequelize.models.acteur.create(
            {
                nom: "DiCaprio",
                prenom: "Leonardo"
            }
        )
        sequelize.models.acteur.create(
            {
                nom: "Elgort",
                prenom: "Ansel"
            }
        )
        sequelize.models.film.create(
            {
                titre: "Avatar",
                synopsis: "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des pilotes humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora. Sous sa forme d'avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration auprès des Na'vi, devenus un obstacle trop conséquent à l'exploitation du précieux minerai. Mais tout va changer lorsque Neytiri, une très belle Na'vi, sauve la vie de Jake...",
                realisateur: "James Cameron",
            }
        )
        sequelize.models.film.create(
            {
                titre: "Titanic",
                synopsis: "Southampton, 10 avril 1912. Le Titanic, le plus grand paquebot du monde, s'apprête à appareiller pour son premier voyage en direction de New-York. A bord, le modeste Jack Dawson (Leonardo DiCaprio), passager de troisième classe qui a gagné son billet au poker, fait la rencontre de Rose Dewitt Buckater (Kate Winslet), une belle jeune fille de première classe issue de la haute bourgeoisie et que sa mère Ruth (Frances Fisher) a promise à Caledon Hockley (Billy Zane), un riche aristocrate. Jack va initier Rose à l'univers festif des soirées des troisièmes classes, malgré les désaccords de Caledon et de Ruth, bien décidés à empêcher Rose de s'enticher de Jack. Mais bien que tout les oppose, les deux jeunes gens vont tomber fous amoureux l'un de l'autre et se promettre de s'enfuir ensemble à l'arrivée du paquebot. Leurs projets vont couler en même temps que le Titanic qui heurte alors un iceberg au beau milieu d'un Océan à l'eau glaciale...",
                realisateur: "James Cameron",
            }
        )
        sequelize.models.film.create(
            {
                titre: "Baby Driver",
                synopsis: "Chauffeur pour des braqueurs de banque, Baby a un truc pour être le meilleur dans sa partie : il roule au rythme de sa propre playlist. Lorsqu’il rencontre la fille de ses rêves, Baby cherche à mettre fin à ses activités criminelles pour revenir dans le droit chemin. Mais il est forcé de travailler pour un grand patron du crime et le braquage tourne mal… Désormais, sa liberté, son avenir avec la fille qu’il aime et sa vie sont en jeu.",
                realisateur: "Edgar Wright",
            }
        )
        sequelize.models.film.create(
            {
                titre: "Inception",
                synopsis: "Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence.",
                realisateur: "Christopher Nolan",
            }
        )
        sequelize.models.acteurs_tags.create(
            {
                filmId: "1",
                acteurId: "1"
            }
        )
        sequelize.models.acteurs_tags.create(
            {
                filmId: "2",
                acteurId: "2"
            }
        )
        sequelize.models.acteurs_tags.create(
            {
                filmId: "3",
                acteurId: "3"
            }
        )
        sequelize.models.acteurs_tags.create(
            {
                filmId: "4",
                acteurId: "3"
            }
        )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "1",
        //         pseudoId: "1"
        //     }
        // )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "2",
        //         pseudoId: "3"
        //     }
        // )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "3",
        //         pseudoId: "2"
        //     }
        // )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "4",
        //         pseudoId: "1"
        //     }
        // )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "5",
        //         pseudoId: "2"
        //     }
        // )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "6",
        //         pseudoId: "4"
        //     }
        // )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "7",
        //         pseudoId: "3"
        //     }
        // )
        // sequelize.models.pseudos_tags.create(
        //     {
        //         avisId: "8",
        //         pseudoId: "3"
        //     }
        // )
    })
})
.catch((err) => {
    console.log(`Ma BDD plante, voici l'erreur: ${err}`)
})