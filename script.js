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
	
	// Create button 0
	let toolBarSectionButton0 = document.createElement("button");
	toolBarSectionButton0.classList.add("dom-services-3-MuiButton-containedPrimary", "dom-services-3-dom-services80", "dom-services-3-MuiButton-root", "dom-services-3-MuiButtonBase-root", "toolBarSectionButton");
	
	let toolBarSectionButtonSpan0 = document.createElement("span");
	toolBarSectionButtonSpan0.classList.add("dom-services-3-MuiButton-label");
	
	let toolBarSectionButtonSpanSpan0 = document.createElement("span");
	toolBarSectionButtonSpanSpan0.textContent = "set AF";
	toolBarSectionButtonSpanSpan0.style.textTransform = "none";
	
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
	
	
	
	// Insert button 0
	toolBarSectionButtonSpan0.appendChild(toolBarSectionButtonSpanSpan0);
	toolBarSectionButton0.appendChild(toolBarSectionButtonSpan0);
	toolBarSection.appendChild(toolBarSectionButton0);
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
	toolBarSectionButton0.addEventListener("click", setAF);
	toolBarSectionButton1.addEventListener("click", getDisplayedSessions);
	toolBarSectionButton2.addEventListener("click", deleteRecapTab);
	toolBarSectionButton3.addEventListener("click", displayRecapTabs);
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
		newItem.sessionStatus = session.getElementsByTagName("td")[0].getElementsByTagName("svg")[0].getAttribute("aria-label");
		newItem.sessionDate = session.getElementsByTagName("td")[1].getElementsByTagName("time")[0].textContent;
		newItem.sessionDateMonth = newItem.sessionDate.split(' ')[1];
		newItem.sessionId = newItem.sessionDate + " - " + newItem.studentName;
		newItem.sessionType = session.getElementsByTagName("td")[0].getElementsByTagName("p")[0].textContent;
		// Set newItem.sessionLvl
		if (newItem.sessionStatus == "Annulée")
			newItem.sessionLvl = "0";
		else
			newItem.sessionLvl = session.getElementsByTagName("td")[3].getElementsByTagName("span")[0].textContent;
		// Set newItem.studentFaOrF
		if (session.getElementsByTagName("td")[4] == undefined)
			alert("AF/F non set");
		if (session.getElementsByTagName("td")[4].getElementsByClassName("switch-input")[0].checked)
			newItem.studentFaOrF = "af";
		else
		 	newItem.studentFaOrF = "f";
			
			
		
		// On va vérifier si la session n'est pas déjà présente dans sessionsHistoryTab
		let alreadyExistingSession = 0;
		for (oldSession of sessionsHistoryTab) {
			if(newItem.sessionId == oldSession.sessionId) {
				if(newItem.studentFaOrF != oldSession.studentFaOrF)
					oldSession.studentFaOrF = newItem.studentFaOrF;
				alreadyExistingSession++;
			}
		}
		// Si la session n'est pas déjà présente dans sessionsHistoryTab, on l'ajoute dedans localStorage
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

function setAF() {
	console.log("setAF clicked");
	
	// Get displayed sessions Elements TR
	let sessionsHistory = document.getElementsByClassName("dom-services-3-dom-services98")[0].getElementsByTagName("tr");
	
	// Insert TD
	for (session of sessionsHistory) {
		// Create TD
		let tDforAF = document.createElement("td");
		// Set TD
		tDforAF.classList.add("dom-services-3-dom-services123", "isItAnAF");
		tDforAF.style.width = "100%";
		tDforAF.style.minWidth = "140px";
		tDforAF.setAttribute("onclick", "event.stopPropagation();");
		
		
		// Create LabelSB (switch button)
		let LabelSB = document.createElement("label");
		// Set LabelSB
		LabelSB.classList.add("switch");
		
		// Create inputSB
		let inputSB = document.createElement("input");
		// Set inputSB
		inputSB.classList.add("switch-input");
		inputSB.setAttribute("type", "checkbox");
		
		// Create spanSB1
		let spanSB1 = document.createElement("span");
		// Set spanSB1
		spanSB1.classList.add("switch-label");
		spanSB1.setAttribute("data-on", "AutoFi...");
		spanSB1.setAttribute("data-off", "Financé");
		
		// Create spanSB2
		let spanSB2 = document.createElement("span");
		// Set spanSB2
		spanSB2.classList.add("switch-handle");
		
		
		
		// Insert TD
		LabelSB.appendChild(inputSB);
		LabelSB.appendChild(spanSB1);
		LabelSB.appendChild(spanSB2);
		tDforAF.appendChild(LabelSB);
		session.appendChild(tDforAF);
	}
}

