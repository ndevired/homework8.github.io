jQuery(function() {

  //animation to delay the page main area by 1 second
  //start with 0 opacity
  gsap.set($(".mainPageArea"), {css: {opacity:0}})
  //end with 1 opacity
  gsap.to($(".mainPageArea"), {css: {opacity:1},
                                duration: 1,
                                delay: 0.5});

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

  //On click the terminal should turn white and the terminal information pops up
  $("#Terminal .cls-1").on("click",function() {
    gsap.to($(this), {css: {fill:"#F5F5F5"},
                            duration:0.25});
    $("#title").html("Terminal")
    $("#description").html("After the <i>actional potential</i> has propagated down the axon it reaches the <i>terminal</i>. The terminal is responsible for transmitting this signal to other neurons or cells through the neuron-to-neuron connection called the <i>synapse</i>. <br><br>When the action potential reaches the terminal it gets converted to a chemical signal through the release of <i>neurotransmitters</i>. <br><br> These neurotransmitters are released into the synapse where there are picked up by the <i>dendrites</i> of another neuron.");
  });

  //on Mouseleave the terminal should go back to its original color
  $("#Terminal .cls-1").on("mouseleave",function() {
    gsap.to($(this), {css: {fill:"#AFA3CF"},
                            duration:0.25});
  });

  //On click the myelin should turn white and the myelin sheeth information pops up
  $("#Myelin .cls-2").on("click",function() {
    gsap.to($(this), {css: {fill:"#F5F5F5"},
                            duration:0.25});
    $("#title").html("Myelin Sheath")
    $("#description").html("The <i>myelin sheath</i> is a fatty insulating layer that is wrapped around the <i>axon</i> that transports the <i>action potential</i> from the <i>dendrite</i> to the <i>terminal</i>. The myelin sheath is produced by <i>Schwann cells</i> in a process called <i>myelination</i>. <br> <br> The main function of the myelin sheath is to help the neuron conduct the electrical signal (action potential) at a faster rate down the axon. The myelin sheath allows the electrical signal (action potential) to jump from one node to the next node in a process called <i>saltatory conduction</i>, causing the signal to travel faster. <br><br> Therefore, if the myelin sheath is damaged it can cause these signals to slow down. The loss of the myelin sheath causes the neurogenerative disease, <i>multiple sclerosis</i>, which can lead to motor impairment.");
  });

  //on Mouseleave the myelin sheeth should go back to its original color
  $("#Myelin .cls-2").on("mouseleave",function() {
    gsap.to($(this), {css: {fill:"#F4DF9D"},
                            duration:0.25});
  });

  // On click the nuclei should turn white and the nuclei information pops up
  $("#Nuclei .cls-3").on("click",function() {
    gsap.to($(this), {css: {fill:"#F5F5F5"},
                            duration:0.25});
    $("#title").html("Nucleus")
    $("#description").html("The <i>nucleus</i>, (plural is nuclei), is in all types of cells within the human body besides red blood cells. The nucleus is responsible for housing all of the genetic and hereditary information and controlling the the <i>growth and metabolism</i> of a cell.");
  });

  //on Mouseleave the nuclei should go back to its original color
  $("#Nuclei .cls-3").on("mouseleave",function() {
    gsap.to($(this), {css: {fill:"#E2A578"},
                            duration:0.25});
  });
                
  // On click the nodes should turn white and the nodes information pops up
  $("#Nodes .cls-1").on("click",function() {
    gsap.to($(this), {css: {fill:"#F5F5F5"},
                            duration:0.25});
    $("#title").html("Node of Ranvier")
    $("#description").html("The <i>Node of Ranvier</i> are gaps between the <i>myelin sheath</i> that expose the axon to the external environment. These sections are filled with ion channels allow the flow of ions between the interior of the axon and the external environment. <br> <br>They are very rich in <i>sodium and potassium ion channels</i> which are used to produce action potentials. The action potential produced at the first node is <i>propagated</i> to the next node where it is <i>regenerated</i>, and passed on to the next until it reaches the <i>terminal</i>.");
  });

  //on Mouseleave the nodes should go back to its original color
  $("#Nodes .cls-1").on("mouseleave",function() {
    gsap.to($(this), {css: {fill:"#AFA3CF"},
                            duration:0.25});
  });

  // On click the soma should turn white and the soma information pops up
  $("#Soma .cls-3").on("click",function() {
    gsap.to($(this), {css: {fill:"#F5F5F5"},
                            duration:0.25});
    $("#title").html("Soma")
    $("#description").html("The <i>soma</i> is the battery that keeps the neuron going. It does not play an active role in transmitting the action potential. <br><br>It produces <i>proteins</i> to create the various structures of the neuron such as the dendrite, axon, and more!");
  });

  //on Mouseleave the soma should go back to its original color
  $("#Soma .cls-3").on("mouseleave",function() {
    gsap.to($(this), {css: {fill:"#E2A578"},
                            duration:0.25});
  });

  // On click the dendrite should turn white and the dendrite information pops up
  $("#Dendrite .cls-1").on("click",function() {
    gsap.to($(this), {css: {fill:"#F5F5F5"},
                            duration:0.25});
    $("#title").html("Dendrite")
    $("#description").html("The <i>dendrite</i> is the section of the neuron that is responsible for receiving signals from other cells, glands, and neurons. <br> <br> The branches protruding from this structure are called <i>dendritic branches</i> and they are responsible for capturing the thousands of signals that a neuron can receive from many other cells. <br> <br> The signals can be <i>excitatory</i> or <i>inhibitory</i> in nature. The sum of all of these signals will either cause or prevent a response. An excitatory signal will cause the neuron to fire an electrical signal called an <i>action potential</i> that travels down the <i>axon</i>. An inhibitory signal will prevent the neuron from firing an actional potential.");
  });

  //on Mouseleave the dendrite should go back to its original color
  $("#Dendrite .cls-1").on("mouseleave",function() {
    gsap.to($(this), {css: {fill:"#AFA3CF"},
                            duration:0.25});
  });
})