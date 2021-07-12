/* ----------------------------------- */
/*           ABTEIL FABIAN             */
/* ----------------------------------- */

//$(".f_steinzeit_wrapper").hide();

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


let clickCounter = 0;
let feuerEintritt = 4;      //Stelle an der das Feuer Eintritt Bsp: Klick 4
let feuerChecker = 0;
var f_delay = 10000;        //Delay von den Hilfsbutton   
//Befülle das Array mit Text     
let textContentArray = [
    "Woaaah! What is going on? Where is my space suit? Where am I? Is that a mammoth? ",
    "Four-dimensional being: Yes it is. You've travelled all the way back to the stone age. Back in this time humans needed to fight for their survival.",
    "I'm kind of scared now",
    "Four-dimensional being: That's okay. Humans back then were smart enough to acquire the benefits of fire to protect themselves from animals. Try it out!",
    "Wow! That was easier than I thought",
    "Four-dimensional being: I knew that you would make it. Your time here is over. Let's go on..."

];

/* -----------------Sound------------------ */
//ForestSound
var f_steinzeitForestAmbience = new Howl({
    src: ["../sound/f_steinzeit_forest_ambience.mp3"],
    autoplay: false,
    loop: true,

});


//FireSound
var f_steinzeitFire = new Howl({
    src: ["../sound/f_steinzeit_feuer.mp3"],
    autoplay: false,
    loop: true,
    volume: 1.2,

});

//WaterSound
var f_steinzeitWaterAmbience = new Howl({
    src: ["../sound/f_steinzeit_river.mp3"],
    autoplay: false,
    loop: true,
    volume: 0.1,

});

//HoverIn
var f_zukunft_hover_in = new Howl({
    src: ["../sound/hover_in_neu.mp3"],
    autoplay: false,
    loop: false,
    volume: 2,

});
//HoverOut
var f_zukunft_hover_out = new Howl({
    src: ["../sound/hover_out_neu.mp3"],
    autoplay: false,
    loop: false,
    volume: 2,

});

//ZukunftAmbient
var f_zukunft_ambient = new Howl({
    src: ["../sound/zukunft_ambient.mp3"],
    autoplay: false,
    loop: true,
    volume: 3,

});



//Bewirkt, dass die Hilfebuttons anfangs ausgeblendet sind
$(".f_steinzeit_hilfe").slideUp(0.001);
$(".f_zukunft_hilfe").slideUp(0.001);


/* -----------------Steinzeit------------------ */
/* -----------------Steinzeit------------------ */
/* -----------------Steinzeit------------------ */



/*__________________________________________________________________Hier deinen Selektor einfügen und dann einfach .fadeIn()_______________________________ */
$(".DeinButton").on("click", function(){
    
    $(".DeinSzenename").fadeOut();
    //Wsl musst no Musik ausfaden. Des einfach hier drunter haun. Wennst a Beispiel suchst wie ma Musik ausfaden verzögert. In zeile 385 is was dazu
    $(".f_steinzeit_wrapper").fadeIn(); 
    
})





