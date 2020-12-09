jQuery(function() {
    
    //animation for welcome text
    //mouseenter changes the color of the text                                   
    $(".welcome").on("mouseenter", function() {
        gsap.to($(this), {css: {color: "white"},
                                duration: 0.25});
    });

    //mouseleave returns the text to its original size and color
    $(".welcome").on("mouseleave",function() {
        gsap.to($(this), {css: {color:"#555353"},
                                duration: 0.25});
    });
});