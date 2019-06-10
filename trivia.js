    
var score = 0
var i = 1
var ans = 1
var mark = 0
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	var audio = new Audio('applause2.mp3');
	audio.play();
	document.body.style.backgroundImage = "url(smile.gif)"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
    	var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	  var audio = new Audio('applause2.mp3');
	audio.play(); 
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
	 var audio = new Audio('applause2.mp3');
	audio.play();   
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	    var audio = new Audio('applause2.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
	    var audio = new Audio('applause2.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	    var audio = new Audio('applause2.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	    var audio = new Audio('applause2.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
	    var audio = new Audio('applause2.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
	    var audio = new Audio('applause2.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        var audio = new Audio('wronganswer.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
	    var audio = new Audio('applause2.mp3');
	audio.play();
	    document.body.style.backgroundImage = "url(smile.gif)"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
       var audio = new Audio('wronganswer.mp3');
	audio.play(); 
	    document.body.style.backgroundImage = "url(sad.gif)"
    }
    document.view.qscore.value=score
}
		
	ans++; 
	
}


      
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="What was the first planet discovered? \na) Moon \nb) Mars \nc) Earth \nd) Saturn";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the first astronaut to walk in space? \na) Julie Payette \nb) Neil Armstrong \nc) Chris hadfield \nd) Thomas Marshburn";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which is the largest planet? \na) Saturn \nb) Jupiter \nc) Uranus \nd) Neptune";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who was the first astronaut to walk on the Moon? \na) Neil Armstrong \nb) John Glenn \nc) Chris Hadfield \nd) Michael Collins";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which planet is closest to The Sun? \na) Venus \nb) Saturn \nc) Earth \nd) Mercury";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Is the sun a star or a planet? \na) Star \nb) Planet \nc) None of the above \nd) Not proven yet";
    document.view.qans.value=""
}	
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What planet is known as the red planet? \na) Makemake \nb) Phobos \nc) Mars \nd) Ceres";
    document.view.qans.value=""
}
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Earth is located in which galaxy? \na) Andromeda Galaxy \nb) Milky Way \nc) Black Eye Galaxy \nd) Whirlpool Galaxy";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the name of the first satellite sent into space? \na) Sputnik \nb) Explorer 1 \nc) International Space Station \nd) Mir";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the name of NASA’s most famous space telescope? \na) Venus Spectral Rocket Experiment \nb) Spitzer Space Telescope \nc) The HST \nd) The James Webb Space Telescope";
    document.view.qans.value=""
}
else {
    mark=score*10
    if(mark >= 80){
	document.write("Congrats you got 80 % or higher!!!")
	document.write("<img src='smile.gif'>")
	var audio = new Audio('happytrumpet.mp3');
	    audio.play();
     }
     else {
	document.write("Sorry you scored lower than 80 % !")
	document.write("<img src='sad.gif'>")
	var audio =  new Audio('wronganswer.mp3');
	audio.play();    
     }	
}	
	i++;

}
		
		
		
		
		