function displayTab(tabName, studentFaOrF, mountSelected, mainArea) {
	// Create TABLE
	let sessionsTable = document.createElement("table");
	sessionsTable.classList.add("recaptTab");
	// Create TBODY
	let sessionsTbody = document.createElement("tbody");
	
	// Create TR1 (EN TETE)
	let sessionsTr1 = document.createElement("tr");
	// Create TD
	let sessionsTr1Td1 = document.createElement("th");
	sessionsTr1Td1.textContent = tabName;
	let sessionsTr1Td2 = document.createElement("th");
	sessionsTr1Td2.textContent = "Lvl 1";
	let sessionsTr1Td3 = document.createElement("th");
	sessionsTr1Td3.textContent = "Lvl 2";
	let sessionsTr1Td4 = document.createElement("th");
	sessionsTr1Td4.textContent = "Lvl 3";
	// Add TD inside Tr1
	sessionsTr1.appendChild(sessionsTr1Td1);
	sessionsTr1.appendChild(sessionsTr1Td2);
	sessionsTr1.appendChild(sessionsTr1Td3);
	sessionsTr1.appendChild(sessionsTr1Td4);
	
	// Create TR2 (REALISEES)
	let sessionsTr2 = document.createElement("tr");
	// Create TD
	let sessionsTr2Td1 = document.createElement("td");
	sessionsTr2Td1.textContent = "Réalisées";
	let sessionsTr2Td2 = document.createElement("td");
	sessionsTr2Td2.textContent = getSessionsWithParams(studentFaOrF, mountSelected, "1", "Réalisée").length;
	let sessionsTr2Td3 = document.createElement("td");
	sessionsTr2Td3.textContent = getSessionsWithParams(studentFaOrF, mountSelected, "2", "Réalisée").length;
	let sessionsTr2Td4 = document.createElement("td");
	sessionsTr2Td4.textContent = getSessionsWithParams(studentFaOrF, mountSelected, "3", "Réalisée").length;
	// Add TD inside Tr2
	sessionsTr2.appendChild(sessionsTr2Td1);
	sessionsTr2.appendChild(sessionsTr2Td2);
	sessionsTr2.appendChild(sessionsTr2Td3);
	sessionsTr2.appendChild(sessionsTr2Td4);
	console.log(studentFaOrF + " " + mountSelected + " 1 présent" + getSessionsWithParams(studentFaOrF, mountSelected, "1", "Réalisée").length);
	console.log(studentFaOrF + " " + mountSelected + " 2 présent" + getSessionsWithParams(studentFaOrF, mountSelected, "2", "Réalisée").length);
	console.log(studentFaOrF + " " + mountSelected + " 3 présent" + getSessionsWithParams(studentFaOrF, mountSelected, "3", "Réalisée").length);
	
	// Create TR3 (NO-SHOW)
	let sessionsTr3 = document.createElement("tr");
	// Create TD
	let sessionsTr3Td1 = document.createElement("td");
	sessionsTr3Td1.textContent = "No-Show";
	let sessionsTr3Td2 = document.createElement("td");
	sessionsTr3Td2.textContent = getSessionsWithParams(studentFaOrF, mountSelected, "1", "Étudiant absent").length;
	let sessionsTr3Td3 = document.createElement("td");
	sessionsTr3Td3.textContent = getSessionsWithParams(studentFaOrF, mountSelected, "2", "Étudiant absent").length;
	let sessionsTr3Td4 = document.createElement("td");
	sessionsTr3Td4.textContent = getSessionsWithParams(studentFaOrF, mountSelected, "3", "Étudiant absent").length;
	// Add TD af inside Tr3
	sessionsTr3.appendChild(sessionsTr3Td1);
	sessionsTr3.appendChild(sessionsTr3Td2);
	sessionsTr3.appendChild(sessionsTr3Td3);
	sessionsTr3.appendChild(sessionsTr3Td4);
	console.log(studentFaOrF + " " + mountSelected + " 1 absent" + getSessionsWithParams(studentFaOrF, mountSelected, "1", "Étudiant absent").length);
	console.log(studentFaOrF + " " + mountSelected + " 2 absent" + getSessionsWithParams(studentFaOrF, mountSelected, "2", "Étudiant absent").length);
	console.log(studentFaOrF + " " + mountSelected + " 3 absent" + getSessionsWithParams(studentFaOrF, mountSelected, "3", "Étudiant absent").length);

	// Add TR inside TBODY
	sessionsTbody.appendChild(sessionsTr1);
	sessionsTbody.appendChild(sessionsTr2);
	sessionsTbody.appendChild(sessionsTr3);
	
	// Add TBODY inside TABLE
	sessionsTable.appendChild(sessionsTbody);
	
	// Add TABLE inside FRONTEND
	mainArea.appendChild(sessionsTable);
}

