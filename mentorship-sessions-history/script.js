let observerVoirPlusAuto;
let classOfDivContainingTable = ".dom-services-1-dom-services2";
classOfDivContainingTable = "div[data-search-hide-element='true'] > .webapp-0-webapp8 > .webapp-0-webapp9 > #mainContent > .webapp-0-webapp5> #history";

function miseEnAttente() {
	setTimeout(addToolBar, 5000); //On attend 5 secondes avant d'exécuter la fonction
}

function addToolBar() {	
	// Get container 
	let container = document.getElementById("mainContent").getElementsByClassName("webapp-0-webapp5")[0];
	
	// Get navSection 
	let navSection = container.children[2];
	
	// Create toolBar
	let toolBarSection = document.createElement("div");
	toolBarSection.classList.add("toolBarSection");
	
	// Create button 1
	let toolBarSectionButton1 = document.createElement("button");
	toolBarSectionButton1.classList.add("toolBarSectionButton");
	
	let toolBarSectionButtonSpan1 = document.createElement("span");
	toolBarSectionButtonSpan1.classList.add("dom-services-3-MuiButton-label");
	
	let toolBarSectionButtonSpanSpan1 = document.createElement("span");
	toolBarSectionButtonSpanSpan1.textContent = "Ajouter les sessions ci-dessous à la BDD";
	//toolBarSectionButtonSpanSpan1.setAttribute("onclick", "getDisplayedSessions()");
	toolBarSectionButtonSpanSpan1.style.textTransform = "none";
	
	// Create button 2
	let toolBarSectionButton2 = document.createElement("button");
	toolBarSectionButton2.classList.add("toolBarSectionButton");
	
	let toolBarSectionButtonSpan2 = document.createElement("span");
	toolBarSectionButtonSpan2.classList.add("dom-services-3-MuiButton-label");
	
	let toolBarSectionButtonSpanSpan2 = document.createElement("span");
	toolBarSectionButtonSpanSpan2.textContent = "Effacer BDD";
	toolBarSectionButtonSpanSpan2.style.textTransform = "none";
	
	// Create button 3
	let toolBarSectionButton3 = document.createElement("button");
	toolBarSectionButton3.classList.add("toolBarSectionButton");
	
	let toolBarSectionButtonSpan3 = document.createElement("span");
	toolBarSectionButtonSpan3.classList.add("dom-services-3-MuiButton-label");
	
	let toolBarSectionButtonSpanSpan3 = document.createElement("span");
	toolBarSectionButtonSpanSpan3.textContent = "Afficher récapitulatif";
	toolBarSectionButtonSpanSpan3.style.textTransform = "none";
	
	// Create Select month
	///// Select
	let toolBarSectionSelectMonthSelect = document.createElement("select");
	toolBarSectionSelectMonthSelect.id = "monthSelect";
	toolBarSectionSelectMonthSelect.classList.add("toolBarSectionButton");
	toolBarSectionSelectMonthSelect.setAttribute("name", "month");
	///// Option
	////////// Default
	let toolBarSectionSelectMonthSelectOptionDefault = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionDefault.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionDefault.setAttribute("value", "default");
	toolBarSectionSelectMonthSelectOptionDefault.textContent = "Choisir un mois";
	////////// janvier
	let toolBarSectionSelectMonthSelectOptionJanvier = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionJanvier.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionJanvier.setAttribute("value", "janvier");
	toolBarSectionSelectMonthSelectOptionJanvier.textContent = "Janvier";
	////////// février
	let toolBarSectionSelectMonthSelectOptionFevrier = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionFevrier.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionFevrier.setAttribute("value", "février");
	toolBarSectionSelectMonthSelectOptionFevrier.textContent = "Février";
	////////// mars
	let toolBarSectionSelectMonthSelectOptionMars = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionMars.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionMars.setAttribute("value", "mars");
	toolBarSectionSelectMonthSelectOptionMars.textContent = "Mars";
	////////// avril
	let toolBarSectionSelectMonthSelectOptionAvril = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionAvril.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionAvril.setAttribute("value", "avril");
	toolBarSectionSelectMonthSelectOptionAvril.textContent = "Avril";
	////////// mai
	let toolBarSectionSelectMonthSelectOptionMai = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionMai.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionMai.setAttribute("value", "mai");
	toolBarSectionSelectMonthSelectOptionMai.textContent = "Mai";
	////////// juin
	let toolBarSectionSelectMonthSelectOptionJuin = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionJuin.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionJuin.setAttribute("value", "juin");
	toolBarSectionSelectMonthSelectOptionJuin.textContent = "Juin";
	////////// juillet
	let toolBarSectionSelectMonthSelectOptionJuillet = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionJuillet.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionJuillet.setAttribute("value", "juillet");
	toolBarSectionSelectMonthSelectOptionJuillet.textContent = "Juillet";
	////////// août
	let toolBarSectionSelectMonthSelectOptionAout = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionAout.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionAout.setAttribute("value", "août");
	toolBarSectionSelectMonthSelectOptionAout.textContent = "Août";
	////////// septembre
	let toolBarSectionSelectMonthSelectOptionSeptembre = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionSeptembre.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionSeptembre.setAttribute("value", "septembre");
	toolBarSectionSelectMonthSelectOptionSeptembre.textContent = "Septembre";
	////////// octobre
	let toolBarSectionSelectMonthSelectOptionOctobre = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionOctobre.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionOctobre.setAttribute("value", "octobre");
	toolBarSectionSelectMonthSelectOptionOctobre.textContent = "Octobre";
	////////// novembre
	let toolBarSectionSelectMonthSelectOptionNovembre = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionNovembre.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionNovembre.setAttribute("value", "novembre");
	toolBarSectionSelectMonthSelectOptionNovembre.textContent = "Novembre";
	////////// décembre
	let toolBarSectionSelectMonthSelectOptionDecembre = document.createElement("option");
	toolBarSectionSelectMonthSelectOptionDecembre.classList.add("monthSelectOption");
	toolBarSectionSelectMonthSelectOptionDecembre.setAttribute("value", "décembre");
	toolBarSectionSelectMonthSelectOptionDecembre.textContent = "Décembre";

	// Create Select year
	///// Select
	let toolBarSectionSelectYearSelect = document.createElement("select");
	toolBarSectionSelectYearSelect.id = "yearSelect";
	toolBarSectionSelectYearSelect.classList.add("toolBarSectionButton");
	toolBarSectionSelectYearSelect.setAttribute("name", "year");
	///// Option
	////////// Default
	let toolBarSectionSelectYearSelectOptionDefault = document.createElement("option");
	toolBarSectionSelectYearSelectOptionDefault.classList.add("yearSelectOption");
	toolBarSectionSelectYearSelectOptionDefault.setAttribute("value", "default");
	toolBarSectionSelectYearSelectOptionDefault.textContent = "Choisir une année";
	toolBarSectionSelectYearSelect.appendChild(toolBarSectionSelectYearSelectOptionDefault);
	////////// 2015 - Current year
	for (let year = new Date().getFullYear(); year > 2014; year--) {
		let toolBarSectionSelectYear = document.createElement("option");
		toolBarSectionSelectYear.classList.add("yearSelectOption");
		toolBarSectionSelectYear.setAttribute("value", year);
		toolBarSectionSelectYear.textContent = year;
		toolBarSectionSelectYearSelect.appendChild(toolBarSectionSelectYear);
	}

	// // Create Extra
	///// Select
	let toolBarSectionExtra = document.createElement("select");
	toolBarSectionExtra.id = "toolBarSectionExtra";
	toolBarSectionExtra.classList.add("toolBarSectionButton");
	toolBarSectionExtra.setAttribute("name", "extra");
	toolBarSectionExtra.addEventListener("change", function() {
    	if(toolBarSectionExtra.value == "DeleteBDD") {
        	deleteRecapTab();
        	toolBarSectionExtra.value = "default";
    	}
    	else if(toolBarSectionExtra.value == "VoirPlusAuto") {
        	VoirPlusAuto();
    	}
    	else if(toolBarSectionExtra.value == "ManualOverlayReloader") {
        	reloadingOverlay();
    	}
    	else if(toolBarSectionExtra.value == "DisplayFollowedStudents") {
        	displayFollowedStudents();
    	}
    	else if(toolBarSectionExtra.value == "DisplayStats") {
        	displayStatsScreen();
    	}
    	else if(toolBarSectionExtra.value == "DisplayFormationDate") {
        	displayFormationDateScreen();
    	}
	});
	///// Option
	////////// Default
	let toolBarSectionExtraOptionDefault = document.createElement("option");
	toolBarSectionExtraOptionDefault.classList.add("extraDefaultOption");
	toolBarSectionExtraOptionDefault.setAttribute("value", "default");
	toolBarSectionExtraOptionDefault.textContent = " ••• ";
	////////// DeleteBDD
	let toolBarSectionExtraOptionDefaultDeleteBDD = document.createElement("option");
	toolBarSectionExtraOptionDefaultDeleteBDD.classList.add("extraDefaultOptionDeleteBDD");
	toolBarSectionExtraOptionDefaultDeleteBDD.setAttribute("value", "DeleteBDD");
	toolBarSectionExtraOptionDefaultDeleteBDD.textContent = "Effacer BDD";
	////////// VoirPlusAuto
	let toolBarSectionExtraOptionDefaultVoirPlusAuto = document.createElement("option");
	toolBarSectionExtraOptionDefaultVoirPlusAuto.classList.add("extraDefaultOptionVoirPlusAuto");
	toolBarSectionExtraOptionDefaultVoirPlusAuto.setAttribute("value", "VoirPlusAuto");
	toolBarSectionExtraOptionDefaultVoirPlusAuto.textContent = "Voir plus Auto";
	////////// ManualOverlayReloader
	let toolBarSectionExtraOptionDefaulManualOverlayReloader = document.createElement("option");
	toolBarSectionExtraOptionDefaulManualOverlayReloader.classList.add("extraDefaultOptionManualOverlayReloader");
	toolBarSectionExtraOptionDefaulManualOverlayReloader.setAttribute("value", "ManualOverlayReloader");
	toolBarSectionExtraOptionDefaulManualOverlayReloader.textContent = "Manual overlay reloader";
	////////// DisplayFollowedStudents
	let toolBarSectionExtraOptionDefaulDisplayFollowedStudents = document.createElement("option");
	toolBarSectionExtraOptionDefaulDisplayFollowedStudents.classList.add("extraDefaultOptionDisplayFollowedStudents");
	toolBarSectionExtraOptionDefaulDisplayFollowedStudents.setAttribute("value", "DisplayFollowedStudents");
	toolBarSectionExtraOptionDefaulDisplayFollowedStudents.textContent = "Liste des étudiants suivis (all)";
	////////// displayStats
	let toolBarSectionExtraOptionDefaulDisplayStats = document.createElement("option");
	toolBarSectionExtraOptionDefaulDisplayStats.classList.add("extraDefaultOptionDisplayStats");
	toolBarSectionExtraOptionDefaulDisplayStats.setAttribute("value", "DisplayStats");
	toolBarSectionExtraOptionDefaulDisplayStats.textContent = "Statistiques";
	////////// displayStats
	let toolBarSectionExtraOptionDefaulDisplayFormationDate = document.createElement("option");
	toolBarSectionExtraOptionDefaulDisplayFormationDate.classList.add("extraDefaultOptionDisplayFormationDate");
	toolBarSectionExtraOptionDefaulDisplayFormationDate.setAttribute("value", "DisplayFormationDate");
	toolBarSectionExtraOptionDefaulDisplayFormationDate.textContent = "Dates fin formation";
	
	// // Insert button 0
	// toolBarSectionButtonSpan0.appendChild(toolBarSectionButtonSpanSpan0);
	// toolBarSectionButton0.appendChild(toolBarSectionButtonSpan0);
	// toolBarSection.appendChild(toolBarSectionButton0);
	// Insert button 1
	toolBarSectionButtonSpan1.appendChild(toolBarSectionButtonSpanSpan1);
	toolBarSectionButton1.appendChild(toolBarSectionButtonSpan1);
	toolBarSection.appendChild(toolBarSectionButton1);
	// // Insert button 2
	// toolBarSectionButtonSpan2.appendChild(toolBarSectionButtonSpanSpan2);
	// toolBarSectionButton2.appendChild(toolBarSectionButtonSpan2);
	// toolBarSection.appendChild(toolBarSectionButton2);
	// Insert button 3
	toolBarSectionButtonSpan3.appendChild(toolBarSectionButtonSpanSpan3);
	toolBarSectionButton3.appendChild(toolBarSectionButtonSpan3);
	toolBarSection.appendChild(toolBarSectionButton3);
	// Insert Select month
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionDefault);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionJanvier);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionFevrier);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionMars);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionAvril);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionMai);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionJuin);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionJuillet);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionAout);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionSeptembre);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionOctobre);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionNovembre);
	toolBarSectionSelectMonthSelect.appendChild(toolBarSectionSelectMonthSelectOptionDecembre);
	toolBarSection.appendChild(toolBarSectionSelectMonthSelect);
	// Insert Select year
	toolBarSection.appendChild(toolBarSectionSelectYearSelect);
	// // Insert Extra
	// toolBarSection.appendChild(toolBarSectionExtra);
	// Insert Extra
	toolBarSectionExtra.appendChild(toolBarSectionExtraOptionDefault);
	toolBarSectionExtra.appendChild(toolBarSectionExtraOptionDefaultDeleteBDD);
	toolBarSectionExtra.appendChild(toolBarSectionExtraOptionDefaultVoirPlusAuto);
	toolBarSectionExtra.appendChild(toolBarSectionExtraOptionDefaulManualOverlayReloader);
	toolBarSectionExtra.appendChild(toolBarSectionExtraOptionDefaulDisplayFollowedStudents);
	toolBarSectionExtra.appendChild(toolBarSectionExtraOptionDefaulDisplayStats);
	toolBarSectionExtra.appendChild(toolBarSectionExtraOptionDefaulDisplayFormationDate);
	toolBarSection.appendChild(toolBarSectionExtra);
	// AddEventListener
	// toolBarSectionButton0.addEventListener("click", setAF);
	toolBarSectionButton1.addEventListener("click", getDisplayedSessions);
	// toolBarSectionButton2.addEventListener("click", deleteRecapTab);
	toolBarSectionButton3.addEventListener("click", displayRecapTabs);
	// Insert toolBar
	container.insertBefore(toolBarSection, navSection);
}

