function observerStudentsElementLoading() {
	let containerToObserve = document.getElementById("mainContentWithHeader");
	let options = {childList: true, subtree: true};
	let observer = new MutationObserver(mCallback);
	
	function mCallback(mutations) {
		let currentStudentName = document.getElementById("STUDENT-DASHBOARD-REACT").getElementsByTagName("h1")[0].textContent;
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
			
			if (document.getElementsByClassName("mentorshipStudent")[0].getElementsByTagName("h3")[0]) {
				let studentFormationDateSentence = document.getElementsByClassName("mentorshipStudent")[0].getElementsByTagName("h3")[0].textContent;
				
				let studentFormationDateDay = leftFillNum(parseInt(studentFormationDateSentence.split(/(\d+)/)[1], 10),2);
				let studentFormationDateMonth = studentFormationDateSentence.split(/(\d+)/)[2].replace(/ /g, '').toLowerCase();
				let studentFormationDateYear = parseInt(studentFormationDateSentence.split(/(\d+)/)[3], 10);
				
				let months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
				
				let i = 0;
				while (i < months.length) {
					if (studentFormationDateMonth == months[i]) {
						studentFormationDateMonth = leftFillNum(i+1,2);
						console.log("WWWWWWWWWWW =>" + studentFormationDateMonth);
						break
					}
					i++;
				}
				
				student.formationDate = studentFormationDateYear + "-" + studentFormationDateMonth + "-" + studentFormationDateDay;
				localStorage.setItem('studentsListTab', JSON.stringify(studentsListTab));
			}
			else {
				student.formationDate = "AF";
				localStorage.setItem('studentsListTab', JSON.stringify(studentsListTab));
			}
			
			break;
		}
	}
}

function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, '0');
}