function displayRecapTabs() {
	console.log("displayRecapTabs clicked");
	
	// TODO, à ce moment, demander au user le mois à afficher. Pour le moment, set d'une valeur de test 
	let mountSelected = "juin";
	
	// On récupère les éléments à supprimer
	let mainArea = document.getElementById("mainContent").getElementsByClassName("dom-services-3-dom-services2")[0];
	let mainAreaNavTab = mainArea.getElementsByClassName("dom-services-3-dom-services72")[0];
	let mainAreaTab = mainArea.lastChild;
	
	// On supprime les éléments
	mainArea.removeChild(mainAreaNavTab);
	mainArea.removeChild(mainAreaTab);
	
	displayTab("AutoFinancé", "af", mountSelected, mainArea);
	displayTab("Financé", "f", mountSelected, mainArea);
	
	///////////////////////
	///////////////////////
	///////////////////////
	// Create TABLE s
	let SsessionsTable = document.createElement("table");
	// Create TBODY s
	let SsessionsTbody = document.createElement("tbody");
	
	// Create TR1 s (EN TETE)
	let SsessionsTr1 = document.createElement("tr");
	// Create TD s
	let SsessionsTr1Td1 = document.createElement("td");
	SsessionsTr1Td1.textContent = "OLD Soutenances";
	let SsessionsTr1Td2 = document.createElement("td");
	SsessionsTr1Td2.textContent = "Lvl 1";
	let SsessionsTr1Td3 = document.createElement("td");
	SsessionsTr1Td3.textContent = "Lvl 2";
	let SsessionsTr1Td4 = document.createElement("td");
	SsessionsTr1Td4.textContent = "Lvl 3";
	// Add TD inside Tr1
	SsessionsTr1.appendChild(SsessionsTr1Td1);
	SsessionsTr1.appendChild(SsessionsTr1Td2);
	SsessionsTr1.appendChild(SsessionsTr1Td3);
	SsessionsTr1.appendChild(SsessionsTr1Td4);
	
	// Create TR2 s (s REALISEES)
	let SsessionsTr2 = document.createElement("tr");
	// Create TD s
	let SsessionsTr2Td1 = document.createElement("td");
	SsessionsTr2Td1.textContent = "Réalisées";
	let SsessionsTr2Td2 = document.createElement("td");
	SsessionsTr2Td2.textContent = getSessionsWithParams("s", "juin", "1", "CompletedIcon").length;
	let SsessionsTr2Td3 = document.createElement("td");
	SsessionsTr2Td3.textContent = getSessionsWithParams("s", "juin", "2", "CompletedIcon").length;
	let SsessionsTr2Td4 = document.createElement("td");
	SsessionsTr2Td4.textContent = getSessionsWithParams("s", "juin", "3", "CompletedIcon").length;
	// Add TD S inside Tr2
	SsessionsTr2.appendChild(SsessionsTr2Td1);
	SsessionsTr2.appendChild(SsessionsTr2Td2);
	SsessionsTr2.appendChild(SsessionsTr2Td3);
	SsessionsTr2.appendChild(SsessionsTr2Td4);
	console.log("s " + mountSelected + " 1 présent" + getSessionsWithParams("s", mountSelected, "1", "CompletedIcon").length);
	console.log("s " + mountSelected + " 2 présent" + getSessionsWithParams("s", mountSelected, "2", "CompletedIcon").length);
	console.log("s " + mountSelected + " 3 présent" + getSessionsWithParams("s", mountSelected, "3", "CompletedIcon").length);
	
	// Create TR3 s (S NO-SHOW)
	let SsessionsTr3 = document.createElement("tr");
	// Create TD s
	let SsessionsTr3Td1 = document.createElement("td");
	SsessionsTr3Td1.textContent = "No-Show";
	let SsessionsTr3Td2 = document.createElement("td");
	SsessionsTr3Td2.textContent = getSessionsWithParams("s", mountSelected, "1", "StudentAbsentIcon").length;
	let SsessionsTr3Td3 = document.createElement("td");
	SsessionsTr3Td3.textContent = getSessionsWithParams("s", mountSelected, "2", "StudentAbsentIcon").length;
	let SsessionsTr3Td4 = document.createElement("td");
	SsessionsTr3Td4.textContent = getSessionsWithParams("s", mountSelected, "3", "StudentAbsentIcon").length;
	// Add TD s inside Tr3
	SsessionsTr3.appendChild(SsessionsTr3Td1);
	SsessionsTr3.appendChild(SsessionsTr3Td2);
	SsessionsTr3.appendChild(SsessionsTr3Td3);
	SsessionsTr3.appendChild(SsessionsTr3Td4);
	console.log("s " + mountSelected + " 1 absent" + getSessionsWithParams("s", mountSelected, "1", "StudentAbsentIcon").length);
	console.log("s " + mountSelected + " 2 absent" + getSessionsWithParams("s", mountSelected, "2", "StudentAbsentIcon").length);
	console.log("s " + mountSelected + " 3 absent" + getSessionsWithParams("s", mountSelected, "3", "StudentAbsentIcon").length);
	
	// Add TR s inside TBODY
	SsessionsTbody.appendChild(SsessionsTr1);
	SsessionsTbody.appendChild(SsessionsTr2);
	SsessionsTbody.appendChild(SsessionsTr3);
	
	// Add TBODY s inside TABLE
	SsessionsTable.appendChild(SsessionsTbody);
	
	// Add TABLE s inside FRONTEND
	mainArea.appendChild(SsessionsTable);
	
	
	
	
	
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	
	// On pousse le tableau (front end) dans le DOM
	
}

