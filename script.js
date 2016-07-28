chk = 1;
function startTimer(duration,curr,display) {
  var timer = duration, minutes, seconds,cnt=1;
	var cur = curr;
  interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);
		if(--timer < 0 ){
			if(cnt === 1){
				timer = cur;
				cnt = 0;
				$("#stop").prop('disabled',true);
				$('#type').fadeOut(500,function(){
  						$(this).text('Break').fadeIn(500);
					});
			}else{
				timer = duration;
				cnt = 1;
				$("#stop").prop('disabled',false);
				$('#type').fadeOut(500,function(){
  						$(this).text('Session').fadeIn(500);
					});
				}
			}
   }, 1000 );

}

		
$("a").click(function(event){
    event.preventDefault();
			});	
	
$("#start").click(function(){
			chk = 0;
			currBreak = $('#currBreak').html();
	 		curr = 60 * parseInt(currBreak,10) ;
			currSession = $('#currSession').html();
			currSession += ':00';
				ar = currSession.split(':');
				session = 60*(parseInt(ar[0],10)+parseInt(ar[1],10)/60);
        display = $('#timer');
			$("#start").prop("disabled",true);
    startTimer(session,curr,display);		
		});
	
$("#stop").click(function(){
			
			clearInterval(interval);	
			chk = 1;
			$('.operate').on('click');
			$("#start").prop("disabled",false);
		});
$('#reset').click(function(){
	$('#timer').html(currSession);
	clearInterval(interval);
	chk = 1;
	$("#start").prop("disabled",false);
	
});

$('.operate').click(function(){
	tmpBreak = $('#currBreak').html();
	tmpSession = $('#currSession').html();
	
	if(chk !== 1){
		$(this).click(false);
	}
	else{
	var operator = $(this).prop('id');
	var temp;
//	alert(operator);
switch(operator){
	case 'addBreak':
			temp = parseInt(tmpBreak,10) + 1;
			$('#currBreak').html(temp);
			break;
	case 'minBreak':
			if(tmpBreak !== '1')
			temp = parseInt(tmpBreak,10) - 1;
			$('#currBreak').html(temp);
			break;
	case 'addSession':
			temp = parseInt(tmpSession,10) + 1;
			$('#currSession').html(temp);
			if(temp < 10)
				str = "0"+temp+":00";
			else
				str = temp + ":00";
			$('#timer').html(str);
			break;
	case 'minSession':
			if(tmpSession !== '1')
			temp = parseInt(tmpSession,10) - 1;
			$('#currSession').html(temp);
			if(temp < 10)
				str = "0"+temp+":00";
			else
				str = temp + ":00";
			$('#timer').html(str);
			break;
				}	
		
		}
});