$(".f_steinzeitbutton").on("click", function () {

    if ((clickCounter % 2) == 0) {
        $(".f_steinzeit_dialog_charakter").animate({ opacity: '0%' }, 0.001);
        $(".f_steinzeit_dialog_charakter").html(textContentArray[clickCounter]).animate({ opacity: '100%' }, "slow");
        clickCounter += 1;
        $(".f_steinzeit_dialog_ueberwesen").animate({ opacity: '0%' }, "slow");
    }
    else {
        $(".f_steinzeit_dialog_ueberwesen").html(textContentArray[clickCounter]).animate({ opacity: '100%' }, "slow");
        clickCounter += 1;
        $(".f_steinzeit_dialog_charakter").animate({ opacity: '0%' }, "slow");
    }

    //console.log(clickCounter);

    if (clickCounter == feuerEintritt) {
        $(".f_feuerentfacher").css({
            "cursor": "pointer",
        });
        //lässt den Button verschwinden damit der User nicht weitergeklickt bevor das Feuer entfacht wurde
        $(".f_steinzeitbutton").slideUp();

        //Blendet den Hilfebutton ein
        $(".f_steinzeit_hilfe").delay(f_delay).slideDown()
    }

    else {
        $(".f_feuerentfacher").css({
            "cursor": "default",
        });
    }
    //Lässt den Hilfebutton ausblenden
    if (clickCounter == feuerEintritt + 1) {


        $(".f_steinzeit_hilfe").slideUp()

    }

    //Folgende 2 if Abfragen bewirken das Ausblenden der Texte vor Beginn
    if (clickCounter == 1) {
        $(".f_steinzeit_dialog_charakter_wrapper").css({
            "visibility": "visible",
        })

        //Howl Forest Sound
        function f_steinzeitForestAmbiencePlay() {
            f_steinzeitForestAmbience.play();
            f_steinzeitForestAmbience.fade(0, 1, 1000);
        }
        //ruft Funktion auf
        f_steinzeitForestAmbiencePlay();

        //Howl River Sound
        function f_steinzeitRiverAmbiencePlay() {
            f_steinzeitWaterAmbience.play();
            f_steinzeitWaterAmbience.fade(0, 0.1, 1000);
        }
        f_steinzeitRiverAmbiencePlay()
    }
    if (clickCounter == 2) {
        $(".f_steinzeit_dialog_ueberwesen_wrapper ").css({
            "visibility": "visible",
        })
    }

    //Ändert Charakter bei Klick 3
    if (clickCounter == 3) {
        $(".f_steinzeit_charakter").attr({ src: "Bilder/stein_c_vorne.png" }).hide().fadeIn(500);
        $(".f_steinzeit_charakter").css({
            "margin-left": "20vh",
        })
    }

    //Ändert Szene bei Klick 7
    if (clickCounter == 7) {
        $(".f_steinzeit_wrapper").fadeOut(); //Fadet Steinzeit aus

        //Fadet die Musik in 800ms aus
        function f_steinzeitStopAll() {
            f_steinzeitForestAmbience.fade(1, 0, 800);
            f_steinzeitWaterAmbience.fade(0.1, 0, 800);
            f_steinzeitFire.fade(1.2, 0, 800);

            //Setzt einen Delay von 1000 bevor die Musik stoppt
            setTimeout(function () {
                f_steinzeitForestAmbience.stop();
                f_steinzeitWaterAmbience.stop();
                f_steinzeitFire.stop();
            }, 1000);

        }

        f_steinzeitStopAll(); // Funktionsaufruf


        $("#f_Zukunft").fadeIn(); //Fadet Zukunft ein

        function f_zukunftAmbience() {
            f_zukunft_ambient.play();
        }
        f_zukunftAmbience();

    }
})

$(".f_feuerentfacher").on("click", function () {

    if (clickCounter == feuerEintritt) {
        $(".f_feuercontainer").css({
            "visibility": "visible",
        }).hide().fadeIn(1000)


        //Howl Feuer Sound
        function f_steinzeitFirePlay() {
            f_steinzeitFire.play();
            f_steinzeitFire.fade(0, 1.2, 1000);
        }

        f_steinzeitFirePlay();
    }
    //holt den Button nach Erscheinen des Feuers wieder rein
    $(".f_steinzeitbutton").slideDown();
})








/* -----------------Zukunft------------------ */
/* -----------------Zukunft------------------ */
/* -----------------Zukunft------------------ */

let f_clickCounter_zukunft = 0; // Clickcounter Zukunft

//Befülle das Array mit Text

let textContentArrayZukunft = [
    "Holy Shit! Are those flying cars?",
    "Four-dimensional being: Yes, they are. Now, we´re in the year 50.000. Look around, you´ll find a lot of interesting technologies which helped the world population defeat hunger, poverty and diseases",
    "But … how ist that possible?",
    "Four-dimensional being: Humans found ways to gain a nearly infinite amount of ressources by travelling to other planets and stars",
    "And i thought they wouldn't even overcome the climate change",
    "Four-dimensional being: They learned their lessons out of this mass extinction. Let's focus on something else. Look at this helmet over there. Try it on!",
    "What is it supposed to do?",
    "Four-dimensional being: Just stare at some objects in this room and see the magic... You can start with that pizza if you cant decide",
    "WOW that's so cool!",
    "Four-dimensional being: Now you've seen what the future is offering. Let´s get back to where we started our journey...."
];


