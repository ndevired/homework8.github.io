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
        $("#description").html("The frontal lobe conducts <b>higher executive functions</b> such as emotional regulation, planning, organizing and initiating an intended goal as well as solving problems. It monitors and controls <b>voluntary movements</b> across the body. ");
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
        $("#description").html("The occipital lobe houses the <b>primary visual cortex</b> also known as <b>V1</b>. V1 is responsible for receiving visual information from the eyes, processing this information and sending it to the <b>secondary visual processing areas</b>. These areas interpret the distance, location, depth and identity of the visual cue. ");
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
        $("#description").html("The temporal lobe houses the <b>primary auditory cortex</b>. This cortex is in charge of receiving auditory information from the ears and processing it to understand the contents of what we are hearing; this includes words, tone, language and more. This lobe also houses the <b>hippocampus</b> which is an important part of the brain that is responsible for storing and retrieving memories and emotions.");
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
        $("#description").html("The parietal lobe is reponsible for <b>spatial awareness and coordination</b>. It receives and processes sensory input for <b>heat, touch, pain and pressure</b>. This lobe allows humans to discern between different types of input.");
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
        $("#descriptionOne").html("The main function of the cerebellum is to control <b>voluntary movements</b> such as balance, posture, coordination, and speech. It does this by coordinating the way muscles move together to produce such movements.");
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
        $("#descriptionOne").html("The gyrus cinguli is also known as the cingulate gyrus. It is a part of the limbic system and therefore is responsible for regulating <b>emotions and behavior</b>, and controls <b>autonomic motor movements</b>. ");
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
        $("#titleOne").html("Third and Fourth Ventricles")
        $("#descriptionOne").html("The <b>ventricles</b> in the brain are responsible for producing, transporting and removing <b>cerebrospinal fluid</b> in the brain. This fluid coats the entire brain and creates a cushion between the brain and the skull to prevent neural damage.<br><br><b>Third Ventricle</b><br> The lateral ventricles connect to the third ventricle through a channel called the <b>foramen of Monro</b>. <br><br><b>Fourth Ventricle</b><br> The fourth ventricle connects to the third ventricle through a channel called the <b>cerebral aqueduct</b>.");
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
        $("#descriptionOne").html("The brainstem consists of the <b>pituitary gland</b>, the <b>pons</b> and the <b>medulla oblongata</b>. <br><br> <b>Pituitary Gland</b> <br> The pituitary gland secretes hormones such as growth hormone, thyroid stimulating hormone, gonadotropic hormones, prolactin hormone, oxytocin and antidiuretic hormone.<br><br><b>Pons</b><br>The pons is in charge of breathing, swallowing, bladder control, eye movement during REM sleep, facial expressions and chewing.<br><br><b>Medulla Oblongata</b><br> The medulla oblongata is responsible for acting as communication between the brain and the spinal cord, and controls autonomic motor movement such as heartbeat and respiration.");
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
        $("#descriptionOne").html("The <b>ventricles</b> in the brain are responsible for producing, transporting and removing <b>cerebrospinal fluid</b> in the brain. This fluid coats the entire brain and creates a cushion between the brain and the skull to prevent neural damage. There are three ventricles: the lateral ventricles, the third ventricle and the fourth ventricle. The <b>septum pellucidum</b> is responsible for separating the lateral ventricles.");
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
        $("#descriptionOne").html("The corpus callosum connects the left and right hemispheres of the brain. It acts as the main form of <b>communication</b> between both sides. This ensures that information is relayed to both sides of the brain.");
    });

    //on Mouseleave the corpus callosum should go back to its original color
    $("#corpusCallosum .cls-13").on("mouseleave",function() {
        gsap.to($(this), {css: {fill:"#FDC063"},
                                    duration:0.25});
    });
});