function getSessionsWithParams(studentFaOrF, sessionDateMonth, sessionLvl, sessionStatus, sessionType) {
	// Get l'historique des sessions
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	
	let sessionsSelected = [];
	
	// Keep les sessions qui match avec les param
	for (session of sessionsHistoryTab) {
		if (session.studentFaOrF == studentFaOrF && 
		session.sessionDateMonth == sessionDateMonth && 
		session.sessionLvl == sessionLvl && 
		session.sessionStatus == sessionStatus) {
			sessionsSelected.push(session);
		}
	}
	
	return(sessionsSelected);
}



miseEnAttente();


// TODO
// - Faire une fonction a qui on donne AF/F, le mois, le lvl, mentorat/session, et retourne la liste des sessions qui ont match
// - faire une fonction qqui compte le nombre d'étudiant F, le nombre d'étudiant AF



// function displayRecapTabs() {
// 	console.log("displayRecapTabs clicked");
	
// 	let mountSelected = "mai";
	
// 	// On récupère les éléments à supprimer
// 	let mainArea = document.getElementById("mainContent").getElementsByClassName("dom-services-3-dom-services2")[0];
// 	let mainAreaNavTab = mainArea.getElementsByClassName("dom-services-3-dom-services72")[0];
// 	let mainAreaTab = mainArea.lastChild;
	
