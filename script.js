function miseEnAttente() {
	setTimeout(addToolBar, 5000); //On attend 5 secondes avant d'exécuter la fonction
}

function addToolBar() {	
	// Get container 
	let container = document.getElementById("mainContent").getElementsByClassName("dom-services-3-dom-services2")[0];
		
	// Get navSection 
	let navSection = container.getElementsByClassName("dom-services-3-dom-services72")[0];
	
	// Create toolBar
	let toolBarSection = document.createElement("div");
	toolBarSection.classList.add("toolBarSection");
	
	// Create button 1
	let toolBarSectionButton1 = document.createElement("button");
	toolBarSectionButton1.classList.add("dom-services-3-MuiButton-containedPrimary", "dom-services-3-dom-services80", "dom-services-3-MuiButton-root", "dom-services-3-MuiButtonBase-root", "toolBarSectionButton");
	
	let toolBarSectionButtonSpan1 = document.createElement("span");
	toolBarSectionButtonSpan1.classList.add("dom-services-3-MuiButton-label");
	
	let toolBarSectionButtonSpanSpan1 = document.createElement("span");
	toolBarSectionButtonSpanSpan1.textContent = "get current students";
	toolBarSectionButtonSpanSpan1.style.textTransform = "none";
	
	// Create button 2
	let toolBarSectionButton2 = document.createElement("button");
	toolBarSectionButton2.classList.add("dom-services-3-MuiButton-containedPrimary", "dom-services-3-dom-services80", "dom-services-3-MuiButton-root", "dom-services-3-MuiButtonBase-root", "toolBarSectionButton");
	
	let toolBarSectionButtonSpan2 = document.createElement("span");
	toolBarSectionButtonSpan2.classList.add("dom-services-3-MuiButton-label");
	
	let toolBarSectionButtonSpanSpan2 = document.createElement("span");
	toolBarSectionButtonSpanSpan2.textContent = "delete recap tab";
	toolBarSectionButtonSpanSpan2.style.textTransform = "none";
	
	// Create button 3
	let toolBarSectionButton3 = document.createElement("button");
	toolBarSectionButton3.classList.add("dom-services-3-MuiButton-containedPrimary", "dom-services-3-dom-services80", "dom-services-3-MuiButton-root", "dom-services-3-MuiButtonBase-root", "toolBarSectionButton");
	
	let toolBarSectionButtonSpan3 = document.createElement("span");
	toolBarSectionButtonSpan3.classList.add("dom-services-3-MuiButton-label");
	
	let toolBarSectionButtonSpanSpan3 = document.createElement("span");
	toolBarSectionButtonSpanSpan3.textContent = "display recap tab";
	toolBarSectionButtonSpanSpan3.style.textTransform = "none";
	
	
	
	// Insert button 1
	toolBarSectionButtonSpan1.appendChild(toolBarSectionButtonSpanSpan1);
	toolBarSectionButton1.appendChild(toolBarSectionButtonSpan1);
	toolBarSection.appendChild(toolBarSectionButton1);
	// Insert button 2
	toolBarSectionButtonSpan2.appendChild(toolBarSectionButtonSpanSpan2);
	toolBarSectionButton2.appendChild(toolBarSectionButtonSpan2);
	toolBarSection.appendChild(toolBarSectionButton2);
	// Insert button 3
	toolBarSectionButtonSpan3.appendChild(toolBarSectionButtonSpanSpan3);
	toolBarSectionButton3.appendChild(toolBarSectionButtonSpan3);
	toolBarSection.appendChild(toolBarSectionButton3);
	// AddEventListener
	toolBarSectionButton1.addEventListener("click", getDisplayedSessions);
	toolBarSectionButton2.addEventListener("click", deleteRecapTab);
	toolBarSectionButton3.addEventListener("click", displayRecapTab);
	// Insert toolBar
	container.insertBefore(toolBarSection, navSection);
	
	// consoleLog tester
	console.log("addToolBar added");
}

function getDisplayedSessions() {
	
	// Get displayed sessions Elements
	console.log("getDisplayedSessions clicked");
	let sessionsHistory = document.getElementsByClassName("dom-services-3-dom-services98")[0].getElementsByTagName("tr");
	
	// Init sessionsHistoryTab form localstorage
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	if (sessionsHistoryTab == null)
		sessionsHistoryTab = [];
	
	// Create new object and push it in sessionsHistoryTab
	for (session of sessionsHistory) {
		let newItem = {};
		newItem.studentName = session.getElementsByTagName("td")[2].getElementsByTagName("a")[0].textContent;
		newItem.sessionStatus = session.getElementsByTagName("td")[0].getElementsByTagName("svg")[0].getAttribute("data-name");
		newItem.sessionDate = session.getElementsByTagName("td")[1].getElementsByTagName("time")[0].textContent;
		newItem.sessionDateMonth = newItem.sessionDate.split(' ')[1];
		newItem.sessionId = newItem.sessionDate + " - " + newItem.studentName;
		if (newItem.sessionStatus == "CanceledIcon")
			newItem.sessionLvl = "0";
		else
			newItem.sessionLvl = session.getElementsByTagName("td")[3].getElementsByTagName("span")[0].textContent;
		
		// On va vérifier si la session n'est pas déjà présente dans sessionsHistoryTab
		let alreadyExistingSession = 0;
		for (oldSession of sessionsHistoryTab) {
			if(newItem.sessionId == oldSession.sessionId)
				alreadyExistingSession++;
		}
		// Si la session n'est pas déjà présente dans sessionsHistoryTab, on l'ajoute dedans
		if(alreadyExistingSession == 0)
			sessionsHistoryTab.push(newItem);
	}
	
	// Update sessionsHistoryTab in localStorage
	localStorage.setItem('sessionsHistoryTab', JSON.stringify(sessionsHistoryTab));
	
}

