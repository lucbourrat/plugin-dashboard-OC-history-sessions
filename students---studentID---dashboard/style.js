function observerStudentsElementLoading() {
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let currentStudentName = document.getElementById("student_details_screen").getElementsByTagName("h1")[0].textContent;
		console.log("Student name =>" + currentStudentName);
		if (currentStudentName) {
		    observer.disconnect();
		    setStudentFormationDate(currentStudentName);
		}
	}
	
	observer.observe(containerToObserve, options);
}

observerStudentsElementLoading();

function setStudentFormationDate(currentStudentName) {
	let studentsListTab = JSON.parse(localStorage.getItem('studentsListTab'));
	
	for (student of studentsListTab) {
		if (student.name == currentStudentName) {
			let financementType = document.getElementById("details").childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[2].textContent.substr(11);
			console.log(financementType);
			// Financé par un tiers
			// Auto-financé
			if (financementType == "Financé par un tiers") {
			// if (document.getElementsByClassName("mentorshipStudent")[0].getElementsByTagName("h3")[0]) {
				// let studentFormationDateSentence = document.getElementsByClassName("mentorshipStudent")[0].getElementsByTagName("h3")[0].textContent;
				let studentFormationDateSentence = document.getElementById("details").childNodes[0].childNodes[2].childNodes[0].childNodes[0].childNodes[3].textContent.substr(26);
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
						console.log("Fin de formation au mois numéro =>" + studentFormationDateMonth);
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