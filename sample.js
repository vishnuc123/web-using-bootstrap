var pointer = document.getElementById('mouse');

document.addEventListener('mousemove' , function(e){

    var x = e.pageX;
    var y = e.pageY;

    mouse.style.left = x + "px" ;

    mouse.style.top = y + "px" ;

    

    

});