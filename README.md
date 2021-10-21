Plugin pour ajouter diverses fonctions à la plateforme OC, côté mentor, comme par exemple avoir un récapitulatif des sessions écoulées pour faciliter la facturation


INSTALLATION :
- Extention à utiliser dans google chrome pour ajouter les scritps et css : https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld
- Dans l'extention, "Add new site".
- Dans le champ pour l'URL (avec le placeholder "*.example.com"), renseinger les url :
      - https://openclassrooms.com/fr/mentorship/dashboard/mentorship-sessions-history pour ajouter le contenu du dossier "mentorship-sessions-history"
      
      - https://openclassrooms.com/fr/mentorship/dashboard/students pour ajouter le contenu du dossier "dashboard---students"
      
      - https://openclassrooms.com/fr/mentorship/students/*/dashboard pour ajouter le contenu du dossier "students---studentID---dashboard"
- Pour chaque dossier, à chaque url (données ci-dessus) :
      - Copier le contenu de script.js dans la colonne de gauche (JS)
      
      - Copier le contenu de style.css dans la colonne de droite (CSS)

UTILISATION :
- Plugin visible à cette adresse : "https://openclassrooms.com/fr/mentorship/dashboard/mentorship-sessions-history". S'il n'est pas visible, F5
- Le plugin met à jour la liste des étudiants courants lorsqu'on se trouve à cette adresse : https://openclassrooms.com/fr/mentorship/dashboard/students
- Pour obtenir de nombreuses remontées d'informations, il est nécessaire, à cette adresse : https://openclassrooms.com/fr/mentorship/dashboard/mentorship-sessions-history de sélectionner "voir plus auto" dans le but de lister l'ensemble des sessions réalisées, de selectionner (pour chaque session) si la session était faite avec un étudiant financé ou autofinancé, puis de cliquer sur "Ajouter le sessions ci-dessous à la BDD" pour capturer les données, dans le but de pouvoir afficher différents récapitulatif par la suite
