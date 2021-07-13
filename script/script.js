//gsap.from('.r_Startscreen_Button', {opacity: 0, duration: 3, y: -100});

/*function schwarzscreen() {

    console.log('test');
    gsap.from('.r_blackscreen', {opacity: 0, duration: 10});

}

let element = document.getElementsByClassName('.r_Startscreen_Button');

element.addEventListener('click', schwarzscreen);*/


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


//SOUND


var r_impact = new Howl({
    src: ['../Musik/Explosion.mp3'],
    autoplay: false,
    html5: true,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });



 function r_ImpactPlay() {
    r_impact.play();
 } 



 var r_backgroundSound = new Howl({
    src: ['../Musik/OuterSpace.mp3'],
    autoplay: false,
    loop: true,
    html5: true,
    volume: 1,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_backgroundSoundPlay() {
    r_backgroundSound.play();
 } 

 function r_backgroundSoundStop() {
    r_backgroundSound.stop();
 } 

 function r_backgroundSoundMute() {
    r_backgroundSound.mute();
 } 





 var r_Woosh = new Howl({
    src: ['../Musik/Woosh2.wav'],
    autoplay: false,
    loop: false,
    volume: 0.2,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_WooshPlay() {
    r_Woosh.play();
 } 


 var r_Wesen = new Howl({
    src: ['../Musik/AlienBreath.mp3'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_WesenPlay() {
    r_Wesen.play();
 } 

 function r_WesenStop() {
    r_Wesen.stop();
 } 


 var r_UeberWesen = new Howl({
    src: ['../Musik/Ueberwesen.wav'],
    autoplay: false,
    loop: true,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_UeberWesenPlay() {
    r_UeberWesen.play();
 } 

 function r_UeberWesenStop() {
    r_UeberWesen.stop();
 } 


 var r_DialogUW1 = new Howl({
    src: ['../Musik/DialogUW1.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogUW1Play() {  
    r_DialogUW1.play();
 } 

 function r_DialogUW1Stop() {
    r_DialogUW1.stop();
 } 

 var r_DialogCH1 = new Howl({
    src: ['../Musik/DialogCH1.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogCH1Play() {  
    r_DialogCH1.play();
 } 

 function r_DialogCH1Stop() {
    r_DialogCH1.stop();
 } 


 var r_DialogUW2 = new Howl({
    src: ['../Musik/DialogUW2.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogUW2Play() {  
    r_DialogUW2.play();
 } 

 function r_DialogUW2Stop() {
    r_DialogUW2.stop();
 } 


 var r_DialogCH2 = new Howl({
    src: ['../Musik/DialogCH2.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogCH2Play() {  
    r_DialogCH2.play();
 } 

 function r_DialogCH2Stop() {
    r_DialogCH2.stop();
 } 


 var r_DialogCH3 = new Howl({
    src: ['../Musik/DialogCH3.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogCH3Play() {  
    r_DialogCH3.play();
 } 

 function r_DialogCH3Stop() {
    r_DialogCH3.stop();
 } 


 var r_DialogUW3 = new Howl({
    src: ['../Musik/DialogUW3.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogUW3Play() {  
    r_DialogUW3.play();
 } 

 function r_DialogUW3Stop() {
    r_DialogUW3.stop();
 } 

 var r_DialogCH4 = new Howl({
    src: ['../Musik/DialogCH4.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogCH4Play() {  
    r_DialogCH4.play();
 } 

 function r_DialogCH4Stop() {
    r_DialogCH4.stop();
 } 


 var r_DialogUW4 = new Howl({
    src: ['../Musik/DialogUW4.wav'],
    autoplay: false,
    loop: false,
    volume: 0.5,
    onend: function() {
      console.log('Finished!');
    }
  });

  function r_DialogUW4Play() {  
    r_DialogUW5.play();
 } 

 function r_DialogUW4Stop() {
    r_DialogUW5.stop();
 } 



 var r_WooshStrand = new Howl({
    src: ['../Musik/Woosh2.wav'],
    autoplay: false,
    loop: false,
    volume: 0.2,
   
  });

  function r_WooshStrandPlay() {  
    r_WooshStrand.play();
 } 

 function r_WooshStrandStop() {
    r_WooshStrand.stop();
 } 


 var f_zukunft_ambient = new Howl({
    src: ["../sound/zukunft_ambient.mp3"],
    autoplay: false,
    loop: true,
    volume: 5,

});

f_zukunft_ambient.stop();

var f_steinzeitForestAmbience = new Howl({
    src: ["../sound/f_steinzeit_forest_ambience.mp3"],
    autoplay: false,
    loop: true,

});







var TesseraktDialogCH = [

    r_DialogCH1,
    r_DialogCH2,
    r_DialogCH3,
    r_DialogCH4,

]

var TesseraktDialogUW = [

    r_DialogUW1,
    r_DialogUW2,
    r_DialogUW3,
    r_DialogUW4,


]






 









//Startscreen


  r_backgroundSoundPlay();
   




$('.r_Startscreen_Button').on('mouseenter', function(){


    gsap.to('.r_Startscreen_Button', {

        scale: 1.1,
        ease: Expo. easeOut,
        duration: 1,
        delay: 0.2,
        

    });

});

$('.r_Startscreen_Button').on('mouseleave', function(){


    gsap.to('.r_Startscreen_Button', {

        scale: 1,
        ease: Expo. easeOut,
        duration: 1,
        delay: 0.1,
        

    });

});


$('.r_Startscreen_Hinweis1').hide();
$('.r_Startscreen_Hinweis2').hide();


$('.r_Startscreen_Button').on('click', function(){

    console.log('test');

   $('.r_Startscreen_Button').delay(1100).fadeOut(400);
   $('.r_Startscreen_Textfeld1').delay(950).fadeOut(400);
   $('.r_Startscreen_Textfeld2').delay(800).fadeOut(400);
   $('.r_Startscreen_Hinweis1').delay(2000).fadeIn(1000);
   $('.r_Startscreen_Hinweis2').delay(2100).fadeIn(1500);
  
   setTimeout(function(){ window.location="#r_SchwarzesLoch" }, 6000);


   setTimeout(function(){ r_ImpactPlay(); }, 6000);
});







//Schwarzes Loch


function truemmerTeile() {

    $('.r_blackscreen').fadeOut(4000);

    gsap.from(".r_truemmer1", {

        x: '-100vw',
        scale: 1,
        ease: " power4. out",
        duration: 2


    });

    gsap.from(".r_truemmer2", {

        x: '-100vw',
        y: '10vw',
        scale: 1,
        duration: 2,
        ease: " power4. out",
        delay: 0.2


    });

    gsap.from(".r_truemmer3", {

        x: '-100vw',
        y: '10vw',
        scale: 1,
        duration: 3,
        ease: " power4. out",
        delay: 0.5

    });

    gsap.from(".r_truemmer4", {

        x: '-100vw',
        scale: 1,
        duration: 2,
        ease: " power2. out",
        delay: 0.4


    });

    gsap.from(".r_truemmer5", {

        x: '-100vw',
        scale: 1,
        duration: 3,
        ease: " power2. out",
        delay: 0.1


    });

    gsap.from(".r_truemmer6", {

        x: '-100vw',
        scale: 1,
        duration: 2,
        ease: " power2. out",
        delay: 0.6


    });

    gsap.from(".r_truemmer7", {

        x: '-100vw',
        y: '10vw',
        scale: 1,
        duration: 4,
        ease: " power2. out",
        delay: 0.7


    });

    gsap.from(".r_truemmer8", {

        x: '-100vw',
        scale: 1,
        duration: 2,
        ease: " power2. out",
        delay: 0.8


    });

    gsap.from(".r_truemmer9", {

        x: '-100vw',
        scale: 1,
        duration: 2,
        ease: " power2. out",
        delay: 0.9


    });

    gsap.from(".r_WeltraumPerson", {

        x: '-100vw',
        rotation: -390,
        scale: 1,
        duration: 5,
        ease: " power4. out",
        delay: 1.5,
        opacity: 1

    });

    gsap.to(".r_WeltraumPerson", {

        opacity: 0,
        duration: 4,
        delay: 6.5

    });


    gsap.to('.r_scrollPfeil2' , {

        opacity: 1,
        y: "55%",
        duration: 0.5,
        ease: Bounce. easeOut,
        delay: 8,
        repeat: -1,
        repeatDelay: 1.5,
        

    });

   $('.r_Startscreen_Button').fadeIn(400);
   $('.r_Startscreen_Textfeld1').fadeIn(400);
   $('.r_Startscreen_Textfeld2').fadeIn(400);
   $('.r_Startscreen_Hinweis1').fadeOut(1000);
   $('.r_Startscreen_Hinweis2').fadeOut(1500);

}


gsap.from("#r_SchwarzesLoch", {

    scrollTrigger: {
        trigger: ".trigger01",
        start: "top center",
        endTrigger: ".endTrigger01",
        end: "+=100%",
        toggleActions: "restart reverse restart restart",
        id: "Schwarzes Loch",
       // markers: true,
        onEnter: truemmerTeile,

    },


});




//Tesserakt

function fadeBlack() {

    $('.r_blackscreen2').fadeOut(4000);


}

/*function nachOben() {

    console.log('test2');

    gsap.from('.r_Tesserakt', {

    
        opacity: 1,
        
    });
    
    gsap.to('.r_Tesserakt', {
        opacity: 0,
        y: '-100vh',
        delay: 0.2,
        duration: 1.5

    });

}*/


gsap.from("#r_ContainerTesserakt", {

    scrollTrigger: {
        trigger: "#r_ContainerTesserakt",
        start: "top center",
        onEnter: fadeBlack
    },

});

gsap.to(".r_Tesserakt", {

    scrollTrigger: {
        trigger: ".r_Tesserakt",
        start: "top top",
        ease: Power4. easeOut,
        end: "bottom 70%",
        id: "Teserakt",
       // markers: true,
        toggleActions: "reverse restart restart reverse s"
    },


    y: '-100VH',
    duration: 4,
    opacity: 0,


});

function astronaut() {

    

gsap.from('.r_WeltraumPersonWeit', {

        x: "30vw",
        y: "-30vh",
        rotation: 360,
        duration: 6,
        ease: Power2. easeOut,
        delay: 0.5,
        opacity: 0
    });

    gsap.to('.r_scrollPfeil' , {

        opacity: 1,
        y: "55%",
        duration: 0.5,
        ease: Bounce. easeOut,
        delay: 5,
        repeat: -1,
        repeatDelay: 1.5,
        

    });

    
}

function astronautAway() {

    gsap.to('.r_WeltraumPersonWeit', {

        
        y: "-100vh",
        rotation: 40,
        duration: 3,
        delay: 0.2,
        opacity: 0
    });

    gsap.to('.r_scrollPfeil' , {

        opacity: 0,
        duration: 0.5,
    
        

    });

}

gsap.from(".r_WeltraumPersonWeit", {
    
    scrollTrigger: {
        trigger: ".r_Tesserakt",
        ease: Power4. easeOut,
        onEnter: astronaut,
        onLeave: astronautAway,
        onEnterBack: astronautAway,
        onLeaveBack: astronaut
    },

   

});



//Tesserakt Seite


ScrollTrigger.create({

    trigger: "#r_ContainerTesserakt2",
    start: "-10% center",
    onEnter: r_WooshPlay

})


gsap.from(".r_TesseraktNah", {

    scrollTrigger: {
        trigger: "#r_ContainerTesserakt2",
        start: "top center",
        ease: Power4. easeOut,
        end: "bottom 80%",
        id: "Tesserakt Nah",
        // markers: true,
        toggleActions: "restart pause none reverse"
        
    },

    y: '100VH',
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: Power2. easeOut,

});


let tl1 = gsap.timeline();
ScrollTrigger.create({

        animation: tl1,
        trigger: "#r_ContainerTesserakt2",
        start: "-10% top",
        end: "bottom 40%",
        id: "timeline",
        toggleActions: "restart pause restart reverse"
        //markers: true,

});


tl1.to(".r_WeltraumPersonNah", {

    
    opacity: 1,
    duration: 3,
    delay: 0.5

});

tl1.to(".r_WeltraumPersonNah", {

    x: "10%",
    rotate: 10,
    delay: 1,
    ease: Power1. easeOut,
    duration: 9

});

tl1.to(".r_WeltraumPersonNah", {

    x: "-10%",
    rotate: -2,
    ease: Power1. easeOut,
    duration: 9

});

gsap.to(".buttonzumTest", {

    scrollTrigger: {
        trigger: "#r_ContainerTesserakt2",
        start: "-10% top",
        ease: Power4. easeOut,
        id: "button",
        //markers: true,
        toggleActions: "restart reset restart restart",
        
},

    opacity: 1,
    delay: 2,
    duration: 3
});

$('.buttonzumTest').on('hover', function(){

    console.log('testtt');

    

});



/*
gsap.to(".r_Tesserakt_Button", {

    scrollTrigger: {
        trigger: "#r_ContainerTesserakt2",
        start: "50% 80%",
        ease: Power4. easeOut,
        id: "button",
        markers: true,
        scrub: 2

},

    rotation: 25,
 
});

gsap.to(".r_Tesserakt_Button2", {

    scrollTrigger: {
        trigger: "#r_ContainerTesserakt2",
        start: "30% 40%",
        ease: Power4. easeOut,
        id: "button",
        markers: true,
        scrub: 2

},

    rotation: -25,
 
});

*/





//Dialog Tesserakt

let r_clickCounter = 0;
let r_textContentArray = [
    "Where am I?",
    "Four-dimensional being: You are inside of a black hole",
    "Which day is it?",
    "Four-dimensional being: Time isn’t a thing here. It is relative",
    "And... who are you?",
    "Four-dimensional being: I'm everything you can see here. I'm everywhere",
    "What are these Strands for \n in front of me?",
    "Four-dimensional being: These are time strands",
    "Can I touch them?",
    "Four-dimensional being: Yes, try it!"

];

var counterSoundCH = 0;
var counterSoundUW = 0;


$(".buttonzumTest").on("click", function () {

    //r_WesenPlay();
    
    

    if((r_clickCounter%2)==0){
    $(".r_Tesserakt_Charakter").html(r_textContentArray[r_clickCounter]).animate({opacity: '100%'}, "slow");
    
        r_clickCounter += 1;

        TesseraktDialogUW[counterSoundUW].stop();
        TesseraktDialogCH[counterSoundCH].play();
       


        counterSoundCH += 1; 

    $(".r_Tesserakt_Überwesen").animate({opacity: '0%'}, "slow");

    if(counterSoundCH > 3){
        counterSoundCH = 0;
    }


}
    else{
        $(".r_Tesserakt_Überwesen").html(r_textContentArray[r_clickCounter]).animate({opacity: '100%'}, "slow");

        r_clickCounter += 1;

        TesseraktDialogCH[counterSoundCH].stop();
        TesseraktDialogUW[counterSoundUW].play();
       

        counterSoundUW +=1;

        

        $(".r_Tesserakt_Charakter").animate({opacity: '0%'}, "slow");


        if(counterSoundUW > 3){
            counterSoundUW = 0;
        }
    }

  


    if(r_clickCounter >= 10) {

        $('.buttonzumTest').html('Go on');
        
        
    }

    if (r_clickCounter == 11) {

        TesseraktDialogCH[counterSoundCH].stop();
        TesseraktDialogUW[counterSoundUW].stop();

        
        window.location='#f_Steinzeit';
        $('.r_blackscreen3').fadeOut(4000);

        
    
        r_clickCounter=0;
    
        $(".r_Tesserakt_Charakter").animate({opacity: '0%'}, "slow");
        $(".r_Tesserakt_Überwesen").animate({opacity: '0%'}, "slow");
        $('.buttonzumTest').html('Start Dialog');

        r_backgroundSoundStop();
    }

    



    
});


//Tesserakt Entscheidung


$('.r_SteinzeitAuswahl').on('click', function(){



    window.location = "#r_SteinzeitEntscheidung";
    $('#r_ZukunftEntscheidung').css({display: "none"});
    setTimeout(function(){ window.location="#Endscreen"}, 8000);


});

$('.r_ZukunftAuswahl').on('click', function(){

 

    window.location = "#r_ZukunftEntscheidung";
    $('#r_SteinzeitEntscheidung').css({display: "none"});
    setTimeout(function(){ window.location="#Endscreen"}, 8000);


});


//Dialog Entscheidung



/*gsap.to(".buttonzumTest2", {

    scrollTrigger: {
        trigger: "#r_Tesserakt_Ende",
        start: "-20% top",
        ease: Power4. easeOut,
        id: "button2",
        markers: true,
        toggleActions: "restart reset restart restart",
        onEnter: r_backgroundSoundPlay
        
},

    opacity: 1,
    delay: 1,
    duration: 3
});*/

let r_clickCounter2 = 0;
let r_textContentArray2 = [

    "What should I do now?",
    "Four-dimensional being: You saw the past and the future... now it's your choice to choose",
    "So I will never come back to my normal life?",
    "Four-dimensional being: No! This is the only option how you can escape the black hole",
    "And... How can I choose?",
    "Four-dimensional being: Just touch the Time Strands again. They will open up!"
   
];



/*var astrotl = new Timeline();

ScrollTrigger.create({

    animation: astrotl,
    trigger: "r_Tesserakt_Ende"
});
*/

let counterSoundCH2 = 0;
let counterSoundUW2 = 0;



$(".buttonzumTest2").on("click", function () {

    

    if((r_clickCounter2%2)==0){
    $(".r_Tesserakt_CharakterEnde").html(r_textContentArray2[r_clickCounter2]).animate({opacity: '100%'}, "slow");
       
        r_clickCounter2 += 1;

        TesseraktDialogUW[counterSoundUW2].stop();
        TesseraktDialogCH[counterSoundCH2].play();
       

        counterSoundCH2 += 1; 

    $(".r_Tesserakt_ÜberwesenEnde").animate({opacity: '0%'}, "slow");


}
    else{

        $(".r_Tesserakt_ÜberwesenEnde").html(r_textContentArray2[r_clickCounter2]).animate({opacity: '100%'}, "slow");
        r_clickCounter2 += 1;

        TesseraktDialogCH[counterSoundCH2].stop();
        TesseraktDialogUW[counterSoundUW2].play();
       

        counterSoundUW2 +=1;

        

        

        $(".r_Tesserakt_CharakterEnde").animate({opacity: '0%'}, "slow");
    }

    console.log(r_clickCounter2);


    if(r_clickCounter2 == 6) {
        

        $('.buttonzumTest2').html('Move your mouse over the Time Strands!');
        $('.buttonzumTest2').animate({width: '200px'}, "slow");
        $('.buttonzumTest2').css({

            pointerEvents: "none"
        })
       



                $('.r_TesseraktNahlinks').on('mouseenter', function(){

                $(".r_Tesserakt_ÜberwesenEnde").animate({opacity: '0%'}, "fast");

                r_WooshStrandPlay();

                $('.r_TesseraktNahlinks').css({

                    pointerEvents: "none"
                })

                $('.buttonzumTest2').css({

                    pointerEvents: "none"
                })

                $('.buttonzumTest2').html('Click on the Time Period you wanna live in!');
                $('.buttonzumTest2').animate({width: '200px'}, "slow");
                


                gsap.to('.r_TesseraktNahlinks', {

                    x: "-40%",
                    duration: 2,
                    ease: Power3. easeOut,
                    delay: 0.2
                });

                gsap.to('.r_TesseraktNahrechts', {

                    x: "20%",
                    duration: 2,
                    ease: Power3. easeOut,
                    delay: 0.2
                });

                gsap.to('.r_SteinzeitAuswahl', {

                    opacity: 1,
                    duration: 2,
                    ease: Power3. easeOut,
                    delay: 0.5

                });

                gsap.to('.r_ZukunftAuswahl', {

                    opacity: 1,
                    duration: 2,
                    ease: Power3. easeOut,
                    delay: 0.5

                });

            });


            $('.r_SteinzeitAuswahl').on('click', function(){

                r_backgroundSoundStop();
                


            })

            $('.r_ZukunftAuswahl').on('click', function(){

                r_backgroundSoundStop();
               

            })

    }





    
});


function Zukunftspielen(){

    f_zukunft_ambient.play();
    console.log('basst');

    
}

function ZukunftspielenStop(){

    f_zukunft_ambient.stop();
    console.log('basst2');
}


function ZukunftspielenStop2(){

    f_zukunft_ambient.stop();
    console.log('basst2');
}




ScrollTrigger.create({

    trigger: "#f_Zukunft",
    start: "-2% top",
    end: "top center",
    onEnter: Zukunftspielen,
    onLeave: ZukunftspielenStop2,
   

});


ScrollTrigger.create({

    trigger: "#Endscreen",
    start: "-10% top",
    //markers: true,
    end: "top top",
    onEnter: endtitle
   


});





function endtitle(){

$('.r_blackscreen4').fadeOut("slow");
$('.endeTitel').hide();
$('.endeTitel2').hide();
$('.endeTitel3').hide();
$('.endeTitel').fadeIn(2000);
$('.endeTitel').fadeOut(2000);
$('.endeTitel2').delay(3200).fadeIn(2000);
$('.endeTitel2').fadeOut(2000);
$('.endeTitel3').delay(7000).fadeIn(2000);
$('.endeTitel3').fadeOut(5000);

}































