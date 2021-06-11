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
		if (newItem.sessionStatus == "Annulée" || newItem.sessionStatus == "Annulée tardivement")
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

function displayRecapTabs() {
	console.log("displayRecapTabs clicked");
	
	// TODO, à ce moment, demander au user le mois à afficher. Pour le moment, set d'une valeur de test 
	let mountSelected = "mai";
	
	// On récupère les éléments à supprimer
	let mainArea = document.getElementById("mainContent").getElementsByClassName("dom-services-3-dom-services2")[0];
	let mainAreaNavTab = mainArea.getElementsByClassName("dom-services-3-dom-services72")[0];
	let mainAreaTab = mainArea.lastChild;
	
	// On supprime les éléments
	mainArea.removeChild(mainAreaNavTab);
	mainArea.removeChild(mainAreaTab);
	
	// Création de l'élément dans lequel je vais ajouter les éléments html
	let myMainArea = document.createElement("div");
	myMainArea.id = "myMainArea";
	mainArea.appendChild(myMainArea);
	
	// Affichage des différents gros tableaux
	displayTab("AutoFinancé", ["af"], [mountSelected], myMainArea, ["Mentorat"]);
	displayTab("Financé", ["f"], [mountSelected], myMainArea, ["Mentorat"]);
	displayTab("Soutenance", ["af", "f"], [mountSelected], myMainArea, ["Soutenance"]);
	displayBigToto();
}