function getSessionsHistoryTr() {
	// Get displayed sessions Elements TR
	// let sessionsHistory = document.querySelector("#mainContent > " + classOfDivContainingTable + " > table > tbody").querySelectorAll("tr[tabindex='0']");
	// let sessionsHistory = document.querySelector("#mainContent > " + classOfDivContainingTable + " > section > ol").querySelectorAll("a[tabindex='0']");
	let sessionsHistory = document.querySelector("#mainContent > " + classOfDivContainingTable + " > section > ol").querySelectorAll("span.webapp-0-webapp149");
	
	// console.log(sessionsHistory);

	return (sessionsHistory);
}

function getVoirPlus() {
	// Get button "Voir Plus"
	let buttonVoirPlus = document.querySelectorAll("#mainContent > " + classOfDivContainingTable + " > div button"); // Get buttons
	buttonVoirPlus = buttonVoirPlus[buttonVoirPlus.length -1];// Get the last button (Voir Plus)

	return(buttonVoirPlus);
}

function getPaging() {
	let buttonPaging = document.querySelector("#mainContent > " + classOfDivContainingTable + " > ul.webapp-0-webapp168");
	console.log(buttonPaging);

	return(buttonPaging);
}

function setAF() {
	// Get displayed sessions Elements TR
	let sessionsHistory = getSessionsHistoryTr();
	// Insert TD
	for (session of sessionsHistory) {
		if(!session.querySelector(".isItAnAF")) { // Si les switch AF/F n'existent pas
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
}

function getDisplayedSessions() {
	
	// Get displayed sessions Elements
	let sessionsHistory = getSessionsHistoryTr();
	
	// Init sessionsHistoryTab form localstorage
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	if (sessionsHistoryTab == null)
		sessionsHistoryTab = [];

	// Create new object and push it in sessionsHistoryTab
	for (session of sessionsHistory) {
		let newItem = {};
		newItem.studentName = session.getElementsByTagName("a")[0].textContent;
		newItem.sessionStatus = session.getElementsByTagName("svg")[0].getAttribute("aria-label");
		newItem.sessionDate = session.getElementsByTagName("time")[0].textContent;
		newItem.sessionDateMonth = newItem.sessionDate.split(' ')[1];
		newItem.sessionDateYear = newItem.sessionDate.split(' ')[2].match(/\d+/g)[0];
		newItem.sessionId = newItem.sessionDate + " - " + newItem.studentName;
		newItem.sessionType = session.getElementsByTagName("p")[0].textContent;
		// Set newItem.sessionLvl
		if (newItem.sessionStatus == "Annulée" || newItem.sessionStatus == "Annulée tardivement" || newItem.sessionStatus == "Étudiant absent")
			newItem.sessionLvl = "0";
		else {
			if (session.children[3].getElementsByTagName("span")[0])
				newItem.sessionLvl = session.children[3].getElementsByTagName("span")[0].textContent;
			else {
				newItem.sessionLvl = "TO SET";
			}
		}
		// Set newItem.studentFaOrF
		if (session.children[4] == undefined)
			alert("AF/F non set");
		if (session.children[4].getElementsByClassName("switch-input")[0].checked)
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
	alert("Etudiants ajoutés");
	
	markIfSessionIsAlreadyInBDD();
}

function deleteRecapTab() {
	// Creat confirmation databaseResetConfirmationBtns
	let databaseResetConfirmationDiv = document.createElement("div");
	databaseResetConfirmationDiv.classList.add("databaseResetConfirmationDiv");
	
	let databaseResetConfirmationP = document.createElement("p");
	databaseResetConfirmationP.classList.add("databaseResetConfirmationP");
	databaseResetConfirmationP.textContent = "Voulez vous vraiment RAS la BDD ?";
	
	let databaseResetConfirmationBtnContainer = document.createElement("div");
	databaseResetConfirmationBtnContainer.classList.add("databaseResetConfirmationBtnContainer");
	
	let databaseResetConfirmationBtn1 = document.createElement("div");
	databaseResetConfirmationBtn1.textContent = "Non";
	databaseResetConfirmationBtn1.classList.add("databaseResetConfirmationBtn", "databaseResetConfirmationBtn1");
		databaseResetConfirmationBtn1.addEventListener("click", function() {
		// Hide confirmation databaseResetConfirmationBtns
		databaseResetConfirmationDiv.style.display = "none";
	});
	
	let databaseResetConfirmationBtn2 = document.createElement("div");
	databaseResetConfirmationBtn2.textContent = "Oui";
	databaseResetConfirmationBtn2.classList.add("databaseResetConfirmationBtn", "databaseResetConfirmationBtn2");
	databaseResetConfirmationBtn2.addEventListener("click", function() {
		// Hide confirmation databaseResetConfirmationBtns
		databaseResetConfirmationDiv.style.display = "none";
		// remove item from localStorage
		localStorage.removeItem('sessionsHistoryTab');
		// Display remove confirmation msg
		alert("Remise à zéro de la BDD effectuée");
		markIfSessionIsAlreadyInBDD();
	});
	
	
	databaseResetConfirmationDiv.appendChild(databaseResetConfirmationP);
	databaseResetConfirmationBtnContainer.appendChild(databaseResetConfirmationBtn1);
	databaseResetConfirmationBtnContainer.appendChild(databaseResetConfirmationBtn2);
	databaseResetConfirmationDiv.appendChild(databaseResetConfirmationBtnContainer);
	
	let bodyContainer = document.getElementsByTagName("body")[0];
	bodyContainer.appendChild(databaseResetConfirmationDiv);
}

// the button "voir plus" no longer exists
// function VoirPlusAuto() {
// 	// create / set / add button StopVoirPlusAuto
// 	if (document.getElementsByClassName("btnStopVoirPlusAuto").length == 0) {
// 		let btnStopVoirPlusAuto = document.createElement("div");
// 		btnStopVoirPlusAuto.textContent = "Stop Voir Plus Auto";
// 		btnStopVoirPlusAuto.classList.add("btnStopVoirPlusAuto");
// 		btnStopVoirPlusAuto.addEventListener("click", stopObserverVoirPlusAuto);
		
// 		let bodyContainer = document.getElementsByTagName("body")[0];
// 		bodyContainer.appendChild(btnStopVoirPlusAuto);
// 	}
// 	else
// 		document.getElementsByClassName("btnStopVoirPlusAuto")[0].style.display = "block";
	
	
// 	let elementToObserve = document.querySelector("#mainContent > " + classOfDivContainingTable);
// 	let options = {childList: true, subtree: true};
// 	observerVoirPlusAuto = new MutationObserver(mCallback);
	
// 	function mCallback(mutations) {
// 		let SessionsHistoryTrLength = document.querySelectorAll("#mainContent > " + classOfDivContainingTable + " > section > ol > li").length;
// 		console.log(SessionsHistoryTrLength);
// 		let buttonVoirPLus = getVoirPlus();
// 		// if (buttonVoirPLus) {
// 		if (SessionsHistoryTrLength > 0) {
// 			window.scrollTo(0,document.body.scrollHeight);
// 			buttonVoirPLus.click();
// 		}
// 		// observerVoirPlusAuto.disconnect();
// 	}
	
// 	observerVoirPlusAuto.observe(elementToObserve, options);
	
	
// 	let buttonVoirPLus = getVoirPlus();
// 	buttonVoirPLus.click();
// }

function stopObserverVoirPlusAuto() {
	observerVoirPlusAuto.disconnect();
	document.getElementsByClassName("btnStopVoirPlusAuto")[0].style.display = "none";
}

function displayRecapTabs() {
	// On récupère les éléments à cacher
	let mainArea = document.getElementById("mainContent").getElementsByClassName("webapp-0-webapp5")[0];
	let elementsToHide = [mainArea.querySelector("#history"), 
						  mainArea.querySelector("#history").previousElementSibling];
	
	// Get selected month and year
	let monthSelected =  document.getElementById("monthSelect").value;
	let yearSelected =  document.getElementById("yearSelect").value;
	if (monthSelected == "default")
		alert("Choisir un mois");
	if (yearSelected == "default")
		alert("Choisir une année");
	else {
		// On cache les éléments de la page "mentorship-sessions-history" pour faire du vide (un menu, la liste des étudiants)
		if (elementsToHide[0].style.display != "none") {
			for (elementToHide of elementsToHide)
				elementToHide.style.display = "none";
		}
		// Si ancien tableau récapitulatif est déjà affiché, on supprime celui-ci
		if (document.getElementById("RecapTabsArea")) 
			mainArea.removeChild(document.getElementById("RecapTabsArea"));
		
		// Création de l'élément dans lequel je vais ajouter les éléments html
		let RecapTabsArea = document.createElement("div");
		RecapTabsArea.id = "RecapTabsArea";
		mainArea.appendChild(RecapTabsArea);
		
		// Affichage de la croix (exit)
		let exitCross = document.createElement("div");
		exitCross.id = "RecapTabsAreaExit";
		exitCross.textContent = "X";
		exitCross.addEventListener('click', function() {
			hideRecapTabs(elementsToHide, RecapTabsArea);
		});
		RecapTabsArea.appendChild(exitCross);
		
		// Affichage des différents gros tableaux
		displayTab("AutoFinancé", ["af"], [monthSelected], [yearSelected], RecapTabsArea, ["Mentorat"]);
		displayTab("Financé", ["f"], [monthSelected], [yearSelected], RecapTabsArea, ["Mentorat"]);
		displayTab("Soutenance", ["af", "f"], [monthSelected], [yearSelected], RecapTabsArea, ["Soutenance"]);
		displayBigToto(RecapTabsArea);
	}
}

function hideRecapTabs(elementsToDisplay, elementToHide) {
	elementsToDisplay[0].style.display = "block";
	elementsToDisplay[1].style.display = "block";
	elementToHide.style.display = "none";
}

function displayTab(tabName, studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType) {
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
	sessionsTr2Td2.addEventListener("click", function(){displayDetails(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, "1", "Réalisée");});
	let sessionsTr2Td2Length = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, ["1"], ["Réalisée"], sessionType).length;
	sessionsTr2Td2.textContent = sessionsTr2Td2Length;
	let sessionsTr2Td2Span = document.createElement("span");
	sessionsTr2Td2Span.classList.add("price", "priceRéalisée", "priceLvl1");
	sessionsTr2Td2Span.textContent += " (" + parseFloat(sessionsTr1Td2Span.textContent.replace('(', '').replace(')', '')) * sessionsTr2Td2Length + ")";
	sessionsTr2Td2.appendChild(sessionsTr2Td2Span);
	//
	let sessionsTr2Td3 = document.createElement("td");
	sessionsTr2Td3.classList.add("data-td", "Réalisée", "lvl2");
	sessionsTr2Td3.addEventListener("click", function(){displayDetails(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, "2", "Réalisée");});
	let sessionsTr2Td3Length = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, ["2"], ["Réalisée"], sessionType).length;
	sessionsTr2Td3.textContent = sessionsTr2Td3Length;
	let sessionsTr2Td3Span = document.createElement("span");
	sessionsTr2Td3Span.classList.add("price", "priceRéalisée", "priceLvl2");
	sessionsTr2Td3Span.textContent += " (" + parseFloat(sessionsTr1Td3Span.textContent.replace('(', '').replace(')', '')) * sessionsTr2Td3Length + ")";
	sessionsTr2Td3.appendChild(sessionsTr2Td3Span);
	//
	let sessionsTr2Td4 = document.createElement("td");
	sessionsTr2Td4.classList.add("data-td", "Réalisée", "lvl3");
	sessionsTr2Td4.addEventListener("click", function(){displayDetails(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, "3", "Réalisée");});
	let sessionsTr2Td4Length = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, ["3"], ["Réalisée"], sessionType).length;
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
	sessionsTr3Td2.addEventListener("click", function(){displayDetails(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, "1", "Étudiant absent");});
	let sessionsTr3Td2Length = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, ["1"], ["Étudiant absent"], sessionType).length;
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
	sessionsTr3Td3.addEventListener("click", function(){displayDetails(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, "2", "Étudiant absent");});
	let sessionsTr3Td3Length = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, ["2"], ["Étudiant absent"], sessionType).length;
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
	sessionsTr3Td4.addEventListener("click", function(){displayDetails(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, "3", "Étudiant absent");});
	let sessionsTr3Td4Length = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, ["3"], ["Étudiant absent"], sessionType).length;
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
	let sessions = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, ["1", "2", "3"], ["Réalisée", "Étudiant absent"], sessionType);
	///// Set TD
	sessionsTr4Td2.textContent = uniqueStudentsAmongSessions(sessions).length;
	sessionsTr4Td2.addEventListener("click", function(){displayUniqueStudentsAmongSessions(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, "3", "Étudiant absent", sessions);});
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
	RecapTabsArea.appendChild(sessionsTable);
}

