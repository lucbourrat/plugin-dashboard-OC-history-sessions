function addToolBar() {
	// Get Elements 
	let container = document.querySelector('#mainContent[class*="webapp"] > .webapp-0-webapp5');
	let studentsTabDiv = container.children[3];
	
	// Create toolBar
	let toolBarSection = document.createElement("div");
	toolBarSection.classList.add("toolBarSection");
	
	// Create button 1
	let toolBarSectionButton1 = document.createElement("button");
	toolBarSectionButton1.classList.add("toolBarSectionButton");
	//
	let toolBarSectionButtonSpan1 = document.createElement("span");
	toolBarSectionButtonSpan1.classList.add("dom-services-3-MuiButton-label");
	//
	let toolBarSectionButtonSpanSpan1 = document.createElement("span");
	toolBarSectionButtonSpanSpan1.textContent = "Quels sont les étudiants non programmés ?";
	toolBarSectionButtonSpanSpan1.style.textTransform = "none";
	
	// addEventListener button 1
	toolBarSectionButton1.addEventListener("click", getScheduledStudentsList);
	// Insert button 1
	toolBarSectionButtonSpan1.appendChild(toolBarSectionButtonSpanSpan1);
	toolBarSectionButton1.appendChild(toolBarSectionButtonSpan1);
	toolBarSection.appendChild(toolBarSectionButton1);
	// Insert toolBar
	container.insertBefore(toolBarSection, studentsTabDiv);
}
	
function getScheduledStudentsList() {
	// Get Scheduled Students Element
	let scheduledEvents = document.getElementsByClassName("rbc-event");
	
	// Init studentsListTab
	let scheduledEventsTab = [];
	
	// Set studentsListTab
	for (scheduledEvent of scheduledEvents) {
		scheduledEventsTab.push(scheduledEvent.getElementsByTagName("span")[0].textContent);
	}
	
	// Get Students List to localStorage
	let studentsListTab = JSON.parse(localStorage.getItem('studentsListTab'));

	
	foundUnscheduledStudents(studentsListTab, scheduledEventsTab);
}
	
function foundUnscheduledStudents(studentsListTab, scheduledEventsTab) {
	let unscheduledStudents = [];
	
	// Parse studentsListTab
	for (student of studentsListTab) {
		if (scheduledEventsTab.indexOf(student.name) === -1)
			unscheduledStudents.push(student);
	}
	
	displayUnscheduledStudents(unscheduledStudents);
}
	
function displayUnscheduledStudents(unscheduledStudents) {
	// Get Elements 
	let container = document.querySelector('#mainContent[class*="webapp"] > .webapp-0-webapp5');
	let containerLastElement = container.children[4];
	
	// Create Unscheduled Students Section
	let unscheduledStudentsSection = document.createElement("div");
	unscheduledStudentsSection.classList.add("unscheduledStudentsSection");
	
	// Create Unscheduled Students Section Tiltle
	let unscheduledStudentsSectionH2 = document.createElement("h2");
	unscheduledStudentsSectionH2.classList.add("unscheduledStudentsSectionH2");
	unscheduledStudentsSectionH2.textContent = "Etudiants non programmés cette semaine :";	
	// Insert H2 inside Unscheduled Students Section
	unscheduledStudentsSection.appendChild(unscheduledStudentsSectionH2);
	
	// Create Unscheduled Students Section Elements
	let c = 1;
	for (unscheduledStudent of unscheduledStudents) {
		let unscheduledStudentsSectionA = document.createElement("a");
		unscheduledStudentsSectionA.classList.add("unscheduledStudentsSectionA");
		unscheduledStudentsSectionA.textContent = c + " - " + unscheduledStudent.name;
		unscheduledStudentsSectionA.href = unscheduledStudent.dashboard;
		unscheduledStudentsSectionA.target="_blank";
		
		// Insert P inside Unscheduled Students Section
		unscheduledStudentsSection.appendChild(unscheduledStudentsSectionA);
		c++
	}
	

	
	// Insert Unscheduled Students Section
	container.insertBefore(unscheduledStudentsSection, containerLastElement);
	
}

function observerScheduledStudentsTableLoading() {
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let scheduledEvents = document.getElementsByClassName("rbc-event");
		if (scheduledEvents.length > 0) {
			console.log("CALENDAR LOADED");
		    observer.disconnect();
		    addToolBar();
		}
	}
	
	observer.observe(containerToObserve, options);
}

observerScheduledStudentsTableLoading();