function displayTab(tabName, studentFaOrF, mountSelected, myMainArea, sessionType) {
	// Create TABLE
	let sessionsTable = document.createElement("table");
	sessionsTable.classList.add("recaptTab", "recaptTab"+sessionType, "recaptTab"+studentFaOrF);
	// Create TBODY
	let sessionsTbody = document.createElement("tbody");
	
	//////////////////////////////
	// Create TR1 (EN TETE)
	let sessionsTr1 = document.createElement("tr");
	// Create TD
	let sessionsTr1Td1 = document.createElement("th");
	sessionsTr1Td1.classList.add("tabName");
	sessionsTr1Td1.textContent = tabName;
	//
	let sessionsTr1Td2 = document.createElement("th");
	sessionsTr1Td2.textContent = "Lvl 1 ";
	let sessionsTr1Td2Span = document.createElement("span");
	sessionsTr1Td2Span.classList.add("price", "priceTh");
	if (studentFaOrF == "af")
		sessionsTr1Td2Span.textContent = "(" + 30/2 + ")";
	else
		sessionsTr1Td2Span.textContent = "(" + 30 + ")";
	//
	let sessionsTr1Td3 = document.createElement("th");
	sessionsTr1Td3.textContent = "Lvl 2 ";
	let sessionsTr1Td3Span = document.createElement("span");
	sessionsTr1Td3Span.classList.add("price", "priceTh");
	if (studentFaOrF == "af")
		sessionsTr1Td3Span.textContent = "(" + 35/2 + ")";
	else
		sessionsTr1Td3Span.textContent = "(" + 35 + ")";
	//
	let sessionsTr1Td4 = document.createElement("th");
	sessionsTr1Td4.textContent = "Lvl 3 ";
	let sessionsTr1Td4Span = document.createElement("span");
	sessionsTr1Td4Span.classList.add("price", "priceTh");
	if (studentFaOrF == "af")
		sessionsTr1Td4Span.textContent = "(" + 40/2 + ")";
	else
		sessionsTr1Td4Span.textContent = "(" + 40 + ")";
	//
	let sessionsTr1Td5 = document.createElement("th");
	sessionsTr1Td5.textContent = "Total";
	//
	// Add SPAN inside TD
	sessionsTr1Td2.appendChild(sessionsTr1Td2Span);
	sessionsTr1Td3.appendChild(sessionsTr1Td3Span);
	sessionsTr1Td4.appendChild(sessionsTr1Td4Span);
	//
	// Add TD inside Tr1
	sessionsTr1.appendChild(sessionsTr1Td1);
	sessionsTr1.appendChild(sessionsTr1Td2);
	sessionsTr1.appendChild(sessionsTr1Td3);
	sessionsTr1.appendChild(sessionsTr1Td4);
	sessionsTr1.appendChild(sessionsTr1Td5);
	
	//////////////////////////////
	// Create TR2 (REALISEES)
	let sessionsTr2 = document.createElement("tr");
	// Create TD
	let sessionsTr2Td1 = document.createElement("td");
	sessionsTr2Td1.textContent = "Réalisées";
	//
	let sessionsTr2Td2 = document.createElement("td");
	sessionsTr2Td2.classList.add("data-td", "Réalisée", "lvl1");
	sessionsTr2Td2.addEventListener("click", function(){displayDetails(studentFaOrF, mountSelected, myMainArea, sessionType, "1", "Réalisée");});
	let sessionsTr2Td2Length = getSessionsWithParams(studentFaOrF, mountSelected, ["1"], ["Réalisée"], sessionType).length;
	sessionsTr2Td2.textContent = sessionsTr2Td2Length;
	let sessionsTr2Td2Span = document.createElement("span");
	sessionsTr2Td2Span.classList.add("price", "priceRéalisée", "priceLvl1");
	sessionsTr2Td2Span.textContent += " (" + parseFloat(sessionsTr1Td2Span.textContent.replace('(', '').replace(')', '')) * sessionsTr2Td2Length + ")";
	sessionsTr2Td2.appendChild(sessionsTr2Td2Span);
	//
	let sessionsTr2Td3 = document.createElement("td");
	sessionsTr2Td3.classList.add("data-td", "Réalisée", "lvl2");
	sessionsTr2Td3.addEventListener("click", function(){displayDetails(studentFaOrF, mountSelected, myMainArea, sessionType, "2", "Réalisée");});
	let sessionsTr2Td3Length = getSessionsWithParams(studentFaOrF, mountSelected, ["2"], ["Réalisée"], sessionType).length;
	sessionsTr2Td3.textContent = sessionsTr2Td3Length;
	let sessionsTr2Td3Span = document.createElement("span");
	sessionsTr2Td3Span.classList.add("price", "priceRéalisée", "priceLvl2");
	sessionsTr2Td3Span.textContent += " (" + parseFloat(sessionsTr1Td3Span.textContent.replace('(', '').replace(')', '')) * sessionsTr2Td3Length + ")";
	sessionsTr2Td3.appendChild(sessionsTr2Td3Span);
	//
	let sessionsTr2Td4 = document.createElement("td");
	sessionsTr2Td4.classList.add("data-td", "Réalisée", "lvl3");
	sessionsTr2Td4.addEventListener("click", function(){displayDetails(studentFaOrF, mountSelected, myMainArea, sessionType, "3", "Réalisée");});
	let sessionsTr2Td4Length = getSessionsWithParams(studentFaOrF, mountSelected, ["3"], ["Réalisée"], sessionType).length;
	sessionsTr2Td4.textContent = sessionsTr2Td4Length;
	let sessionsTr2Td4Span = document.createElement("span");
	sessionsTr2Td4Span.classList.add("price", "priceRéalisée", "priceLvl3");
	sessionsTr2Td4Span.textContent += " (" + parseFloat(sessionsTr1Td4Span.textContent.replace('(', '').replace(')', '')) * sessionsTr2Td4Length + ")";
	sessionsTr2Td4.appendChild(sessionsTr2Td4Span);
	//
	let sessionsTr2Td5 = document.createElement("td");
	sessionsTr2Td5.classList.add("Réalisée", "total");
	let total1 = parseFloat(sessionsTr2Td2Span.textContent.replace('(', '').replace(')', '')) + parseFloat(sessionsTr2Td3Span.textContent.replace('(', '').replace(')', '')) + parseFloat(sessionsTr2Td4Span.textContent.replace('(', '').replace(')', '')) + " €";
	sessionsTr2Td5.textContent = total1;
	// Set total sessions of each line
	sessionsTr2Td1.textContent += " (" + (sessionsTr2Td2Length + sessionsTr2Td3Length + sessionsTr2Td4Length) + ")";
	// Add TD inside Tr2
	sessionsTr2.appendChild(sessionsTr2Td1);
	sessionsTr2.appendChild(sessionsTr2Td2);
	sessionsTr2.appendChild(sessionsTr2Td3);
	sessionsTr2.appendChild(sessionsTr2Td4);
	sessionsTr2.appendChild(sessionsTr2Td5);
	
	//////////////////////////////
	// Create TR3 (NO-SHOW)
	let sessionsTr3 = document.createElement("tr");
	// Create TD
	let sessionsTr3Td1 = document.createElement("td");
	sessionsTr3Td1.textContent = "No-Show";
	//
	let sessionsTr3Td2 = document.createElement("td");
	sessionsTr3Td2.classList.add("data-td", "Étudiantabsent", "lvl1");
	sessionsTr3Td2.addEventListener("click", function(){displayDetails(studentFaOrF, mountSelected, myMainArea, sessionType, "1", "Étudiant absent");});
	let sessionsTr3Td2Length = getSessionsWithParams(studentFaOrF, mountSelected, ["1"], ["Étudiant absent"], sessionType).length;
	sessionsTr3Td2.textContent = sessionsTr3Td2Length;
	let sessionsTr3Td2Span = document.createElement("span");
	sessionsTr3Td2Span.classList.add("price", "priceÉtudiantabsent", "priceLvl1");
	if (sessionType == "Soutenance")
		sessionsTr3Td2Span.textContent += " (" + parseFloat(sessionsTr1Td2Span.textContent.replace('(', '').replace(')', '')) * sessionsTr3Td2Length + ")";
	else
		sessionsTr3Td2Span.textContent += " (" + parseFloat(sessionsTr1Td2Span.textContent.replace('(', '').replace(')', '')) * sessionsTr3Td2Length / 2+ ")";
	sessionsTr3Td2.appendChild(sessionsTr3Td2Span);
	//
	let sessionsTr3Td3 = document.createElement("td");
	sessionsTr3Td3.classList.add("data-td", "Étudiantabsent", "lvl2");
	sessionsTr3Td3.addEventListener("click", function(){displayDetails(studentFaOrF, mountSelected, myMainArea, sessionType, "2", "Étudiant absent");});
	let sessionsTr3Td3Length = getSessionsWithParams(studentFaOrF, mountSelected, ["2"], ["Étudiant absent"], sessionType).length;
	sessionsTr3Td3.textContent = sessionsTr3Td3Length;
	let sessionsTr3Td3Span = document.createElement("span");
	sessionsTr3Td3Span.classList.add("price", "priceÉtudiantabsent", "priceLvl2");
	if (sessionType == "Soutenance")
		sessionsTr3Td3Span.textContent += " (" + parseFloat(sessionsTr1Td3Span.textContent.replace('(', '').replace(')', '')) * sessionsTr3Td3Length + ")";
	else
		sessionsTr3Td3Span.textContent += " (" + parseFloat(sessionsTr1Td3Span.textContent.replace('(', '').replace(')', '')) * sessionsTr3Td3Length / 2 + ")";
	sessionsTr3Td3.appendChild(sessionsTr3Td3Span);
	//
	let sessionsTr3Td4 = document.createElement("td");
	sessionsTr3Td4.classList.add("data-td", "Étudiantabsent", "lvl3");
	sessionsTr3Td4.addEventListener("click", function(){displayDetails(studentFaOrF, mountSelected, myMainArea, sessionType, "3", "Étudiant absent");});
	let sessionsTr3Td4Length = getSessionsWithParams(studentFaOrF, mountSelected, ["3"], ["Étudiant absent"], sessionType).length;
	sessionsTr3Td4.textContent = sessionsTr3Td4Length;
	let sessionsTr3Td4Span = document.createElement("span");
	sessionsTr3Td4Span.classList.add("price", "priceÉtudiantabsent", "priceLvl3");
	if (sessionType == "Soutenance")
		sessionsTr3Td4Span.textContent += " (" + parseFloat(sessionsTr1Td4Span.textContent.replace('(', '').replace(')', '')) * sessionsTr3Td4Length + ")";
	else
		sessionsTr3Td4Span.textContent += " (" + parseFloat(sessionsTr1Td4Span.textContent.replace('(', '').replace(')', '')) * sessionsTr3Td4Length / 2 + ")";
	sessionsTr3Td4.appendChild(sessionsTr3Td4Span);
	//
	let sessionsTr3Td5 = document.createElement("td");
	sessionsTr3Td5.classList.add("Étudiantabsent", "total");
	let total2 = parseFloat(sessionsTr3Td2Span.textContent.replace('(', '').replace(')', '')) + parseFloat(sessionsTr3Td3Span.textContent.replace('(', '').replace(')', '')) + parseFloat(sessionsTr3Td4Span.textContent.replace('(', '').replace(')', '')) + " €";
	sessionsTr3Td5.textContent = total2;
	// Set total sessions of each line
	sessionsTr3Td1.textContent += " (" + (sessionsTr3Td2Length + sessionsTr3Td3Length + sessionsTr3Td4Length) + ")";
	// Add TD af inside Tr3
	sessionsTr3.appendChild(sessionsTr3Td1);
	sessionsTr3.appendChild(sessionsTr3Td2);
	sessionsTr3.appendChild(sessionsTr3Td3);
	sessionsTr3.appendChild(sessionsTr3Td4);
	sessionsTr3.appendChild(sessionsTr3Td5);
	
	//////////////////////////////
	// Create TR4 (Etudiants suivis)
	let sessionsTr4 = document.createElement("tr");
	// Create TD
	let sessionsTr4Td1 = document.createElement("td");
	sessionsTr4Td1.textContent = "Etudiants suivis";
	// Create TD 
	let sessionsTr4Td2 = document.createElement("td");
	sessionsTr4Td2.classList.add("data-td", "EtudiantsSuivis");
	///// Get sessions
	let sessions = getSessionsWithParams(studentFaOrF, mountSelected, ["1", "2", "3"], ["Réalisée", "Étudiant absent"], sessionType);
	///// Set TD
	sessionsTr4Td2.textContent = uniqueStudentsAmongSessions(sessions).length;
	sessionsTr4Td2.addEventListener("click", function(){displayUniqueStudentsAmongSessions(studentFaOrF, mountSelected, myMainArea, sessionType, "3", "Étudiant absent", sessions);});
	// Create TD 
	let sessionsTr4Td3 = document.createElement("td");
	let sessionsTr4Td4 = document.createElement("td");
	let sessionsTr4Td5 = document.createElement("td");
	let total3 = 0;
	if (studentFaOrF == "af") {
		sessionsTr4Td5.classList.add("Étudiantsuivis", "total");
		total3 = parseInt(sessionsTr4Td2.textContent) * 30;
		sessionsTr4Td5.textContent = total3 + " €";
	}
	// Add TD af inside Tr4
	sessionsTr4.appendChild(sessionsTr4Td1);
	sessionsTr4.appendChild(sessionsTr4Td2);
	sessionsTr4.appendChild(sessionsTr4Td3);
	sessionsTr4.appendChild(sessionsTr4Td4);
	sessionsTr4.appendChild(sessionsTr4Td5);
	
	//////////////////////////////
	// Create TR5 (Toto)
	let sessionsTr5 = document.createElement("tr");
	// Create TD
	let sessionsTr5Td1 = document.createElement("td");
	sessionsTr5Td1.textContent = "Toto";
	let sessionsTr5Td2 = document.createElement("td");
	let sessionsTr5Td3 = document.createElement("td");
	let sessionsTr5Td4 = document.createElement("td");
	let sessionsTr5Td5 = document.createElement("td");
	sessionsTr5Td5.classList.add("toto");
	sessionsTr5Td5.textContent = parseFloat(total1) + parseFloat(total2) + parseFloat(total3) + "€";
	// Add TD af inside Tr5
	sessionsTr5.appendChild(sessionsTr5Td1);
	sessionsTr5.appendChild(sessionsTr5Td2);
	sessionsTr5.appendChild(sessionsTr5Td3);
	sessionsTr5.appendChild(sessionsTr5Td4);
	sessionsTr5.appendChild(sessionsTr5Td5);

	//////////////////////////////
	// Add TR inside TBODY
	sessionsTbody.appendChild(sessionsTr1);
	sessionsTbody.appendChild(sessionsTr2);
	sessionsTbody.appendChild(sessionsTr3);
	sessionsTbody.appendChild(sessionsTr4);
	sessionsTbody.appendChild(sessionsTr5);
	
	// Add TBODY inside TABLE
	sessionsTable.appendChild(sessionsTbody);
	
	// Add TABLE inside FRONTEND
	myMainArea.appendChild(sessionsTable);
}