function displayBigToto(RecapTabsArea) {
	// Get 3 totos
	let totos = document.getElementsByClassName("toto");
	
	// Create BigToto HT
	let bigTotoDivHT = document.createElement("div");
	bigTotoDivHT.classList.add("bigToto", "bigTotoHT");
	
	// Create BigToto Net
	let bigTotoDivNet = document.createElement("div");
	bigTotoDivNet.classList.add("bigToto", "bigTotoNet");
	
	// Create BigToto TTC
	let bigTotoDivTTC = document.createElement("div");
	bigTotoDivTTC.classList.add("bigToto", "bigTotoTTC");
	
	// Init BigToto 
	let bigToto = 0;
	for (const toto of totos) {
		bigToto += parseFloat(toto.textContent);
	}
	bigTotoDivTTC.textContent = "TOTAL TTC  = " + (bigToto/100*120) + " €";
	bigTotoDivHT.textContent  = "TOTAL HT   = " + bigToto + " €";
	bigTotoDivNet.textContent = "TOTAL NET  = " + bigToto/100*75 + " €";
	
	// Add bigToto inside FRONTEND
	RecapTabsArea.appendChild(bigTotoDivTTC);
	RecapTabsArea.appendChild(bigTotoDivHT);
	RecapTabsArea.appendChild(bigTotoDivNet);
}

