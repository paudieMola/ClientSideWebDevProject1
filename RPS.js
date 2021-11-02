$(document).ready(function(){
    var computerCount = 0;
    var userCount = 0;
    
  
  $('.signinbtn').click(function(){
		var emailEntered = document.getElementsByName('email').value;
		var passEntered = document.getElementsByName('psw').value;
		var jsondata;
		$.getJSON("data.json", function(data){
			jsondata = data;
			$.each(data.users, function(k,v){
				if((v.email==emailEntered)&&(v.pass==passEntered)){
					alert("Welcome");
				}
				else alert("Wrong email or password");
			});
    });
   });
	
    function reset(userCount,computerCount){
		  userCount=0;
      computerCount=0;
      return [userCount, computerCount]
	 }
  
    function play(uc) {
		var computerChoice  = Math.floor(Math.random() *3) +1;
		switch(true){
			case (((computerChoice == 1)&&(uc==2))||((computerChoice==2)&&(uc==3))||((computerChoice==3)&&(uc==1))): winner = 'You beat the Rock. He will be mad.', userCount++; break;
			case (((computerChoice == 1)&&(uc==3))||((computerChoice==2)&&(uc==1))||((computerChoice==3)&&(uc==2))): winner = 'The Rock beat you.', computerCount++; break;
			default : winner = 'Its a draw.';
		}
        return [winner, computerChoice]
    }
	
    $('#choices p.content img.rock').click(function(){
		var userChoice = 1;
		var getResult = play(userChoice);
		var winner = getResult[0];
    var rocksChoice;
		var computerChoice = getResult[1];
    switch(true){
        case(computerChoice==2): rocksChoice = 'The Rock chose Scissors.';break;
        case(computerChoice==3): rocksChoice = 'The Rock chose Paper.'; break;
        default: rocksChoice = "The Rock chose  himself.";
    }
		$('#inst').html('<h2>'+rocksChoice+' '+winner+'</h2>');
		$('.usersCount').text(userCount);
    $('.rocksCount').text(computerCount);
    if(userCount>9){
      $('#inst').html('<h1>'+rocksChoice+' '+winner+' You win the game'+'</h1>');
      var resetCounts = reset(userCount, computerCount);
      userCount = resetCounts[0];
      computerCount = resetCounts[1];
    }
    else if (computerCount>9){
      $('#inst').html('<h1>'+rocksChoice+' '+winner+' The Rock wins the game'+'</h1>');
      var resetCounts = reset(userCount, computerCount);
      userCount = resetCounts[0];
      computerCount = resetCounts[1];
    }
    });
	
	$('#choices p.content img.paper').click(function(){
		var userChoice = 2;
		var getResult = play(userChoice);
		var winner = getResult[0];
		var computerChoice = getResult[1];
    switch(true){
        case(computerChoice==2): rocksChoice = 'The Rock chose Scissors.';break;
        case(computerChoice==3): rocksChoice = 'The Rock chose Paper.'; break;
      default: rocksChoice = "The Rock chose himself.";
    }
		$('#inst').html('<h2>'+rocksChoice+' '+winner+'</h2>');
		$('.usersCount').text(userCount);
    $('.rocksCount').text(computerCount);
    if(userCount>9){
      $('#inst').html('<h1>'+rocksChoice+' '+winner+' You win the game'+'</h1>');
      var resetCounts = reset(userCount, computerCount);
      userCount = resetCounts[0];
      computerCount = resetCounts[1];
    }
    else if (computerCount>9){
      $('#inst').html('<h1>'+rocksChoice+' '+winner+' The Rock wins the game'+'</h1>');
      var resetCounts = reset(userCount, computerCount);
      userCount = resetCounts[0];
      computerCount = resetCounts[1];
    }
    });
	
	$('#choices p.content img.scissors').click(function(){
		var userChoice = 3;
		var getResult = play(userChoice);
		var winner = getResult[0];
		var computerChoice = getResult[1];
    switch(true){
        case(computerChoice==2): rocksChoice = 'The Rock chose Scissors.';break;
        case(computerChoice==3): rocksChoice = 'The Rock chose Paper.'; break;
      default: rocksChoice = "The Rock chose himself.";
    }
		$('#inst').html('<h2>'+rocksChoice+' '+winner+'</h2>');
		$('.usersCount').text(userCount);
    $('.rocksCount').text(computerCount);
    if(userCount>9){
      $('#inst').html('<h1>'+rocksChoice+' '+winner+' You win the game'+'</h1>');
      var resetCounts = reset(userCount, computerCount);
      userCount = resetCounts[0];
      computerCount = resetCounts[1];
    }
    else if (computerCount>9){
      $('#inst').html('<h1>'+rocksChoice+' '+winner+' The Rock wins the game'+'</h1>');
      var resetCounts = reset(userCount, computerCount);
      userCount = resetCounts[0];
      computerCount = resetCounts[1];
    }
    });
});