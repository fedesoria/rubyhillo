	
$(document).ready(function(){

	

	//CUFON
	Cufon.replace('h1'); 
	Cufon.replace('#slidecaption'); 
	
	currentTime = new Date()
	//SET COUNTER DATE
	$("#countdown_dashboard").countDown({
		targetOffset: {
			'day': 		(26 - currentTime.getDate()),
			'month': 	0,
			'year': 	0,
			'hour': 	(19 - currentTime.getHours()),
			'min': 		(30 - currentTime.getMinutes()),
			'sec': 		0
		},
		omitWeeks: true
	});
	
});
