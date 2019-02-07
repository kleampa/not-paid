window.onload = function(){
	// set if the client is in debt
	var in_debt = true
	/* change these variables as you wish */
	var due_date = new Date('2019-02-05')
	var days_deadline = 5
	/* stop changing here */
	
	var current_date = new Date()
	var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate())
	var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate())
	var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))
	
	if(days > 0) {
		var days_late = days_deadline-days
		var opacity = days_late/days_deadline
			opacity = (opacity < 0) ? 0 : opacity
			opacity = (opacity > 1) ? 1 : opacity
		if(in_debt && opacity >= 0 && opacity <= 1) {
			document.getElementsByTagName("body")[0].style.opacity = opacity
		}	
	}	
}
