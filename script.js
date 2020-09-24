 for(var i=0; i<400; i++){
const asteroide = document.createElement('li');
			asteroide.setAttribute('class', 'steroides')

		function random (max, min){
			const randomValue = Math.random()*(max - min) + min;
		return randomValue;
		} 
		function randomAnimation ( ){
			var animationValue = random(true, false); 
			if(animationValue == true){
       asteroide.animationName = 'mouvingBackward';
			}
			else{
				asteroide.animationName = 'mouvingForeward';
			}
		}
		
		  asteroide.style.animationName = 'mouvingForeward';
			asteroide.style.left = random(100, 0) + 'vw';
			asteroide.style.top = random(Math.random()*50, 0) + 'vw';
			asteroide.style.width = random(8, 5) + 'px';
			asteroide.style.height = asteroide.style.width;
			asteroide.style.backgroundColor = 'white';
			asteroide.style.animationDelay = random(2, 0.1) +'s';
			asteroide.style.animationDuration = (15, 3) + 's';
			asteroide.style.animationIterationCount = 'infinite'; 
		

	var espaco = document.querySelector('.space');
			espaco.appendChild(asteroide);
 }
for(var i=0; i<20; i++){
const asteroideStatic = document.createElement('li');
	//----///--------/-/--------
	    asteroideStatic.style.backgroundColor = 'white';
	    asteroideStatic.style.borderRadius = 50 + '%';
	    asteroideStatic.style.width = random(3, 0.5) + 'px';
	    asteroideStatic.style.height = asteroideStatic.style.width;
	    asteroideStatic.style.position = 'absolute';
	    asteroideStatic.style.left = random(100, 0) + 'vw';
	    asteroideStatic.style.top = random(Math.random()*10, 0) + 'vh';
//---------------	
var espaco = document.querySelector('.space');
	espaco.appendChild(asteroideStatic);
}