// 	// On supprime les éléments
// 	mainArea.removeChild(mainAreaNavTab);
// 	mainArea.removeChild(mainAreaTab);
	
	
// 	// Creation du FRONTEND
// 	///////////////////////
// 	///////////////////////
// 	///////////////////////
// 	// Create TABLE af
// 	let AFsessionsTable = document.createElement("table");
// 	// Create TBODY af
// 	let AFsessionsTbody = document.createElement("tbody");
	
// 	// Create TR1 af (EN TETE)
// 	let AFsessionsTr1 = document.createElement("tr");
// 	// Create TD af
// 	let AFsessionsTr1Td1 = document.createElement("td");
// 	AFsessionsTr1Td1.textContent = "AutoFinancé";
// 	let AFsessionsTr1Td2 = document.createElement("td");
// 	AFsessionsTr1Td2.textContent = "Lvl 1";
// 	let AFsessionsTr1Td3 = document.createElement("td");
// 	AFsessionsTr1Td3.textContent = "Lvl 2";
// 	let AFsessionsTr1Td4 = document.createElement("td");
// 	AFsessionsTr1Td4.textContent = "Lvl 3";
// 	// Add TD inside Tr1
// 	AFsessionsTr1.appendChild(AFsessionsTr1Td1);
// 	AFsessionsTr1.appendChild(AFsessionsTr1Td2);
// 	AFsessionsTr1.appendChild(AFsessionsTr1Td3);
// 	AFsessionsTr1.appendChild(AFsessionsTr1Td4);
	
// 	// Create TR2 af (AF REALISEES)
// 	let AFsessionsTr2 = document.createElement("tr");
// 	// Create TD af
// 	let AFsessionsTr2Td1 = document.createElement("td");
// 	AFsessionsTr2Td1.textContent = "Réalisées";
// 	let AFsessionsTr2Td2 = document.createElement("td");
// 	AFsessionsTr2Td2.textContent = getSessionsWithParams("af", mountSelected, "1", "CompletedIcon").length;
// 	let AFsessionsTr2Td3 = document.createElement("td");
// 	AFsessionsTr2Td3.textContent = getSessionsWithParams("af", mountSelected, "2", "CompletedIcon").length;
// 	let AFsessionsTr2Td4 = document.createElement("td");
// 	AFsessionsTr2Td4.textContent = getSessionsWithParams("af", mountSelected, "3", "CompletedIcon").length;
// 	// Add TD af inside Tr2
// 	AFsessionsTr2.appendChild(AFsessionsTr2Td1);
// 	AFsessionsTr2.appendChild(AFsessionsTr2Td2);
// 	AFsessionsTr2.appendChild(AFsessionsTr2Td3);
// 	AFsessionsTr2.appendChild(AFsessionsTr2Td4);
// 	console.log("af " + mountSelected + " 1 présent" + getSessionsWithParams("af", mountSelected, "1", "Réalisée").length);
// 	console.log("af " + mountSelected + " 2 présent" + getSessionsWithParams("af", mountSelected, "2", "Réalisée").length);
// 	console.log("af " + mountSelected + " 3 présent" + getSessionsWithParams("af", mountSelected, "3", "Réalisée").length);
	
