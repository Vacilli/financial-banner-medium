function preInit() {
    if (Enabler.isInitialized()) {
        init();
        console.log("done");
    } else {
        Enabler.addEventListener(
            studio.events.StudioEvent.INIT,
            init
        );
        console.log("not yet");
    }
}


//PRELOAD
//this.addEventListener('DOMContentLoaded', preloadImages);
//function preloadImages() {
 preInit();
//}

function init(){    
    setTimeout(initAnimations, 500);
    function initAnimations(){
        var d = 4,
            t = .5 ,
            tl = new TimelineMax(),
            easeInOut = Power1.easeInOut,
            easeIn = Power1.easeIn,
            easeOut = Power1.easeOut;
//F1
            tl.set("#tablet", {transform:"rotateY(-10deg) rotateX(-18deg) scale(0.6)", ease:easeOut})
            tl.set("#headline01", {scale:1.15, ease:easeOut})
            tl.set("#headlineImage", {transform:"rotateY(-10deg) rotateX(-5deg) ", ease:easeOut})
            
            tl.addLabel("initHeadline01")
            .to("#logo", t, {css:{height: "63px"}, ease:easeOut},"initHeadline01")
            .from("#logo", t ,{y:"-=30"}, "initHeadline01")  
            .to("#cta", t, {css:{height: "36px"}, ease:easeOut, delay:t/2}, "initHeadline01")
            .from("#cta", t ,{y:"+=30"}, "initHeadline01")  
            
            tl.addLabel("trans1")
            .to("#tablet", t, {opacity:1, ease:easeIn}, "trans1")
            .from("#tablet", t*2, {scale:0.5, ease:easeOut}, "trans1")
            .to(".f1_headline", t/1.5, {opacity:1, rotation:0, ease:easeOut}, "trans1")
            .from(".f1_headline", t*1.5, {x:"+=250",opacity:1,  ease:easeOut}, "trans1")

            tl.addLabel("trans2","+="+t)
            tl.to("#tablet", t*1.5,{transform:"rotateY(0deg) rotateX(0deg) scale(1)",top:"-132px",left:"-30px", transformOrigin:"50% 50%", ease:easeOut},"trans2")             
            .to("#logo", t*1.5, {scale:1.6,y:"14px", x:"12px",ease:easeOut},"trans2")
            .to("#headlineImageholder", t*1.5,{top:"122px", left:"164px",ease:easeOut},"trans2")
            .to("#f1_headline_1", t*1, {y:"80",  ease:easeIn}, "trans2")
            .to("#f1_headline_2", t*1, {y:"80",  ease:easeIn}, "trans2")
        
            .addLabel("copy2")
            .to(".f2_headline", t/1.5, {opacity:1, ease:easeOut}, "copy2")
            .to(".f2_headline_top", t*1.5, {top:"12px",  ease:easeOut}, "copy2")
            .to(".f2_headline_bottom", t*1.5, {top:"40px",  ease:easeOut}, "copy2")
          
            .addLabel("endHeadline02", "+="+t*2) //delay f2-f3
            .to(".f2_headline_top", t, {y:"-=60", ease:easeOut}, "endHeadline02")  
            .to(".f2_headline_bottom", t, {y:"+=90", ease:easeOut}, "endHeadline02")  
//F3
            .addLabel("initHeadline03", "-="+t/2)
            .to("#mortgage_text", t*1, {left:"3px",  ease:easeOut}, "initHeadline03")
            .to("#mask", t*1, {width:"240px",  ease:easeOut}, "initHeadline03")
            .to(".f3_headline", t/1.5, {opacity:1, ease:easeOut}, "initHeadline03")
            .from(".f3_headline_top", t*1.5, {y:"-=30",  ease:easeOut}, "initHeadline03")
            .from(".f3_headline_bottom", t*1.5, {y:"+=80",  ease:easeOut}, "initHeadline03")
        
            .addLabel("endHeadline02", "+="+t*2) //delay f2-f3
            .to(".f3_headline_top", t, {y:"-=60", ease:easeOut}, "endHeadline02")  
            .to(".f3_headline_bottom", t, {y:"+=80", ease:easeOut}, "endHeadline02")  
//F4
            .addLabel("initHeadline04", "-="+t/2)
            .to("#legal", t, {opacity:1, ease:easeOut}, "initHeadline04")  
            .to(".f4_headline", t/1.5, {opacity:1, ease:easeOut}, "initHeadline04")
            .from(".f4_headline_top", t*1.5, {y:"-=30",  ease:easeOut}, "initHeadline04")
            .from(".f4_headline_bottom", t*1.5, {y:"+=60",  ease:easeOut}, "initHeadline04")
        ;
    }
}

//CLICKTAG
document.getElementById("clickTag").addEventListener("click", function(){
  Enabler.exit('Background Exit');
});

//OVER
document.getElementById("clickTag").addEventListener("mouseover", function(){
    var tl_cta_rollOver = new TimelineMax();
    tl_cta_rollOver.to("#cta", .2, {backgroundColor:"#52616b"});
});

//OUT
document.getElementById("clickTag").addEventListener("mouseout", function(){
    var tl_cta_rollOver = new TimelineMax();
    tl_cta_rollOver.to("#cta", .2, {backgroundColor:"#a90d37"});
});