function displayBigToto() {
	// Get 3 totos
	let totos = document.getElementsByClassName("toto");
	
	// Create BigToto 
	let bigTotoDiv = document.createElement("div");
	bigTotoDiv.classList.add("bigToto", "bigTotoHT");
	
	// Create BigToto TTC
	let bigTotoDivTTC = document.createElement("div");
	bigTotoDivTTC.classList.add("bigToto", "bigTotoTTC");
	
	// Init BigToto 
	let bigToto = 0;
	for (const toto of totos) {
		console.log("toto.innerHTML => " + toto.innerHTML);
		console.log("parseFloat(toto.textContent) => " + parseFloat(toto.textContent));
		bigToto += parseFloat(toto.textContent);
	}
	bigTotoDiv.textContent = "TOTAL HT  = " + bigToto + " €";
	bigTotoDivTTC.textContent = "TOTAL TTC = " + (bigToto/100*120) + " €";
	
	// Add bigToto inside FRONTEND
	myMainArea.appendChild(bigTotoDiv);
	myMainArea.appendChild(bigTotoDivTTC);
}

function displayDetails(studentFaOrF, mountSelected, myMainArea, sessionType, sessionLvl, sessionStatus) {
	// Clean old sessionsDetailsDiv
	let oldSessionsDetailsDiv = document.getElementsByClassName("sessionsDetailsDiv");
	if(oldSessionsDetailsDiv.length > 0)
	 	document.getElementById("myMainArea").removeChild(oldSessionsDetailsDiv[0]);
		
	// Create Div
	let sessionsDetailsDiv = document.createElement("div");
	sessionsDetailsDiv.classList.add("sessionsDetailsDiv");
	// Create H3
	let sessionsDetailsH3 = document.createElement("h3");
	if (sessionType == "Soutenance")
		sessionsDetailsH3.textContent = "Sessions de " + sessionType +  " de niveau " + sessionLvl + " (" + sessionStatus + ")";
	else
		sessionsDetailsH3.textContent = "Sessions de " + sessionType + " (" + studentFaOrF +  ") de niveau " + sessionLvl + " (" + sessionStatus + ")";
	// Add H3 inside Div
	sessionsDetailsDiv.appendChild(sessionsDetailsH3);
	
	// Get sessions
	let sessions = getSessionsWithParams(studentFaOrF, mountSelected, sessionLvl, sessionStatus, sessionType)
	let c = 1;
	for (session of sessions) {
		let sessionsDetailsP = document.createElement("p");
		sessionsDetailsP.textContent = c + "  =>  " + session.sessionDate + " --- " + session.studentName;
		// Add P inside Div
		sessionsDetailsDiv.appendChild(sessionsDetailsP);
		c++;
	}
	
	// Add Div inside FRONTEND
	myMainArea.appendChild(sessionsDetailsDiv);	
}

