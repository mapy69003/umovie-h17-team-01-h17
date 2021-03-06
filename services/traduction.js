var app = angular.module("umovie-app");
app.run([
    "$rootScope",
    "$cookies",
    function ($rootScope, $cookies) {
        $rootScope.lang = $cookies.get("lang");
        if ($rootScope.lang == null) {
            $cookies.put("lang", "en");
            $rootScope.lang = "en";
        }

        var dictionnary = {
            "actor": {
                "en": "Actor : ",
                "fr": "Acteur : "
            },
            "actorcategory": {
                "en": "Category : ",
                "fr": "Genre : "
            },
            "add_movies_modal_title": {
                "en": "Add movies",
                "fr": "Ajouter un film"
            },
            "add_watchlist_title": {
                "en": "Add watchlist title",
                "fr": "Ajouter le titre de la watchlist"
            },
            "banner": {
                "en": "Banner",
                "fr": "Bannière"
            },
            "bannersubtitle": {
                "en": "Watch different.",
                "fr": "Regardez autrement."
            },
            "button_create": {
                "en": "Create",
                "fr": "Créé"
            },
            "button_cancel": {
                "en": "Cancel",
                "fr": "Annuler"
            },
            "button_close": {
                "en": "Close",
                "fr": "Fermer"
            },
            "button_delete": {
                "en": "Delete",
                "fr": "Effacer"
            },
            "category": {
                "en": "Category",
                "fr": "Catégorie"
            },
            "confirm_password": {
                "en": "Confirm password",
                "fr": "Confirmer mot de passe"
            },
            "done": {
                "en": "Done",
                "fr": "Fait"
            },
            "email": {
                "en": "Email",
                "fr": "Email"
            },
            "episode": {
                "en": "Episode",
                "fr": "Épisode"
            },
            "follow-block-text": {
                "en": "Don't miss any series of yours thanks to your Watchlists",
                "fr": "Ne ratez jamais vos séries favorites grâce à vos watchlists"
            },
            "follow-block-title": {
                "en": "Follow",
                "fr": "Suivez"
            },
            "follow": {
                "en": "Follow",
                "fr": "Suivre"
            },
            "following": {
                "en": "Following",
                "fr": "Suivi"
            },
            "footer": {
                "en": "Footer",
                "fr": "Bas de page"
            },
            "footer-contact-1": {
                "en": "Carrier piegon",
                "fr": "Pigeon voyageur"
            },
            "footer-contact-2": {
                "en": "Bus 800 : bus stop Laval University, Pouliot block (We are often at ASETIN office, ask for it)",
                "fr": "Ligne 800 : arrêt Université Laval, pavillon Pouliot (On est souvent a l'ASETIN, demandez pour trouver)"
            },
            "footer-contact-text": {
                "en": "To contact us",
                "fr": "Pour nous contacter"
            },
            "footer-information": {
                "en": "Information",
                "fr": "Informations"
            },
            "footer-information-text": {
                "en": "Every data are provided by Apple Inc. This project has been created within a pedagogical aim.",
                "fr": "Toutes les données proviennents de Apple Inc. Ce projet a été créé dans un cadre pédagogique."
            },
            "friends": {
                "en": "Friends",
                "fr": "Amis"
            },
            "genre-filter": {
                "en": "Genre filter",
                "fr": "Genre"
            },
            "home": {
                "en": "Home",
                "fr": "Accueil"
            },
            "infofilm_type_film": {
                "en": "Rating",
                "fr": "Type de film"
            },
            "info_film_main_actor": {
                "en": "Main actor",
                "fr": "Acteur principal"
            },
            "login": {
                "en": "Log in",
                "fr": "Se connecter"
            },
            "login_msg_success_connection": {
                "en": "Successfully logged in",
                "fr": "Connexion réussie"
            },
            "login_msg_no_connection": {
                "en": "Connection denied, check your IDs",
                "fr": "Connexion refusée, vérifier vos ID de connexion"
            },
            "logout": {
                "en": "Log out",
                "fr": "Se déconnecter"
            },
            "msg_logout_success": {
                "en": "Successfully logged out",
                "fr": "Déconnexion réussie"
            },
            "moreinformation": {
                "en": "More information",
                "fr": "Plus d'information"
            },
            "movie": {
                "en": "Movie",
                "fr": "Film"
            },
            "moviedate": {
                "en": "Released",
                "fr": "Date de sortie"
            },
            "movie_added_text": {
                "en": "Movie successfully added",
                "fr": "Ce film a été ajouté"
            },
            "msg_delete_confirmation": {
                "en": "Are you sure you want to delete the watchlist ",
                "fr": "Date de sortie"
            },
            "name": {
                "en": "Name",
                "fr": "Nom"
            },
            "next": {
                "en": "Next",
                "fr": "Suivant"
            },
            "no_movies": {
                "en": "No movies",
                "fr": "Pas de films"
            },
            "no_watchlists": {
                "en": "Oh no ! It seems like you don't have any watchlist (yet) !",
                "fr": "Oh non ! Il semblerait que vous n'ayez aucune watchlist (pour l'instant) !"
            },
            "no_watchlists_instructions": {
                "en": "To create one, click the blue button on the bottom right.",
                "fr": "Pour commencer, cliquez sur le boutton bleu en bas à droite de l'écran."
            },
            "password": {
                "en": "Password",
                "fr": "Mot de passe"
            },
            "password_message": {
                "en": "Password must contain at least 8 characters, an uppercase and a lowercase letter.",
                "fr": "Le mot de passe doit contenir au moins 8 caractères, une majuscule et une minuscule."
            },
            "presentation": {
                "en": "Presentation",
                "fr": "Presentation"
            },
            "presentationtitle": {
                "en": "In summary...",
                "fr": "En résumé..."
            },
            "previous": {
                "en": "Previous",
                "fr": "Précédent"
            },
            "runtime": {
                "en": "Runtime",
                "fr": "Durée"
            },
            "search": {
                "en": "Search",
                "fr": "Rechercher"
            },

            "search-filter": {
                "en": "Search filter",
                "fr": "Filtre de recherche"
            },
            "search_watchlists": {
                "en": "Search watchlist",
                "fr": "Rechercher watchlist"
            },
            "season": {
                "en": "Season",
                "fr": "Saison"
            },
            "settings": {
                "en": "Settings",
                "fr": "Paramètres"
            },
            "share-block-text": {
                "en": "Share your watchlists with your friends",
                "fr": "Partagez vos watchlists avec vos amis"
            },
            "share-block-title": {
                "en": "Share",
                "fr": "Share"
            },
            "signup": {
                "en": "Sign up",
                "fr": "S'inscrire"
            },
            "signup_ids_already_exist": {
                "en": "IDs already exist",
                "fr": "Les informations saisies existent déjà"
            },
            "tvshow-name": {
                "en": "TV Show",
                "fr": "Série"
            },
            "unfollow": {
                "en": "Unfollow",
                "fr": "Ne plus suivre"
            },
            "user": {
                "en": "User",
                "fr": "Utilisateur"
            },
            "watch": {
                "en": "Watch",
                "fr": "Regardez"
            },
            "watch-block-text": {
                "en": "Watch your favorite movies and series",
                "fr": "Visionnez vos films et vos séries préférées"
            },
            "watch-block-title": {
                "en": "Watch",
                "fr": "Regardez"
            },
            "watchlist_error_message_rename": {
                "en": "The title can only contain letters and numbers",
                "fr": "Le titre peut seulement contenir des lettres et des nombres"
            },
            "watchlist": {
                "en": "Watchlist",
                "fr": "Watchlist"
            },
            "watchlists": {
                "en": "Watchlists",
                "fr": "Watchlists"
            },
            "watchlist_add_button": {
                "en": "Add movie",
                "fr": "Ajouter un film",
            },
            "watchlist_edit_button": {
                "en": "Edit",
                "fr": "Modifier",
            },
            "watchlist_delete_button": {
                "en": "Delete",
                "fr": "Supprimer",
            },
            "watchlist_created_msg": {
                "en": "Successfully created",
                "fr": "Création réussie",
            },
            "watchlist_deleted_msg": {
                "en": "Successfully deleted",
                "fr": "Supression réussie",
            },
            "watchlist_name": {
                "en": "Watchlist name",
                "fr": "Nom de watchlist"
            }
        };

        $rootScope.translate = function (expr) {
            if (dictionnary[expr] == null) {
                return "tra:" + expr;
            }
            return dictionnary[expr][$rootScope.lang];
        };


        $rootScope.changeLanguage = function changeLanguage() {
            $cookies.put("lang", $rootScope.lang == 'en' ? 'fr' : 'en');

            location.reload();
        };
    }
]);