function deleteRecapTab() {
	console.log("deleteRecapTab clicked");
	localStorage.removeItem('sessionsHistoryTab');
}

function displayRecapTab() {
	console.log("displayRecapTab clicked");
	
	// On récupère les éléments à supprimer
	let mainArea = document.getElementById("mainContent").getElementsByClassName("dom-services-3-dom-services2")[0];
	let mainAreaNavTab = mainArea.getElementsByClassName("dom-services-3-dom-services72")[0];
	let mainAreaTab = mainArea.lastChild;
	
	// On supprime les éléments
	mainArea.removeChild(mainAreaNavTab);
	mainArea.removeChild(mainAreaTab);
	
	
	// Creation du FRONTEND
	/////////
	// Create TABLE af
	let AFsessionsTable = document.createElement("table");
	// Create TBODY af
	let AFsessionsTbody = document.createElement("tbody");
	
	// Create TR1 af
	let AFsessionsTr1 = document.createElement("tr");
	// Create TD af
	let AFsessionsTr1Td1 = document.createElement("td");
	AFsessionsTr1Td1.textContent = "AutoFinancé";
	let AFsessionsTr1Td2 = document.createElement("td");
	AFsessionsTr1Td2.textContent = "Lvl 1";
	let AFsessionsTr1Td3 = document.createElement("td");
	AFsessionsTr1Td3.textContent = "Lvl 2";
	let AFsessionsTr1Td4 = document.createElement("td");
	AFsessionsTr1Td4.textContent = "Lvl 3";
	// Add TD inside Tr1
	AFsessionsTr1.appendChild(AFsessionsTr1Td1);
	AFsessionsTr1.appendChild(AFsessionsTr1Td2);
	AFsessionsTr1.appendChild(AFsessionsTr1Td3);
	AFsessionsTr1.appendChild(AFsessionsTr1Td4);
	
	// Create TR2 af
	let AFsessionsTr2 = document.createElement("tr");
	// Create TD af
	let AFsessionsTr2Td1 = document.createElement("td");
	AFsessionsTr2Td1.textContent = "Réalisées";
	let AFsessionsTr2Td2 = document.createElement("td");
	AFsessionsTr2Td2.textContent = "nb 1";
	let AFsessionsTr2Td3 = document.createElement("td");
	AFsessionsTr2Td3.textContent = "nb 2";
	let AFsessionsTr2Td4 = document.createElement("td");
	AFsessionsTr2Td4.textContent = "nb 3";
	// Add TD af inside Tr2
	AFsessionsTr2.appendChild(AFsessionsTr2Td1);
	AFsessionsTr2.appendChild(AFsessionsTr2Td2);
	AFsessionsTr2.appendChild(AFsessionsTr2Td3);
	AFsessionsTr2.appendChild(AFsessionsTr2Td4);
	
	// Create TR3 af
	let AFsessionsTr3 = document.createElement("tr");
	// Create TD af
	let AFsessionsTr3Td1 = document.createElement("td");
	AFsessionsTr3Td1.textContent = "No-Show";
	let AFsessionsTr3Td2 = document.createElement("td");
	AFsessionsTr3Td2.textContent = "nb 1";
	let AFsessionsTr3Td3 = document.createElement("td");
	AFsessionsTr3Td3.textContent = "nb 2";
	let AFsessionsTr3Td4 = document.createElement("td");
	AFsessionsTr3Td4.textContent = "nb 3";
	// Add TD af inside Tr3
	AFsessionsTr3.appendChild(AFsessionsTr3Td1);
	AFsessionsTr3.appendChild(AFsessionsTr3Td2);
	AFsessionsTr3.appendChild(AFsessionsTr3Td3);
	AFsessionsTr3.appendChild(AFsessionsTr3Td4);
	
	
	// Add TR af inside TBODY
	AFsessionsTbody.appendChild(AFsessionsTr1);
	AFsessionsTbody.appendChild(AFsessionsTr2);
	AFsessionsTbody.appendChild(AFsessionsTr3);
	
	// Add TBODY af inside TABLE
	AFsessionsTable.appendChild(AFsessionsTbody);
	
	// Add TABLE af inside FRONTEND
	mainArea.appendChild(AFsessionsTable);
	
	
	
	
	
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	
	// On pousse le tableau (front end) dans le DOM
	
}

miseEnAttente();






// TODO
// - Rajouter du front pour cocher les etudiants AF
// - Faire une fonction a qui on donne AF/F, le mois, le lvl, mentorat/session, et retourne le nombre d'étudiant 
// - faire une fonction qqui compte le nombre d'étudiant F, le nombre d'étudiant AF