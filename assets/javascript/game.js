var wins = 0;
var losses = 0;

var box = 0;
//In total numbers are between 19-120 randomly
var all = Math.floor((Math.random()* 100)+ 19);
//every color has a random value between 1-12
var red = Math.floor((Math.random()* 11)+ 1);
var blue = Math.floor((Math.random()* 11)+ 1);
var yellow = Math.floor((Math.random()* 11)+ 1);
var green = Math.floor((Math.random()* 11)+ 1);


var updatebox = function () {
    $('.box').empty();
    $('.box').text(box);
    $('#wins').empty();
    $('#wins').text(wins);
    $('#losses').empty();
    $('#losses').text(losses);
}

var reset = function () {
    box = 0;
var all = Math.floor((Math.random()* 100) + 19);
    $('.all').empty();
    $('.all').text(all);

red = Math.floor((Math.random()* 11)+ 1);
blue = Math.floor((Math.random()* 11)+ 1);
yellow = Math.floor((Math.random()* 11)+ 1);
green = Math.floor((Math.random()* 11)+ 1);

updatebox();
}

var logic = function() {
    if(box === all ) {
        wins = wins + 1;
        
        reset();
    }else if (box > all) {
        losses = losses +1;

        reset();
    }else{
        updatebox();
    }
}
$('.all').append(all);
$('.box').append(box);

$(document).ready(function(){
    $('#red').click(function(){
        box = box +red;
        logic();
    })

    $('#yellow').click(function(){
         box = box +yellow;
        logic();
    })

     $('#green').click(function(){
        box = box +green;
        logic();
    })

    $('#blue').click(function(){
        box = box +blue;
        logic();
    })
})