function displayDetails(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, sessionLvl, sessionStatus) {
	// Clean old sessionsDetailsDiv
	let oldSessionsDetailsDiv = document.getElementsByClassName("sessionsDetailsDiv");
	if(oldSessionsDetailsDiv.length > 0)
	 	document.getElementById("RecapTabsArea").removeChild(oldSessionsDetailsDiv[0]);
		
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
	let sessions = getSessionsWithParams(studentFaOrF, monthSelected, yearSelected, sessionLvl, sessionStatus, sessionType)
	let c = 1;
	for (session of sessions) {
		let sessionsDetailsP = document.createElement("p");
		sessionsDetailsP.textContent = c + "  =>  " + session.sessionDate + " --- " + session.studentName;
		// Add P inside Div
		sessionsDetailsDiv.appendChild(sessionsDetailsP);
		c++;
	}
	
	// Add Div inside FRONTEND
	RecapTabsArea.appendChild(sessionsDetailsDiv);	
}

function displayUniqueStudentsAmongSessions(studentFaOrF, monthSelected, yearSelected, RecapTabsArea, sessionType, sessionLvl, sessionStatus, studentsList) {
	// Clean old sessionsDetailsDiv
	let oldSessionsDetailsDiv = document.getElementsByClassName("sessionsDetailsDiv");
	if(oldSessionsDetailsDiv.length > 0)
	 	document.getElementById("RecapTabsArea").removeChild(oldSessionsDetailsDiv[0]);
		
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
	RecapTabsArea.appendChild(sessionsDetailsDiv);	
}

