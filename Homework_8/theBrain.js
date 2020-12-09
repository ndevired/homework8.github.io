jQuery(function() {
    //animation to delay the page main area by 0.5 second
    //start with 0 opacity
    gsap.set($(".mainPageArea4"), {css: {opacity:0}})
    //end with 1 opacity
    gsap.to($(".mainPageArea4"), {css: {opacity:1},
                                    duration: 1,
                                    delay: 0.8});
        
    //animation to delay the page main area by 1 second
    //start with 0 opacity
    gsap.set($(".mainPageArea5"), {css: {opacity:0}})
    //end with 1 opacity
    gsap.to($(".mainPageArea5"), {css: {opacity:1},
                                    duration: 1,
                                    delay: 1.5});

    //animation for mouseover for nav bar headings
    //click changes the color of the text                                   
    $(".navText").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white"},
                                duration: 0.25});
    });

    //mouseleave returns the text to its original color
    $(".navText").on("mouseleave",function() {
        gsap.to($(this), {css: {color:"black"},
                                duration: 0.25});
    });

    //On click the frontal lobe should turn white and the frontal information pops up
    $("#frontal .cls-18").on("click",function() {
        gsap.to($(this), {css: {fill:"#F5F5F5"},
                                duration:0.25});
        $("#title").html("Frontal Lobe")
        $("#description").html("some text about frontal lobe");
    });
        
    //on Mouseleave the frontal lobe should go back to its original color
    $("#frontal .cls-18").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#B4D8EC"},
                                duration:0.25});
    });

    //On click the occipital lobe should turn white and the occipital information pops up
    $("#occipital .cls-22").on("click",function() {
        gsap.to($(this), {css: {fill:"#F5F5F5"},
                                duration:0.25});
        $("#title").html("Occipital Lobe")
        $("#description").html("some text about occipital lobe");
    });
        
    //on Mouseleave the occipital lobe should go back to its original color
    $("#occipital .cls-22").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#F7A6B6"},
                                duration:0.25});
    });

    //On click the temporal lobe should turn white and the temporal information pops up
    $("#temporal .cls-21").on("click",function() {
        gsap.to($(this), {css: {fill:"#F5F5F5"},
                                duration:0.25});
        $("#title").html("Temporal Lobe")
        $("#description").html("some text about temporal lobe");
    });
        
    //on Mouseleave the temporal lobe should go back to its original color
    $("#temporal .cls-21").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#B6CF9D"},
                                duration:0.25});
    });

    //On click the parietal lobe should turn white and the parietal information pops up
    $("#parietal .cls-30").on("click",function() {
        gsap.to($(this), {css: {fill:"#F5F5F5"},
                                duration:0.25});
        $("#title").html("Parietal Lobe")
        $("#description").html("some text about parietal lobe");
    });
        
    //on Mouseleave the parietal lobe should go back to its original color
    $("#parietal .cls-30").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#FCFB98"},
                                duration:0.25});
    });
        
    //On click the cerebellum should turn white and the cerebellum information pops up
    $("#cerebellum .cls-3").on("click",function() {
        gsap.to($(this), {css: {fill:"white"},
                                duration:0.25});
        $("#titleOne").html("Cerebellum")
        $("#descriptionOne").html("some text about cerebellum");
    });

    //on Mouseleave the cerebellum should go back to its original color
    $("#cerebellum .cls-3").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#6AE8D9"},
                                duration:0.25});
    });

    //On click the gyrus cinguli should turn white and the gyrus cinguli information pops up
    $("#gyrusCinguli .cls-5").on("click",function() {
        gsap.to($("#gyrusCinguli .cls-5"), {css: {fill:"white"},
                                            duration:0.25});
        $("#titleOne").html("Gyrus Cinguli")
        $("#descriptionOne").html("some text about gyrus cinguli");
    });

    //on Mouseleave the gyrus cinguli should go back to its original color
    $("#gyrusCinguli .cls-5").on("mouseleave",function() {
        gsap.to($("#gyrusCinguli .cls-5"), {css: {fill:"#FF1A1A"},
                                        duration:0.25});
    });
        
    //On click the third ventricle should turn white and the third ventricle information pops up
    $("#thirdVentricle .cls-10").on("click",function() {
        gsap.to($(this), {css: {fill:"white"},
                                    duration:0.25});
        $("#titleOne").html("Third Ventricle")
        $("#descriptionOne").html("some text about third ventricle");
    });

    //on Mouseleave the third ventricle should go back to its original color
    $("#thirdVentricle .cls-10").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#00C1FE"},
                                duration:0.25});
    });

    //On click the brainstem should turn white and the brainstem information pops up
    $("#brainstem .cls-7").on("click",function() {
        gsap.to($(this), {css: {fill:"white"},
                                    duration:0.25});
        $("#titleOne").html("Brainstem")
        $("#descriptionOne").html("some text about the brainstem");
    });

    //on Mouseleave the brainstem should go back to its original color
    $("#brainstem .cls-7").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#A553E5"},
                                    duration:0.25});
    });

    //On click the septum pellucidum should turn white and the septum pellucidum information pops up
    $("#septumPellucidum .cls-11").on("click",function() {
        gsap.to($("#septumPellucidum .cls-11"), {css: {fill:"#FFFFFF"},
                                            duration:0.25});
        $("#titleOne").html("Septum Pellucidum")
        $("#descriptionOne").html("some text about the septum pellucidum");
    });

    //on Mouseleave the septum pellucidum should go back to its original color
    $("#septumPellucidum .cls-11").on("mouseleave",function() {
        gsap.to($("#septumPellucidum .cls-11"), {css: {fill:"#FFFC00"},
                                        duration:0.25});
    });
        
    //On click the corpus callosum should turn white and the corpus callosum information pops up
    $("#corpusCallosum .cls-13").on("click",function() {
        gsap.to($(this), {css: {fill:"#E0E0E0"},
                                    duration:0.25});
        $("#titleOne").html("Corpus Callosum")
        $("#descriptionOne").html("some text about the corpus callosum");
    });

    //on Mouseleave the corpus callosum should go back to its original color
    $("#corpusCallosum .cls-13").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#FDC063"},
                                    duration:0.25});
    });
});
