	
$(document).ready(function(){

	

	//CUFON
	Cufon.replace('h1'); 
	Cufon.replace('#slidecaption'); 
	
	currentTime = new Date()
	//SET COUNTER DATE
	$("#countdown_dashboard").countDown({
		targetOffset: {
			'day': 		(8 - currentTime.getDate()),
			'month': 	0,
			'year': 	0,
			'hour': 	(18 - currentTime.getHours()),
			'min': 		(60 - currentTime.getMinutes()),
			'sec': 		0
		},
		omitWeeks: true
	});
	
});