// 	// Create TR3 af (AF NO-SHOW)
// 	let AFsessionsTr3 = document.createElement("tr");
// 	// Create TD af
// 	let AFsessionsTr3Td1 = document.createElement("td");
// 	AFsessionsTr3Td1.textContent = "No-Show";
// 	let AFsessionsTr3Td2 = document.createElement("td");
// 	AFsessionsTr3Td2.textContent = getSessionsWithParams("af", mountSelected, "1", "StudentAbsentIcon").length;
// 	let AFsessionsTr3Td3 = document.createElement("td");
// 	AFsessionsTr3Td3.textContent = getSessionsWithParams("af", mountSelected, "2", "StudentAbsentIcon").length;
// 	let AFsessionsTr3Td4 = document.createElement("td");
// 	AFsessionsTr3Td4.textContent = getSessionsWithParams("af", mountSelected, "3", "StudentAbsentIcon").length;
// 	// Add TD af inside Tr3
// 	AFsessionsTr3.appendChild(AFsessionsTr3Td1);
// 	AFsessionsTr3.appendChild(AFsessionsTr3Td2);
// 	AFsessionsTr3.appendChild(AFsessionsTr3Td3);
// 	AFsessionsTr3.appendChild(AFsessionsTr3Td4);
// 	console.log("af " + mountSelected + " 1 absent" + getSessionsWithParams("af", mountSelected, "1", "Étudiant absent").length);
// 	console.log("af " + mountSelected + " 2 absent" + getSessionsWithParams("af", mountSelected, "2", "Étudiant absent").length);
// 	console.log("af " + mountSelected + " 3 absent" + getSessionsWithParams("af", mountSelected, "3", "Étudiant absent").length);
	
// 	// Add TR af inside TBODY
// 	AFsessionsTbody.appendChild(AFsessionsTr1);
// 	AFsessionsTbody.appendChild(AFsessionsTr2);
// 	AFsessionsTbody.appendChild(AFsessionsTr3);
	
// 	// Add TBODY af inside TABLE
// 	AFsessionsTable.appendChild(AFsessionsTbody);
	
// 	// Add TABLE af inside FRONTEND
// 	mainArea.appendChild(AFsessionsTable);
	
// 	///////////////////////
// 	///////////////////////
// 	///////////////////////
// 	// Create TABLE f
// 	let FsessionsTable = document.createElement("table");
// 	// Create TBODY f
// 	let FsessionsTbody = document.createElement("tbody");
	
// 	// Create TR1 f (EN TETE)
// 	let FsessionsTr1 = document.createElement("tr");
// 	// Create TD f
// 	let FsessionsTr1Td1 = document.createElement("td");
// 	FsessionsTr1Td1.textContent = "Financé";
// 	let FsessionsTr1Td2 = document.createElement("td");
// 	FsessionsTr1Td2.textContent = "Lvl 1";
// 	let FsessionsTr1Td3 = document.createElement("td");
// 	FsessionsTr1Td3.textContent = "Lvl 2";
// 	let FsessionsTr1Td4 = document.createElement("td");
// 	FsessionsTr1Td4.textContent = "Lvl 3";
// 	// Add TD inside Tr1
// 	FsessionsTr1.appendChild(FsessionsTr1Td1);
// 	FsessionsTr1.appendChild(FsessionsTr1Td2);
// 	FsessionsTr1.appendChild(FsessionsTr1Td3);
// 	FsessionsTr1.appendChild(FsessionsTr1Td4);
	
// 	// Create TR2 f (F REALISEES)
// 	let FsessionsTr2 = document.createElement("tr");
// 	// Create TD f
// 	let FsessionsTr2Td1 = document.createElement("td");
// 	FsessionsTr2Td1.textContent = "Réalisées";
// 	let FsessionsTr2Td2 = document.createElement("td");
// 	FsessionsTr2Td2.textContent = getSessionsWithParams("f", "juin", "1", "CompletedIcon").length;
// 	let FsessionsTr2Td3 = document.createElement("td");
// 	FsessionsTr2Td3.textContent = getSessionsWithParams("f", "juin", "2", "CompletedIcon").length;
// 	let FsessionsTr2Td4 = document.createElement("td");
// 	FsessionsTr2Td4.textContent = getSessionsWithParams("f", "juin", "3", "CompletedIcon").length;
// 	// Add TD f inside Tr2
// 	FsessionsTr2.appendChild(FsessionsTr2Td1);
// 	FsessionsTr2.appendChild(FsessionsTr2Td2);
// 	FsessionsTr2.appendChild(FsessionsTr2Td3);
// 	FsessionsTr2.appendChild(FsessionsTr2Td4);
// 	console.log("af " + mountSelected + " 1 présent" + getSessionsWithParams("f", mountSelected, "1", "CompletedIcon").length);
// 	console.log("af " + mountSelected + " 2 présent" + getSessionsWithParams("f", mountSelected, "2", "CompletedIcon").length);
// 	console.log("af " + mountSelected + " 3 présent" + getSessionsWithParams("f", mountSelected, "3", "CompletedIcon").length);
	