$(".f_zukunftbutton").on("click", function () {

    if ((f_clickCounter_zukunft % 2) == 0) {
        $(".f_zukunft_dialog_charakter").animate({ opacity: '0%' }, 0.001); //0.001 lässt den jeweils ersten Absatz einfaden
        $(".f_zukunft_dialog_charakter").html(textContentArrayZukunft[f_clickCounter_zukunft]).animate({ opacity: '100%' }, "slow");

        f_clickCounter_zukunft += 1;

        $(".f_zukunft_dialog_ueberwesen").animate({ opacity: '0%' }, "slow");
    }

    else {
        $(".f_zukunft_dialog_ueberwesen").html(textContentArrayZukunft[f_clickCounter_zukunft]).animate({ opacity: '100%' }, "slow");

        f_clickCounter_zukunft += 1;

        $(".f_zukunft_dialog_charakter").animate({ opacity: '0%' }, "slow");
    }

    console.log(f_clickCounter_zukunft);

    /* -----------------Sonderfälle Zukunft------------------ */
    if (f_clickCounter_zukunft == 3) {
        $(".f_zukunft_charakter").attr({ src: "Bilder/future_c_vorne.png" }).hide().fadeIn(500);
    }


    if (f_clickCounter_zukunft == 6) {
        $(".f_zukunftbutton").slideUp();
        //$(".f_zukunft_hilfe").delay(f_delay).slideDown()

        //Timer der nach f_delay den Hilfetext einblendet
        var f_zukunft_helm_meinTimeout = setTimeout(function () {
            $(".f_zukunft_hilfe").slideDown()
        }, f_delay);

        // Timeout abbrechen            





        $(".f_zukunft_helm").on("click", function (event) {
            let f_target = $(event.target);
            $(f_target).fadeOut(500);
            $(".f_zukunftbutton").slideDown();
            $(".f_zukunft_charakter").fadeOut("fast");
            //falls der Button benötigt wurde wird er hier ausgeblendet
            $(".f_zukunft_hilfe").slideUp();
            //Lässt den Timer nicht eintreten wenn der Button zuvor geklickt wurde
            clearTimeout(f_zukunft_helm_meinTimeout);
            $('.f_helmOverlay').fadeIn("slow");

        });

    }

    if (f_clickCounter_zukunft == 8) {
        $(".f_zukunftbutton").slideUp();

        //Items: Pizza
        $(".f_zukunft_hover_0_5").mouseenter(function () {
            $(this).css('cursor', 'move');
            $(this).css('transform', 'scale(0.5) translateY(-100px)');

            function f_zukunft_hover_in_sound() {
                f_zukunft_hover_in.play();
            }
            f_zukunft_hover_in_sound();
        });

        $(".f_zukunft_hover_0_5").mouseleave(function () {
            $(this).css('cursor', 'default');
            $(this).css('transform', 'scale(0.5) translateY(5px)');

            $(".f_zukunftbutton").delay(1000).slideDown();

            function f_zukunft_hover_out_sound() {
                f_zukunft_hover_out.play();
            }
            f_zukunft_hover_out_sound();
        });
        //Items: Soda, Buch, Kissen
        $(".f_zukunft_hover_0_2").mouseenter(function () {
            $(this).css('cursor', 'move');
            $(this).css('transform', 'scale(0.2) translateY(-100px)');
            function f_zukunft_hover_in_sound() {
                f_zukunft_hover_in.play();
            }
            f_zukunft_hover_in_sound();
        });

        $(".f_zukunft_hover_0_2").mouseleave(function () {
            $(this).css('cursor', 'default');
            $(this).css('transform', 'scale(0.2) translateY(5px)');

            $(".f_zukunftbutton").delay(1000).slideDown();
            function f_zukunft_hover_out_sound() {
                f_zukunft_hover_out.play();
            }
            f_zukunft_hover_out_sound();
        });
        //Ersetzt Hilfetext
       /* $(".f_zukunft_hilfe").html("Tip: Move your Mouse over some noticeable things e.g. the soda")
        //$(".f_zukunft_hilfe").delay(f_delay).slideDown();

        //Timer der nach f_delay den Hilfetext einblendet
        var f_zukunft_hover_meinTimeout = setTimeout(function () {
            $(".f_zukunft_hilfe").slideDown();
        }, 5000);*/
        
    }
/*
    if (f_clickCounter_zukunft == 9) {
        clearTimeout(f_zukunft_hover_meinTimeout);
        $(".f_zukunft_hilfe").slideUp();
        
        // Timeout abbrechen 
    }
*/

    if (f_clickCounter_zukunft == 11) {
        $("#f_Zukunft").fadeOut();
        function f_zukunftStopAll() {
            f_zukunft_ambient.fade(1, 0, 800);

            //Setzt einen Delay von 1000 bevor die Musik stoppt
            setTimeout(function () {
                f_zukunft_ambient.stop();
            }, 1000);

        }
        f_zukunftStopAll();

        /*__________________________________________________________________Hier deinen Selektor einfügen und dann einfach .fadeIn()_______________________________ */


    }


   





})