function getSessionsWithParams(studentFaOrFArray, sessionDateMonthArray, sessionDateYearArray, sessionLvlArray, sessionStatusArray, sessionTypeArray) {
	// Get l'historique des sessions
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	
	let sessionsSelected = [];
	
	// Keep les sessions qui match avec les param
	for (session of sessionsHistoryTab) {
		if (studentFaOrFArray.includes(session.studentFaOrF) && 
		sessionDateMonthArray.includes(session.sessionDateMonth) && 
		sessionDateYearArray.includes(session.sessionDateYear) && 
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

function markIfSessionIsAlreadyInBDD() {
	// Get sessions BDD
	let sessionsHistoryBDD = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	// Get displayed sessions Elements TR
	let sessionsHistoryDisplayed = getSessionsHistoryTr();
	// Check if sessionsDisplayed are already in the BDD
	for (sessionDisplayed of sessionsHistoryDisplayed) {
		let sessionDisplayedId = sessionDisplayed.getElementsByTagName("time")[0].textContent + " - " + sessionDisplayed.querySelectorAll('span > div')[2].querySelector('div').lastChild.textContent;
		sessionDisplayed.getElementsByClassName("isItAnAF")[0].classList.remove("studentListed");
		sessionDisplayed.getElementsByClassName("isItAnAF")[0].classList.remove("studentListedAlreadyInBDD");
		sessionDisplayed.getElementsByClassName("isItAnAF")[0].classList.add("studentListed");
		if (sessionsHistoryBDD)
			for (sessionBDD of sessionsHistoryBDD) {
				if (sessionDisplayedId == sessionBDD.sessionId)
					sessionDisplayed.getElementsByClassName("isItAnAF")[0].classList.add("studentListedAlreadyInBDD");
			}
	}
}

function markIfSessionIsAForF() {
	// Get sessions BDD
	let sessionsHistoryBDD = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	// Get displayed sessions Elements TR
	let sessionsHistoryDisplayed = getSessionsHistoryTr();
	// Check if sessionsDisplayed are AF or F sessions
	for (sessionDisplayed of sessionsHistoryDisplayed) {
		let sessionDisplayedId = sessionDisplayed.getElementsByTagName("time")[0].textContent + " - " + sessionDisplayed.querySelectorAll('span > div')[2].querySelector('div').lastChild.textContent;
		if (sessionsHistoryBDD)
		for (sessionBDD of sessionsHistoryBDD) {
			if (sessionDisplayedId == sessionBDD.sessionId)
				if (sessionBDD.studentFaOrF == "af")
					sessionDisplayed.getElementsByClassName("switch-input")[0].checked = true;
		}
	}
}

function updateStudentsList() {
	// Get displayed sessions Elements
	let sessionsHistory = getSessionsHistoryTr();
	
	// Init sessionsHistoryTab form localstorage
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	if (sessionsHistoryTab == null)
		sessionsHistoryTab = [];
	
	// Init allStudentListTab form localstorage
	let allStudentListTab = JSON.parse(localStorage.getItem('allStudentListTab'));
	if (allStudentListTab == null)
		allStudentListTab = [];

	// Parse sessions list and add new student inside allStudentListTab to localstorage
	for (session of sessionsHistory) {
		let currentStudent = {};
		currentStudent.name = session.querySelectorAll('span > div')[2].querySelector('div').lastChild.textContent;
		if (session.querySelectorAll('span > div')[2].querySelector('div').lastChild.href)
			currentStudent.link = session.querySelectorAll('span > div')[2].querySelector('div').lastChild.href;
		else
			currentStudent.link = "href undefined by OC";
		currentStudent.type = session.getElementsByTagName("p")[0].textContent;
		
		// On va vérifier si l'étudiant n'est pas déjà présent dans allStudentListTab
		let alreadyExistingStudent = 0;
		for (student of allStudentListTab) {
			if(student.name == currentStudent.name) {
				if (student.type == currentStudent.type) {
					alreadyExistingStudent++;
					break;
				}
			}
		}
		// Si l'étudiant n'est pas déjà présent dans allStudentListTab, on l'ajoute dans localStorage
		if(alreadyExistingStudent == 0)
			allStudentListTab.unshift(currentStudent);
	}
	
	// Update sessionsHistoryTab in localStorage
	localStorage.setItem('allStudentListTab', JSON.stringify(allStudentListTab));
}

function displayFollowedStudents() {
	// On récupère les éléments à cacher
	let mainArea = document.getElementById("mainContent").getElementsByClassName("webapp-0-webapp5")[0];
	let elementsToHide = [mainArea.querySelector("#history"), 
						  mainArea.querySelector("#history").previousElementSibling];
	


	// On cache les éléments de la page "mentorship-sessions-history" pour faire du vide (un menu, la liste des étudiants, la pagination)
	if (elementsToHide[0].style.display != "none") {
		for (elementToHide of elementsToHide)
			elementToHide.style.display = "none";
	}
	// Si liste d'étudiants est déjà affichée, on supprime celui-ci
	if (document.getElementById("studentsListTabsArea")) 
		mainArea.removeChild(document.getElementById("studentsListTabsArea"));
	
	// Création de l'élément dans lequel je vais ajouter les éléments html
	let studentsListTabsArea = document.createElement("div");
	studentsListTabsArea.id = "studentsListTabsArea";
	mainArea.appendChild(studentsListTabsArea);
	
	// Affichage de la croix (exit)
	let exitCross = document.createElement("div");
	exitCross.id = "studentsListTabsAreaExit";
	exitCross.textContent = "X";
	exitCross.addEventListener('click', function() {
		hideRecapTabs(elementsToHide, studentsListTabsArea);
	});
	studentsListTabsArea.appendChild(exitCross);
	
	// Affichage des différents gros tableaux
	displayStudentsList(studentsListTabsArea);
}

function howManyStudentsMentoratFollowed(allStudentListTab) {
	let counter = 0;
	
	for (student of allStudentListTab) {
		if (student.type == "Mentorat")
			counter++;
	}
	
	return counter;
}

function howManyStudentsSoutenanceFollowed(allStudentListTab) {
	let counter = 0;
	
	for (student of allStudentListTab) {
		if (student.type == "Soutenance") {
			let isItMentoredStudent = 0;
			for (studentNestedFor of allStudentListTab) {
				if (studentNestedFor.name == student.name && studentNestedFor.type == "Mentorat") {
					isItMentoredStudent++;
					break;
				}
			}
			if (isItMentoredStudent == 0)
				counter++;
		}
	}
	
	console.log(counter);
	return counter;
}

function displayStudentsList(studentsListTabsArea) {
	// Init allStudentListTab form localstorage
	let allStudentListTab = JSON.parse(localStorage.getItem('allStudentListTab'));
	if (allStudentListTab == null)
		alert("Aucun étudiant suivi");
		
	let studentsListMentoring = document.createElement("div");
	studentsListMentoring.classList.add("studentsList", "studentsListMentoring");
	//////
	let studentsListMentoringH2 = document.createElement("h2");
	studentsListMentoringH2.classList.add("studentsListH2");
	studentsListMentoringH2.textContent = "Etudiants suivis (mentorat)";
	studentsListMentoring.appendChild(studentsListMentoringH2);
	//////
	let studentsMentoring = howManyStudentsMentoratFollowed(allStudentListTab);
	for (student of allStudentListTab) {
		if (student.type == "Mentorat") {
			let studentsListMentoringP = document.createElement("p");
			studentsListMentoringP.classList.add("studentsListP");
			let studentsListMentoringA = document.createElement("a");
			studentsListMentoringA.classList.add("studentsListA");
			studentsListMentoringA.textContent = studentsMentoring + " - " + student.name;
			studentsListMentoringA.href = student.link;
			studentsListMentoringA.setAttribute("target", "_blank");
			studentsListMentoringP.appendChild(studentsListMentoringA);
			studentsListMentoring.appendChild(studentsListMentoringP);
			studentsMentoring--;
		}
	}
	
	let studentsListDefense = document.createElement("div");
	studentsListDefense.classList.add("studentsList", "studentsListDefense");
	//////
	let studentsListDefenseH2 = document.createElement("h2");
	studentsListDefenseH2.classList.add("studentsListH2");
	studentsListDefenseH2.textContent = "Etudiants suivis (soutenance)";
	studentsListDefense.appendChild(studentsListDefenseH2);
	//////
	let studentsDefense = howManyStudentsSoutenanceFollowed(allStudentListTab);
	for (student of allStudentListTab) {
		if (student.type == "Soutenance") {
			let mentoredStudent = 0;
			// L'idée ici est de retirer les soutenances pour les étudiants mentorés, pour ne garder que les étudiants vus en soutenances uniquement
			for (studentNestedFor of allStudentListTab) {
				if (studentNestedFor.name == student.name && studentNestedFor.type == "Mentorat"){
					mentoredStudent++;
					break;
				}
			}
			if (mentoredStudent == 0) {
				let studentsListDefenseP = document.createElement("p");
				studentsListDefenseP.classList.add("studentsListP");
				let studentsListDefenseA = document.createElement("a");
				studentsListDefenseA.classList.add("studentsListA");
				studentsListDefenseA.textContent = studentsDefense + " - " + student.name;
				studentsListDefenseA.href = student.link;
				studentsListDefenseA.setAttribute("target", "_blank");
				studentsListDefenseP.appendChild(studentsListDefenseA);
				studentsListDefense.appendChild(studentsListDefenseP);
				studentsDefense--;
			}
		}
	}
	
	let studentsListContainer = document.createElement("div");
	studentsListContainer.classList.add("studentsListContainer");
	studentsListContainer.appendChild(studentsListMentoring);
	studentsListContainer.appendChild(studentsListDefense);
	studentsListTabsArea.appendChild(studentsListContainer);
	
}

function displayStatsScreen() {
	// On récupère les éléments à cacher
	let mainArea = document.getElementById("mainContent").getElementsByClassName("webapp-0-webapp5")[0];
	let elementsToHide = [mainArea.querySelector("#history"), 
						  mainArea.querySelector("#history").previousElementSibling];
	


	// On cache les éléments de la page "mentorship-sessions-history" pour faire du vide (un menu, la liste des étudiants, la pagination)
	if (elementsToHide[0].style.display != "none") {
		for (elementToHide of elementsToHide)
			elementToHide.style.display = "none";
	}
	// Si les stats sont déjà affichées, on supprime celui-ci
	if (document.getElementById("statsArea")) 
		mainArea.removeChild(document.getElementById("statsArea"));
	
	// Création de l'élément dans lequel je vais ajouter les éléments html
	let statsArea = document.createElement("div");
	statsArea.id = "statsArea";
	mainArea.appendChild(statsArea);
	
	// Affichage de la croix (exit)
	let exitCross = document.createElement("div");
	exitCross.id = "statsAreaExit";
	exitCross.textContent = "X";
	exitCross.addEventListener('click', function() {
		hideRecapTabs(elementsToHide, statsArea);
	});
	statsArea.appendChild(exitCross);
	
	// Affichage des différents gros tableaux
	displayStats(statsArea);
}

function displayFormationDateScreen() {
	// On récupère les éléments à cacher
	let mainArea = document.getElementById("mainContent").getElementsByClassName("webapp-0-webapp5")[0];
	let elementsToHide = [mainArea.querySelector("#history"), 
						  mainArea.querySelector("#history").previousElementSibling];
	


	// On cache les éléments de la page "mentorship-sessions-history" pour faire du vide (un menu, la liste des étudiants, la pagination)
	if (elementsToHide[0].style.display != "none") {
		for (elementToHide of elementsToHide)
			elementToHide.style.display = "none";
	}
	// Si les stats sont déjà affichées, on supprime celui-ci
	if (document.getElementById("formationDateArea")) 
		mainArea.removeChild(document.getElementById("formationDateArea"));
	
	// Création de l'élément dans lequel je vais ajouter les éléments html
	let formationDateArea = document.createElement("div");
	formationDateArea.id = "formationDateArea";
	mainArea.appendChild(formationDateArea);
	
	// Affichage de la croix (exit)
	let exitCross = document.createElement("div");
	exitCross.id = "formationDateAreaExit";
	exitCross.textContent = "X";
	exitCross.addEventListener('click', function() {
		hideRecapTabs(elementsToHide, formationDateArea);
	});
	formationDateArea.appendChild(exitCross);
	
	// Affichage des différents gros tableaux
	displayFormationDate(formationDateArea);
}

function howManySessions() {
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	let howManySessions = {
		executed: 0,
		canceled: 0,
		lateCanceled: 0,
		absentStudent: 0
	};

	let counter = 0;
	for (session of sessionsHistoryTab) {
		if (session.sessionStatus == "Réalisée")
			howManySessions.executed++;
		else if (session.sessionStatus == "Annulée")
			howManySessions.canceled++;
		else if (session.sessionStatus == "Annulée tardivement")
			howManySessions.lateCanceled++;
		else if (session.sessionStatus == "Étudiant absent")
			howManySessions.absentStudent++;
		else
			alert("Problème avec le status d'une session, sessionId = " + session.sessionId);
	}

	return howManySessions;
}

function displayStats(statsArea) {

	let allStudentListTab = JSON.parse(localStorage.getItem('allStudentListTab'));
	let sessionsCounting = howManySessions();

	let studentsMentoringFollowedNumberDiv = document.createElement("div");
	studentsMentoringFollowedNumberDiv.classList.add("statsDiv", "studentsMentoringFollowedNumber");
	//////
	let studentsMentoringFollowedNumberH2 = document.createElement("h2");
	studentsMentoringFollowedNumberH2.classList.add("studentsMentoringFollowedNumberH2");
	studentsMentoringFollowedNumberH2.textContent = "Etudiants suivis (mentorat) : ";
	studentsMentoringFollowedNumberDiv.appendChild(studentsMentoringFollowedNumberH2);
	//////
	let studentsMentoringFollowedNumberP = document.createElement("p");
	studentsMentoringFollowedNumberP.classList.add("studentsMentoringFollowedNumberP");
	studentsMentoringFollowedNumberP.textContent = howManyStudentsMentoratFollowed(allStudentListTab);
	studentsMentoringFollowedNumberDiv.appendChild(studentsMentoringFollowedNumberP);
	
	let studentsSoutenanceFollowedNumberDiv = document.createElement("div");
	studentsSoutenanceFollowedNumberDiv.classList.add("statsDiv", "studentsSoutenanceFollowedNumber");
	//////
	let studentsSoutenanceFollowedNumberH2 = document.createElement("h2");
	studentsSoutenanceFollowedNumberH2.classList.add("studentsSoutenanceFollowedNumberH2");
	studentsSoutenanceFollowedNumberH2.textContent = "Etudiants suivis (soutenance) : ";
	studentsSoutenanceFollowedNumberDiv.appendChild(studentsSoutenanceFollowedNumberH2);
	//////
	let studentsSoutenanceFollowedNumberP = document.createElement("p");
	studentsSoutenanceFollowedNumberP.classList.add("studentsSoutenanceFollowedNumberP");
	studentsSoutenanceFollowedNumberP.textContent = howManyStudentsSoutenanceFollowed(allStudentListTab);
	studentsSoutenanceFollowedNumberDiv.appendChild(studentsSoutenanceFollowedNumberP);

	let sessionsExecutedNumberDiv = document.createElement("div");
	sessionsExecutedNumberDiv.classList.add("statsDiv", "sessionsExecutedNumber");
	//////
	let sessionsExecutedNumberH2 = document.createElement("h2");
	sessionsExecutedNumberH2.classList.add("sessionsExecutedNumberH2");
	sessionsExecutedNumberH2.textContent = "Nombre de sessions réalisées (session + soutenance) : ";
	sessionsExecutedNumberDiv.appendChild(sessionsExecutedNumberH2);
	//////
	let sessionsExecutedNumberP = document.createElement("p");
	sessionsExecutedNumberP.classList.add("sessionsExecutedNumberP");
	sessionsExecutedNumberP.textContent = sessionsCounting.executed;
	sessionsExecutedNumberDiv.appendChild(sessionsExecutedNumberP);
	
	let sessionsCanceledNumberDiv = document.createElement("div");
	sessionsCanceledNumberDiv.classList.add("statsDiv", "sessionsCanceledNumber");
	//////
	let sessionsCanceledNumberH2 = document.createElement("h2");
	sessionsCanceledNumberH2.classList.add("sessionsCanceledNumberH2");
	sessionsCanceledNumberH2.textContent = "Nombre de sessions annulées (session + soutenance) : ";
	sessionsCanceledNumberDiv.appendChild(sessionsCanceledNumberH2);
	//////
	let sessionsCanceledNumberP = document.createElement("p");
	sessionsCanceledNumberP.classList.add("sessionsCanceledNumberP");
	sessionsCanceledNumberP.textContent = sessionsCounting.canceled;
	sessionsCanceledNumberDiv.appendChild(sessionsCanceledNumberP);
	
	let sessionsLateCanceledNumberDiv = document.createElement("div");
	sessionsLateCanceledNumberDiv.classList.add("statsDiv", "sessionsLateCanceledNumber");
	//////
	let sessionsLateCanceledNumberH2 = document.createElement("h2");
	sessionsLateCanceledNumberH2.classList.add("sessionsLateCanceledNumberH2");
	sessionsLateCanceledNumberH2.textContent = "Nombre de sessions annulées tardivement (session + soutenance) : ";
	sessionsLateCanceledNumberDiv.appendChild(sessionsLateCanceledNumberH2);
	//////
	let sessionsLateCanceledNumberP = document.createElement("p");
	sessionsLateCanceledNumberP.classList.add("sessionsLateCanceledNumberP");
	sessionsLateCanceledNumberP.textContent = sessionsCounting.lateCanceled;
	sessionsLateCanceledNumberDiv.appendChild(sessionsLateCanceledNumberP);
	
	let sessionsAbsentStudentNumberDiv = document.createElement("div");
	sessionsAbsentStudentNumberDiv.classList.add("statsDiv", "sessionsAbsentStudentNumber");
	//////
	let sessionsAbsentStudentNumberH2 = document.createElement("h2");
	sessionsAbsentStudentNumberH2.classList.add("sessionsAbsentStudentNumberH2");
	sessionsAbsentStudentNumberH2.textContent = "Nombre d'absences d'étudiants (session + soutenance) : ";
	sessionsAbsentStudentNumberDiv.appendChild(sessionsAbsentStudentNumberH2);
	//////
	let sessionsAbsentStudentNumberP = document.createElement("p");
	sessionsAbsentStudentNumberP.classList.add("sessionsAbsentStudentNumberP");
	sessionsAbsentStudentNumberP.textContent = sessionsCounting.absentStudent;
	sessionsAbsentStudentNumberDiv.appendChild(sessionsAbsentStudentNumberP);

	statsArea.appendChild(studentsMentoringFollowedNumberDiv);
	statsArea.appendChild(studentsSoutenanceFollowedNumberDiv);
	statsArea.appendChild(sessionsExecutedNumberDiv);
	statsArea.appendChild(sessionsCanceledNumberDiv);
	statsArea.appendChild(sessionsLateCanceledNumberDiv);
	statsArea.appendChild(sessionsAbsentStudentNumberDiv);
}

function displayFormationDate(formationDateArea) {

	let studentsListTab = JSON.parse(localStorage.getItem('studentsListTab'));
	
	// Sort studentsListTab by date
	studentsListTab.sort((a,b) => (a.formationDate > b.formationDate) ? 1 : ((b.formationDate > a.formationDate) ? -1 : 0))
	
	let months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
	
	let studentsContainer = document.createElement("div");
	studentsContainer.classList.add("studentsContainer");
	
	
	let studentsNameColumn = document.createElement("div");
	studentsNameColumn.classList.add("studentsContainerColumn", "studentsNameColumn");
	
	let studentsNameColumnH2 = document.createElement("h2");
	studentsNameColumnH2.classList.add("studentsContainerColumnH2", "studentsNameColumnH2");
	studentsNameColumnH2.textContent = "Etudiants :";

	studentsNameColumn.appendChild(studentsNameColumnH2);	

	
	let studentsDateColumn = document.createElement("div");
	studentsDateColumn.classList.add("studentsContainerColumn", "studentsDateColumn");
	
	let studentsDateColumnH2 = document.createElement("h2");
	studentsDateColumnH2.classList.add("studentsContainerColumnH2", "studentsDateColumnH2");
	studentsDateColumnH2.textContent = "Dates de fin de formation :";

	studentsDateColumn.appendChild(studentsDateColumnH2);
	
	
	
	
	let yearSection = document.createElement("p");
	yearSection.classList.add("yearSection");
	let year = studentsListTab[0].formationDate.split("-")[0];
	yearSection.textContent = year;
	
	studentsNameColumn.appendChild(yearSection);
	
	
	let monthSection = document.createElement("p");
	monthSection.classList.add("monthSection");
	month = months[parseInt(studentsListTab[0].formationDate.split("-")[1], 10)-1];
	monthSection.textContent = month + " " + year;
	
	studentsNameColumn.appendChild(monthSection);
	
	
	let yearSectionEmpty = document.createElement("p");
	yearSectionEmpty.classList.add("yearSection", "yearSectionEmpty");
	let monthSectionEmpty = document.createElement("p");
	monthSectionEmpty.classList.add("monthSection", "monthSectionEmpty");
	
	studentsDateColumn.appendChild(yearSectionEmpty);
	studentsDateColumn.appendChild(monthSectionEmpty);
	
	
	let preMonth = month;
	let preYear = year;
	
	for (student of studentsListTab) {
		let currentMonth = months[parseInt(student.formationDate.split("-")[1], 10)-1];
		let currentYear = student.formationDate.split("-")[0];
		
		if (currentYear != preYear) {
			let yearSection = document.createElement("p");
			yearSection.classList.add("yearSection");
			let year = student.formationDate.split("-")[0];
			if (student.formationDate == "AF")
				yearSection.textContent = "auto financé";
			else
				yearSection.textContent = year;
			
			studentsNameColumn.appendChild(yearSection);
			
			
			let yearSectionEmpty = document.createElement("p");
			yearSectionEmpty.classList.add("yearSection", "yearSectionEmpty");
			
			studentsDateColumn.appendChild(yearSectionEmpty);
			
			preYear = currentYear;
		}
		
		if (currentMonth != preMonth) {
			let monthSection = document.createElement("p");
			monthSection.classList.add("monthSection");
			month = months[parseInt(student.formationDate.split("-")[1], 10)-1];
			let year = student.formationDate.split("-")[0];
			if (student.formationDate == "AF")
				monthSection.textContent = "auto financé";
			else
				monthSection.textContent = month + " " + year;
			
			studentsNameColumn.appendChild(monthSection);
			
			
			let monthSectionEmpty = document.createElement("p");
			monthSectionEmpty.classList.add("monthSection", "monthSectionEmpty");
			
			studentsDateColumn.appendChild(monthSectionEmpty);
			
			preMonth = currentMonth;
		}
	
		let studentName = document.createElement("a");
		studentName.classList.add("studentNameA");	
		studentName.textContent = student.name;
		studentName.href = student.dashboard;
		
		studentsNameColumn.appendChild(studentName);
		
		
		
		let studentDate = document.createElement("a");
		studentDate.classList.add("studentDateA");	
		studentDate.textContent = student.formationDate;
		studentDate.href = student.dashboard;
		
		studentsDateColumn.appendChild(studentDate);
	}
	

	studentsContainer.appendChild(studentsNameColumn);
	studentsContainer.appendChild(studentsDateColumn);
	formationDateArea.appendChild(studentsContainer);
}

function observerHistoryTableChanging() {
	let elementToObserve = document.querySelector("#mainContent > " + classOfDivContainingTable);
	elementToObserve = document.querySelector("#mainContent > " + classOfDivContainingTable + " > ul.webapp-0-webapp168");
	// console.log(elementToObserve);
	// console.log(elementToObserve.classList);
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let SessionsHistoryTrLength = document.querySelectorAll("#mainContent > " + classOfDivContainingTable + " > section > ol > li").length;
		
		if (SessionsHistoryTrLength > 0) {
			console.log("HISTORY TABLE LOADED AFTER PAGINATION CHANGE");
			observer.disconnect();
			reloadingOverlay();
			updateStudentsList();
		}
	}
	
	observer.observe(elementToObserve, options);
}

function observerHistoryTableLoading() {
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let SessionsHistoryTrLength = document.querySelectorAll("#mainContent > " + classOfDivContainingTable + " > section > ol > li").length;
		
		let buttonPaging = getPaging();
		if (buttonPaging) {
			console.log("HISTORY TABLE 1ST LOADED");
		    observer.disconnect();
		    addToolBar();
			reloadingOverlay();
			updateStudentsList();
		}
	}
	
	observer.observe(containerToObserve, options);
}

function reloadingOverlay() {
	setAF();
	markIfSessionIsAlreadyInBDD();
	markIfSessionIsAForF();
	observerHistoryTableChanging();
}

function cleanSessionsHistoryTabInLocalStorage() {
	let sessionsHistoryTab = JSON.parse(localStorage.getItem('sessionsHistoryTab'));
	
	//Convert the old format (with ",") to the new format  (with " à")
	for (session of sessionsHistoryTab) {
		session.sessionDate = session.sessionDate.replace(',', ' à');
		session.sessionId = session.sessionId.replace(',', ' à');
	}
	localStorage.setItem('sessionsHistoryTab', JSON.stringify(sessionsHistoryTab));
	
	//Remove duplicates
	jsonObject = sessionsHistoryTab.map(JSON.stringify);
	uniqueSet = new Set(jsonObject);
	sessionsHistoryTab = Array.from(uniqueSet).map(JSON.parse);
	localStorage.setItem('sessionsHistoryTab', JSON.stringify(sessionsHistoryTab));
}

cleanSessionsHistoryTabInLocalStorage();
observerHistoryTableLoading();