function displayUniqueStudentsAmongSessions(studentFaOrF, mountSelected, myMainArea, sessionType, sessionLvl, sessionStatus, studentsList) {
	// Clean old sessionsDetailsDiv
	let oldSessionsDetailsDiv = document.getElementsByClassName("sessionsDetailsDiv");
	if(oldSessionsDetailsDiv.length > 0)
	 	document.getElementById("myMainArea").removeChild(oldSessionsDetailsDiv[0]);
		
	// Create Div
	let sessionsDetailsDiv = document.createElement("div");
	sessionsDetailsDiv.classList.add("sessionsDetailsDiv");
	// Create H3
	let sessionsDetailsH3 = document.createElement("h3");
	if (sessionType == "Soutenance")
		sessionsDetailsH3.textContent = "Etudiants suivis en sessions de " + sessionType;
	else
		sessionsDetailsH3.textContent = "Etudiants suivis en sessions de " + sessionType + " (" + studentFaOrF + ")";
	// Add H3 inside Div
	sessionsDetailsDiv.appendChild(sessionsDetailsH3);
	
	// Get sessions
	let uniqueStudentsList = uniqueStudentsAmongSessions(studentsList);
	let c = 1;
	for (uniqueStudent of uniqueStudentsList) {
		let sessionsDetailsP = document.createElement("p");
		sessionsDetailsP.textContent = c + "  =>  " + uniqueStudent;
		// Add P inside Div
		sessionsDetailsDiv.appendChild(sessionsDetailsP);
		c++;
	}
	
	// Add Div inside FRONTEND
	myMainArea.appendChild(sessionsDetailsDiv);	
}

function getSessionsWithParams(studentFaOrFArray, sessionDateMonthArray, sessionLvlArray, sessionStatusArray, sessionTypeArray) {
	// Get l'historique des sessions
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	
	let sessionsSelected = [];
	
	// Keep les sessions qui match avec les param
	for (session of sessionsHistoryTab) {
		if (studentFaOrFArray.includes(session.studentFaOrF) && 
		sessionDateMonthArray.includes(session.sessionDateMonth) && 
		sessionLvlArray.includes(session.sessionLvl) && 
		sessionStatusArray.includes(session.sessionStatus) && 
		sessionTypeArray.includes(session.sessionType)) {
			sessionsSelected.push(session);
		}
	}
	
	return(sessionsSelected);
}

function uniqueStudentsAmongSessions(sessions) {
	let uniqueStudents = [];
	
	for (session of sessions) {
		let studentNameAlreadyInsideUniqueStudents = 0;
		for (uniqueStudent of uniqueStudents) {
			if (uniqueStudent == session.studentName){
				studentNameAlreadyInsideUniqueStudents++;
				break;
			}
		}
		if (studentNameAlreadyInsideUniqueStudents == 0)
			uniqueStudents.push(session.studentName);
	}
	
	return uniqueStudents;
}

miseEnAttente();