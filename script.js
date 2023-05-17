var navMenuAtag=document.querySelectorAll('nav a');


for(var i=0;i<navMenuAtag.length;i++){
    navMenuAtag[i].addEventListener("click",function(event){
        event.preventDefault();
        var targetId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetId);
       
        var interval=setInterval(function(){
            var targetsectionCoordinates=targetSection.getBoundingClientRect();
            if(targetsectionCoordinates.top <=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}

//skill bar
var proressbar=document.querySelectorAll(".skill-progress >div");
var skillContainer=document.getElementById("skill-container");
window.addEventListener("scroll",checkScroll);
var animationdone=false;

function initialiseBars(){
    for(let bar of proressbar){
        bar.style.width=0 +"%";
    }
}

initialiseBars();

function fillbars(){
    for(let bar of proressbar){
        let targetwidth=bar.getAttribute('data-bar-width');
        let currentwidth=0;
        let interval=setInterval(function(){
            if(currentwidth>targetwidth){
                clearInterval(interval);
                return;
            }
            currentwidth++;
            bar.style.width=currentwidth + '%';
        },3);
    }
}


function checkScroll(){
    var coordinates=skillContainer.getBoundingClientRect();
    if(!animationdone && coordinates.top < window.innerHeight){  //top is smaller than viewport height
        animationdone=true;
        fillbars();
    }
    else if(coordinates.top >window.innerHeight){   
        animationdone=false;
        // console.log(coordinates.top);
        initialiseBars();
    }
}