// 	// Create TR3 f (F NO-SHOW)
// 	let FsessionsTr3 = document.createElement("tr");
// 	// Create TD f
// 	let FsessionsTr3Td1 = document.createElement("td");
// 	FsessionsTr3Td1.textContent = "No-Show";
// 	let FsessionsTr3Td2 = document.createElement("td");
// 	FsessionsTr3Td2.textContent = getSessionsWithParams("f", mountSelected, "1", "StudentAbsentIcon").length;
// 	let FsessionsTr3Td3 = document.createElement("td");
// 	FsessionsTr3Td3.textContent = getSessionsWithParams("f", mountSelected, "2", "StudentAbsentIcon").length;
// 	let FsessionsTr3Td4 = document.createElement("td");
// 	FsessionsTr3Td4.textContent = getSessionsWithParams("f", mountSelected, "3", "StudentAbsentIcon").length;
// 	// Add TD f inside Tr3
// 	FsessionsTr3.appendChild(FsessionsTr3Td1);
// 	FsessionsTr3.appendChild(FsessionsTr3Td2);
// 	FsessionsTr3.appendChild(FsessionsTr3Td3);
// 	FsessionsTr3.appendChild(FsessionsTr3Td4);
// 	console.log("f " + mountSelected + " 1 absent" + getSessionsWithParams("f", mountSelected, "1", "StudentAbsentIcon").length);
// 	console.log("f " + mountSelected + " 2 absent" + getSessionsWithParams("f", mountSelected, "2", "StudentAbsentIcon").length);
// 	console.log("f " + mountSelected + " 3 absent" + getSessionsWithParams("f", mountSelected, "3", "StudentAbsentIcon").length);
	
// 	// Add TR f inside TBODY
// 	FsessionsTbody.appendChild(FsessionsTr1);
// 	FsessionsTbody.appendChild(FsessionsTr2);
// 	FsessionsTbody.appendChild(FsessionsTr3);
	
// 	// Add TBODY f inside TABLE
// 	FsessionsTable.appendChild(FsessionsTbody);
	
// 	// Add TABLE f inside FRONTEND
// 	mainArea.appendChild(FsessionsTable);
	
// 	///////////////////////
// 	///////////////////////
// 	///////////////////////
// 	// Create TABLE s
// 	let SsessionsTable = document.createElement("table");
// 	// Create TBODY s
// 	let SsessionsTbody = document.createElement("tbody");
	
// 	// Create TR1 s (EN TETE)
// 	let SsessionsTr1 = document.createElement("tr");
// 	// Create TD s
// 	let SsessionsTr1Td1 = document.createElement("td");
// 	SsessionsTr1Td1.textContent = "Soutenances";
// 	let SsessionsTr1Td2 = document.createElement("td");
// 	SsessionsTr1Td2.textContent = "Lvl 1";
// 	let SsessionsTr1Td3 = document.createElement("td");
// 	SsessionsTr1Td3.textContent = "Lvl 2";
// 	let SsessionsTr1Td4 = document.createElement("td");
// 	SsessionsTr1Td4.textContent = "Lvl 3";
// 	// Add TD inside Tr1
// 	SsessionsTr1.appendChild(SsessionsTr1Td1);
// 	SsessionsTr1.appendChild(SsessionsTr1Td2);
// 	SsessionsTr1.appendChild(SsessionsTr1Td3);
// 	SsessionsTr1.appendChild(SsessionsTr1Td4);
	
