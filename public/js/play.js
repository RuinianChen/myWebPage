var Slider1=(function () {
    var moveLeft=0;
    function init(){
        var content=document.getElementById('movie1');
        setInterval(animate,20,content,0.1);
    }
    function animate(content,speed) {
        if(moveLeft===0){
            var timer1=setInterval(function () {     
                if(moveLeft>-159) {
                    moveLeft-=speed;
                    content.style.left=moveLeft+'vw';
                }
                else if(Math.abs(moveLeft+159)<speed){
                    content.style.left=-159+'vw';
                    moveLeft = -159;
                    clearInterval(timer1);
                }else{
                    clearInterval(timer1);
                }
            },10);
        }else if(moveLeft===-159){
            var timer3=setInterval(function () {
                if(moveLeft<0){
                    moveLeft+=speed;
                    content.style.left=moveLeft+'vw';
                }
                else if(Math.abs(moveLeft)<speed){
                    content.style.left=0+'vw';
                    moveLeft = 0;
                    clearInterval(timer3);
                }else{
                    clearInterval(timer3);
                }
            },10);
        }
    }
    return{
        init:init,
        animate:animate
    }
})();
Slider1.init();

var Slider2=(function () {
    var moveLeft=0;
    function init(){
        var content=document.getElementById('movie2');
        setInterval(animate,20,content,0.1);
    }
    function animate(content,speed) {
        if(moveLeft===0){
            var timer1=setInterval(function () {     
                if(moveLeft>-128) {
                    moveLeft-=speed;
                    content.style.left=moveLeft+'vw';
                }
                else if(Math.abs(moveLeft+128)<speed){
                    content.style.left=-128+'vw';
                    moveLeft = -128;
                    clearInterval(timer1);
                }else{
                    clearInterval(timer1);
                }
            },10);
        }else if(moveLeft===-128){
            var timer3=setInterval(function () {
                if(moveLeft<0){
                    moveLeft+=speed;
                    content.style.left=moveLeft+'vw';
                }
                else if(Math.abs(moveLeft)<speed){
                    content.style.left=0+'vw';
                    moveLeft = 0;
                    clearInterval(timer3);
                }else{
                    clearInterval(timer3);
                }
            },10);
        }
    }
    return{
        init:init,
        animate:animate
    }
})();
Slider2.init();

var Slider3=(function () {
    var moveLeft=0;
    function init(){
        var content=document.getElementById('movie3');      
        setInterval(animate,20,content,0.1);
    }
    function animate(content,speed) {
        if(moveLeft===0){
            var timer1=setInterval(function () {   
                if(moveLeft>-154) {
                    moveLeft-=speed;
                    content.style.left=moveLeft+'vw';
                }
                else if(Math.abs(moveLeft+154)<speed){
                    content.style.left=-154+'vw';
                    moveLeft = -154;
                    clearInterval(timer1);
                }else{
                    clearInterval(timer1);
                }
            },10);
        }else if(moveLeft===-154){
            var timer3=setInterval(function () {
                if(moveLeft<0){
                    moveLeft+=speed;
                    content.style.left=moveLeft+'vw';
                }
                else if(Math.abs(moveLeft)<speed){
                    content.style.left=0+'vw';
                    moveLeft = 0;
                    clearInterval(timer3);
                }else{
                    clearInterval(timer3);
                }
            },10);
        }
    }
    return{
        init:init,
        animate:animate
    }
})();
Slider3.init();



