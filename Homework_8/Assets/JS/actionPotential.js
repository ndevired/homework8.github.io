jQuery(function() {

    //animation to delay the page main area 2 by 0.5 second
    //start with 0 opacity
    gsap.set($(".mainPageArea2"), {css: {opacity:0}})
    //end with 1 opacity
    gsap.to($(".mainPageArea2"), {css: {opacity:1},
                                        duration: 1,
                                        delay: 0.5});

    //animation to delay the page main area 3 by 1.5 second
    //start with 0 opacity
    gsap.set($(".mainPageArea3"), {css: {opacity:0}})
    //end with 1 opacity
    gsap.to($(".mainPageArea3"), {css: {opacity:1},
                                        duration: 1,
                                        delay: 1.5});

    //animation for mouseover for nav bar headings
    //mouseenter increases the size and changes the color of the text                                   
    $(".navText").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white"},
                                    duration: 0.25});
    });

    //mouseleave returns the text to its original size and color
    $(".navText").on("mouseleave",function() {
        gsap.to($(this), {css: {color:"black"},
                                    duration: 0.25});
    });

    // start with opacity 0 for button 1
    //when you click on button 1 it should appear on the graph
    gsap.set($("#Button1 .cardLink"), {css: {opacity:0}})
    $("#stimulusButton").on("click",function(){
        gsap.to($("#Button1"), {css:{opacity:1}})
    });

    // start with opacity 0 for button 2
    //when you click on button 2 it should appear on the graph
    gsap.set($("#Button2"), {css: {opacity:0}})
    $("#depolarizationButton").on("click",function(){
        gsap.to($("#Button2"), {css:{opacity:1}})
    });

    // start with opacity 0 for button 3
    //when you click on button 3 it should appear on the graph
    gsap.set($("#Button3"), {css: {opacity:0}})
    $("#repolarizationButton").on("click",function(){
        gsap.to($("#Button3"), {css:{opacity:1}})
    });

    // start with opacity 0 for button 4
    //when you click on button 4 it should appear on the graph
    gsap.set($("#Button4"), {css: {opacity:0}})
    $("#hyperpolarizationButton").on("click",function(){
        gsap.to($("#Button4"), {css:{opacity:1}})
    });

    // start with opacity 0 for button 5
    //when you click on button 5 it should appear on the graph
    gsap.set($("#Button5"), {css: {opacity:0}})
    $("#restingStateButton").on("click",function(){
        gsap.to($("#Button5"), {css:{opacity:1}})
    });

    //mouseenter for title and changes the color of the text                                   
    $(".title").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white"},
                                duration: 0.25});
    });

    //mouseenter for titleAP and changes the color of the text                                   
    $(".titleAP").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white"},
                                    duration: 0.25});
    });


    //mouseenter for graphAP and changes the color of the text                                   
    $(".graphAP").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white"},
                                    duration: 0.25});
    });

    //mouseenter for definition and changes the color of the text                                   
    $(".definition").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white"},
                                    duration: 0.25});
    });

    //mouseenter for definition and changes the color of the text                                   
    $(".definition").on("mouseleave", function() {
        gsap.to($(this), {css: {color: "#555353"},
                                    duration: 0.25});
    });   
});