// 	// Create TR2 s (s REALISEES)
// 	let SsessionsTr2 = document.createElement("tr");
// 	// Create TD s
// 	let SsessionsTr2Td1 = document.createElement("td");
// 	SsessionsTr2Td1.textContent = "Réalisées";
// 	let SsessionsTr2Td2 = document.createElement("td");
// 	SsessionsTr2Td2.textContent = getSessionsWithParams("s", "juin", "1", "CompletedIcon").length;
// 	let SsessionsTr2Td3 = document.createElement("td");
// 	SsessionsTr2Td3.textContent = getSessionsWithParams("s", "juin", "2", "CompletedIcon").length;
// 	let SsessionsTr2Td4 = document.createElement("td");
// 	SsessionsTr2Td4.textContent = getSessionsWithParams("s", "juin", "3", "CompletedIcon").length;
// 	// Add TD S inside Tr2
// 	SsessionsTr2.appendChild(SsessionsTr2Td1);
// 	SsessionsTr2.appendChild(SsessionsTr2Td2);
// 	SsessionsTr2.appendChild(SsessionsTr2Td3);
// 	SsessionsTr2.appendChild(SsessionsTr2Td4);
// 	console.log("s " + mountSelected + " 1 présent" + getSessionsWithParams("s", mountSelected, "1", "CompletedIcon").length);
// 	console.log("s " + mountSelected + " 2 présent" + getSessionsWithParams("s", mountSelected, "2", "CompletedIcon").length);
// 	console.log("s " + mountSelected + " 3 présent" + getSessionsWithParams("s", mountSelected, "3", "CompletedIcon").length);
	
// 	// Create TR3 s (S NO-SHOW)
// 	let SsessionsTr3 = document.createElement("tr");
// 	// Create TD s
// 	let SsessionsTr3Td1 = document.createElement("td");
// 	SsessionsTr3Td1.textContent = "No-Show";
// 	let SsessionsTr3Td2 = document.createElement("td");
// 	SsessionsTr3Td2.textContent = getSessionsWithParams("s", mountSelected, "1", "StudentAbsentIcon").length;
// 	let SsessionsTr3Td3 = document.createElement("td");
// 	SsessionsTr3Td3.textContent = getSessionsWithParams("s", mountSelected, "2", "StudentAbsentIcon").length;
// 	let SsessionsTr3Td4 = document.createElement("td");
// 	SsessionsTr3Td4.textContent = getSessionsWithParams("s", mountSelected, "3", "StudentAbsentIcon").length;
// 	// Add TD s inside Tr3
// 	SsessionsTr3.appendChild(SsessionsTr3Td1);
// 	SsessionsTr3.appendChild(SsessionsTr3Td2);
// 	SsessionsTr3.appendChild(SsessionsTr3Td3);
// 	SsessionsTr3.appendChild(SsessionsTr3Td4);
// 	console.log("s " + mountSelected + " 1 absent" + getSessionsWithParams("s", mountSelected, "1", "StudentAbsentIcon").length);
// 	console.log("s " + mountSelected + " 2 absent" + getSessionsWithParams("s", mountSelected, "2", "StudentAbsentIcon").length);
// 	console.log("s " + mountSelected + " 3 absent" + getSessionsWithParams("s", mountSelected, "3", "StudentAbsentIcon").length);
	
// 	// Add TR s inside TBODY
// 	SsessionsTbody.appendChild(SsessionsTr1);
// 	SsessionsTbody.appendChild(SsessionsTr2);
// 	SsessionsTbody.appendChild(SsessionsTr3);
	
// 	// Add TBODY s inside TABLE
// 	SsessionsTable.appendChild(SsessionsTbody);
	
// 	// Add TABLE s inside FRONTEND
// 	mainArea.appendChild(SsessionsTable);
	
	
	
	
	
// 	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	
// 	// On pousse le tableau (front end) dans le DOM
	
// }