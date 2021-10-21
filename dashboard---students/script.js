function getStudentsList(studentsTabTrNb) {
	// Get Students List Element
	let studentsTabTr = document.getElementById("students_1").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	
	// Init studentsListTab
	let studentsListTabOld = JSON.parse(localStorage.getItem('studentsListTab'));
	if (!studentsListTabOld)
		studentsListTabOld = [];
	
	let studentsListTab = [];
	
	// Set studentsListTab
	for (student of studentsTabTr) {
		let newStudent = {
			name: student.getElementsByTagName("td")[0].getElementsByTagName("a")[0].textContent,
			dashboard: student.getElementsByTagName("td")[0].getElementsByTagName("a")[0].href,
			formationDate: "unSet"
		};
		
		let alreadyExists = 0;
		for (studentOld of studentsListTabOld) {
			if (studentOld.name == newStudent.name) {
				studentsListTab.push(studentOld);
				alreadyExists = 1;
				break;
			}
		}
		
		if (alreadyExists == 0)
			studentsListTab.push(newStudent);
	}
	
	// Update studentsListTab in localStorage
	
	
	
	studentsListTab.sort(function compare(a, b) {
	  if (a.formationDate < b.formationDate)
	     return -1;
	  if (a.formationDate > b.formationDate )
	     return 1;
	  return 0;
	});



	localStorage.setItem('studentsListTab', JSON.stringify(studentsListTab));
	alert("Liste de " + studentsTabTrNb + " étudiants MAJ en BDD");
}
	
function observerStudentsTableLoading() {
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let studentsTabTrNb = document.getElementById("students_1").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
		if (studentsTabTrNb > 0) {
		    observer.disconnect();
		    getStudentsList(studentsTabTrNb);
		}
	}
	
	observer.observe(containerToObserve, options);
}

observerStudentsTableLoading();