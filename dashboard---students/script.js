// PAGE OF STUDENTS

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
	
function observerStudentsTableLoadingOfStudentsPage() {
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let studentsTabTrNb = document.getElementById("students_1").getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;
		if (studentsTabTrNb > 1) {
		    observer.disconnect();
		    getStudentsList(studentsTabTrNb);
		}
	}
	
	observer.observe(containerToObserve, options);
}





// PAGE OF STUDENT DETAILS

function observerStudentsElementLoadingOfStudentDatailsPage() {
	console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		// let currentStudentName = document.getElementById("active-path").getElementsByTagName("h1")[0].textContent;
		let currentStudentName = document.querySelector('[data-testid=studentHeader]').querySelector("h1").textContent;
		console.log("Student name =>" + currentStudentName);
		if (currentStudentName) {
			console.log("Student name has been set");
		    observer.disconnect();
		    setStudentFormationDate(currentStudentName);
		}
	}
	
	observer.observe(containerToObserve, options);
}

function setStudentFormationDate(currentStudentName) {
	let studentsListTab = JSON.parse(localStorage.getItem('studentsListTab'));
	
	for (student of studentsListTab) {
		if (student.name == currentStudentName) {
			let financementType = document.getElementById("details").childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[3].textContent.substr(11);
			console.log("financementType = " + financementType);
			// Financé par un tiers
			// Auto-financé
			if (financementType == "Financé par un tiers") {
			// if (document.getElementsByClassName("mentorshipStudent")[0].getElementsByTagName("h3")[0]) {
				// let studentFormationDateSentence = document.getElementsByClassName("mentorshipStudent")[0].getElementsByTagName("h3")[0].textContent;
				
				let studentFormationDateSentence = document.getElementById("details").childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[5].textContent.substr(26);
				console.log("studentFormationDateSentence = " + studentFormationDateSentence);
				let studentFormationDateDay = leftFillNum(parseInt(studentFormationDateSentence.split(/(\d+)/)[1], 10),2);
				let studentFormationDateMonth = studentFormationDateSentence.split(/(\d+)/)[2].replace(/ /g, '').toLowerCase();
				let studentFormationDateYear = parseInt(studentFormationDateSentence.split(/(\d+)/)[3], 10);
				console.log("Date =>" + studentFormationDateSentence);
				console.log("Day =>" + studentFormationDateDay);
				console.log("Month =>" + studentFormationDateMonth);
				console.log("Year =>" + studentFormationDateYear);
				
				let months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
				
				let i = 0;
				while (i < months.length) {
					if (studentFormationDateMonth == months[i]) {
						studentFormationDateMonth = leftFillNum(i+1,2);
						console.log("Fin de formation au mois numéro => " + studentFormationDateMonth);
						break
					}
					i++;
				}
				
				student.formationDate = studentFormationDateYear + "-" + studentFormationDateMonth + "-" + studentFormationDateDay;
				localStorage.setItem('studentsListTab', JSON.stringify(studentsListTab));
			}
			else if (financementType == "Auto-financé") {
				student.formationDate = "AF";
				localStorage.setItem('studentsListTab', JSON.stringify(studentsListTab));
			}
			else {
				console.log("!!! Problème avec la récupération du type de financement (financementType) !!!");
			}
			
			break;
		}
	}
}

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, '0');
}





// PAGES ROUTING

const currentURL = window.location.href;
if (currentURL == "https://openclassrooms.com/fr/mentorship/dashboard/students")
	observerStudentsTableLoadingOfStudentsPage();
else
	observerStudentsElementLoadingOfStudentDatailsPage();