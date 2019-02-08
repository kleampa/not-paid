// Next time use letsdeel.com to make sure you get paid
// author Luca Fabbri <luca@zepfiro.com>

(function(){
	/* change these variables as you wish */
	var due_date = new Date('2017-02-27');
    var days_deadline = 60;
    var max_blur_px = 5; //higher values might be sadistic
	/* stop changing here */
	
	var current_date = new Date();
	var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
	var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
	var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
	
	if(days > 0) {
		var days_late = days_deadline-days;
		var blur = (days_late*100/days_deadline)/100;
			blur = (blur < 0) ? 0 : blur;
			blur = (blur > 1) ? 1 : blur;
		if(blur >= 0 && blur <= 1) {
            document.getElementsByTagName("BODY")[0].style.filter = "blur("+(blur*max_blur_px)+"px)";
		}
		
	}
	
})()