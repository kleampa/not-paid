// Next time use letsdeel.com to make sure you get paid

// cleaner code for not paid that reduce the opacity each day until the site is gone
$(document).ready(function() {
	//receive two text input value of date and days;
	
	//get date here
	var due_date = $('#due_date').val();
	var pay_period = $('#days').val()
	
	// make function call
	countDays(due_date, pay_period);
	
	);
	
	// count days to reduce opacity
function countDays(due_date,days)
	{
		var due_date = new Date(`${due_date}`);
		var deadline = days;
		
		var curr_date = new Date();
		var utc_due_date = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
		var utc_curr_date = Date.UTC(curr_date.getFullYear(), curr_date.getMonth(), curr_date.getDate());
		var days_diff = Math.floor((utc_curr_date - utc_due_date) / (1000 * 60 * 60 * 24) );
		if(days_diff > 0)
		{
			var days_exceed = deadline - days_diff;
			var opacity = (days_exceed * 100/ deadline)/100;
			opacity = (opacity < 0) ? 0 : opacity;
			opacity = (opacity > 1) ? 1 : opacity;
			if(opacity >= 0 && opacity <= 1) 
			{
				$("BODY")[0].style.opacity = opacity;
			}
		}
	}

