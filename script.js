/** Description: Functionality of spatial thinking project. Including rotating the 3d 
 * house, selecting walls, text changes, and map selection logic.
 * 
 * Authors: A'di Dust and Abigail Gunther
 * Date: 04/27/2023
 */


// Allows user to rotate the 3D house by dragging the object.
// Adapted from: https://codepen.io/djcesar/pen/EmwKQV
AFRAME.registerComponent('drag-rotate-component',{
    schema : { speed : {default:3}},
    init : function(){
      this.ifMouseDown = false;
      this.x_cord = 0;
      this.y_cord = 0;
      document.addEventListener('mousedown',this.OnDocumentMouseDown.bind(this));
      document.addEventListener('mouseup',this.OnDocumentMouseUp.bind(this));
      document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
    },
    OnDocumentMouseDown : function(event){
      this.ifMouseDown = true;
      this.x_cord = event.clientX;
      this.y_cord = event.clientY;
    },
    OnDocumentMouseUp : function(){
      this.ifMouseDown = false;
    },
    OnDocumentMouseMove : function(event)
    {
      if(this.ifMouseDown)
      {
        var temp_x = event.clientX-this.x_cord;
        var temp_y = event.clientY-this.y_cord;
        if(Math.abs(temp_y)<Math.abs(temp_x))
        {
          this.el.object3D.rotateY(temp_x*this.data.speed/1000);
        }
        else
        {
          this.el.object3D.rotateX(temp_y*this.data.speed/1000);
        }
        this.x_cord = event.clientX;
        this.y_cord = event.clientY;
      }
    }
  });

// Variables to update 
var index = 0;
var backClicked = false;
var rightClicked = false;
var leftClicked = false;
var topClicked = false;
var blankClicked = false;

// replace components of 2D house if clicked and allow text change
AFRAME.registerComponent('click-to-replace', {
    init : function(){
        const modelList = ["#back", "#right", "#left", "#top", "#blank"]; // ids for aframe entities
        this.el.addEventListener("click", function(e) {
          var selected = '#'.concat(e.target.getAttribute('id'));
          if(selected == (modelList[index].concat("-house"))){
            // change to correct model on click
            e.target.removeAttribute('gltf-model');
            e.target.setAttribute('gltf-model', modelList[index]);
            index = (index + 1) % 5;
          };

    })}
})

// After welcome screen, make map div visible
function showMap() {
  for (const e of document.getElementsByClassName("welcome")) {
    e.style.display = "none";
  }
  for (const e of document.getElementsByClassName("map")) {
    e.style.visibility = "visible";
  }
  for (const e of document.getElementsByClassName("textbox")) {
    e.style.display = "block";
  }
}

// after map make house div visible
function showHouse() {
  for (const e of document.getElementsByClassName("house")) {
    e.style.visibility="visible";
  }
  document.getElementById("nextChoice1").style.display = "none";
  document.getElementById("nextChoice2").style.display = "none";
  for (const e of document.getElementsByClassName("map")) {
    e.style.display="none";
  }
}

/**
 * Changes the text for the main dialogue; text is changed in a linear fashion and cannot be 
 * changed back to a previous text.
 */
  function changeText() {
    console.log(backClicked)
    if(document.getElementById("map").style.visibility == "visible") {
      document.getElementById("map").style.display = "none";
      document.getElementById("map").style.visibility = "hidden";
      document.getElementById("house0").style.display = "inline";
    } else if (document.getElementById("house0").style.display == "inline") {
      document.getElementById("house0").style.display = "none";
      document.getElementById("house1").style.display = "inline";
    } else if (document.getElementById("house1").style.display == "inline") {
      document.getElementById("house1").style.display = "none";
      document.getElementById("house-choice1").style.display = "inline";
      document.getElementById("choice1-1").style.display = "block";
      document.getElementById("choice1-2").style.display = "block";
      document.getElementById("choice1-3").style.display = "block";
      document.getElementById("next").style.visibility = "hidden";
    } else if (document.getElementById("house-choice1").style.display == "inline") {
      document.getElementById("house-choice1").style.display = "none";
      document.getElementById("choice1-1").style.display = "none";
      document.getElementById("choice1-2").style.display = "none";
      document.getElementById("choice1-3").style.display = "none";
      document.getElementById("house2").style.display = "inline";
      document.getElementById("next").style.visibility = "visible";
    } else if (document.getElementById("house2").style.display == "inline") {
      document.getElementById("house2").style.display = "none";
      document.getElementById("house3").style.display = "inline";
      document.getElementById("instr").style.display = "block";
      // document.getElementById("next").setAttribute("disabled, true");
    } else if (document.getElementById("house3").style.display == "inline") {
      document.getElementById("house3").style.display = "none";
      document.getElementById("house4").style.display = "inline";
    } else if (document.getElementById("house4").style.display == "inline") {
      document.getElementById("house4").style.display = "none";
      document.getElementById("house5").style.display = "inline";
    } else if (document.getElementById("house5").style.display == "inline") {
      document.getElementById("house5").style.display = "none";
      document.getElementById("instr").style.display = "none";
      document.getElementById("house6").style.display = "inline";
    } else if (document.getElementById("house6").style.display == "inline") {
      document.getElementById("house6").style.display = "none";
      document.getElementById("house7").style.display = "inline";
    } else if (document.getElementById("house7").style.display == "inline") {
      document.getElementById("next").style.visibility = "hidden";
      document.getElementById("house7").style.display = "none";
      document.getElementById("house-choice2").style.display = "inline";
      document.getElementById("choice2-1").style.display = "block";
      document.getElementById("choice2-2").style.display = "block";
      document.getElementById("choice2-3").style.display = "block";
    } else if (document.getElementById("house-choice2").style.display == "inline") {
      document.getElementById("house-choice2").style.display = "none";
      document.getElementById("choice2-1").style.display = "none";
      document.getElementById("choice2-2").style.display = "none";
      document.getElementById("choice2-3").style.display = "none";
      document.getElementById("house8").style.display = "inline";
      document.getElementById("next").style.visibility = "visible";
    } else if (document.getElementById("house8").style.display == "inline") {
      document.getElementById("house8").style.display = "none";
      document.getElementById("house9").style.display = "inline";
    } else if (document.getElementById("house9").style.display == "inline") {
      document.getElementById("house9").style.display = "none";
      document.getElementById("house10").style.display = "inline";
    } else if (document.getElementById("house10").style.display == "inline") {
      document.getElementById("house10").style.display = "none";
      document.getElementById("next").style.display = "none";
      document.getElementById("house11").style.display = "inline";
    }
  }

  /**
   * Depending on the user's selection, displays a response and allows the user 
   * to loop back to the choice options of the FIRST prompt. 
   * @param obj - the selected response
   */
function choice1Response(obj) {
  if (obj.id == "choice1-1") {
    document.getElementById("house-choice1").style.display = "none";
    document.getElementById("choice1-1").style.display = "none";
    document.getElementById("choice1-2").style.display = "none";
    document.getElementById("choice1-3").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("choice1-1-response").style.display = "inline";
    document.getElementById("nextChoice1").style.display = "inline";
  } else if (obj.id == "choice1-3") {
    document.getElementById("house-choice1").style.display = "none";
    document.getElementById("choice1-1").style.display = "none";
    document.getElementById("choice1-2").style.display = "none";
    document.getElementById("choice1-3").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("choice1-3-response").style.display = "inline";
    document.getElementById("nextChoice1").style.display = "inline";
  } else {
    changeText();
  }
}

/**
 * Hides all main text elements and displays the first prompt and set of user choices.
 */
function backToChoices1() {
  for (const e of document.getElementsByClassName("hiddenText")) {
    e.style.display = "none";
  }
  document.getElementById("nextChoice1").style.display = "none";
  document.getElementById("house-choice1").style.display = "inline";
  document.getElementById("choice1-1").style.display = "block";
  document.getElementById("choice1-2").style.display = "block";
  document.getElementById("choice1-3").style.display = "block";
  document.getElementById("next").style.display = "inline";
}

  /**
   * Depending on the user's selection, displays a response and allows the user 
   * to loop back to the choice options of the SECOND prompt. 
   * @param obj - the selected response
   */
function choice2Response(obj) {
  if (obj.id == "choice2-1") {
    document.getElementById("house-choice2").style.display = "none";
    document.getElementById("choice2-1").style.display = "none";
    document.getElementById("choice2-2").style.display = "none";
    document.getElementById("choice2-3").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("choice2-1-response").style.display = "inline";
    document.getElementById("nextChoice2").style.display = "inline";
  } else if (obj.id == "choice2-2") {
    document.getElementById("house-choice2").style.display = "none";
    document.getElementById("choice2-1").style.display = "none";
    document.getElementById("choice2-2").style.display = "none";
    document.getElementById("choice2-3").style.display = "none";
    document.getElementById("next").style.display = "none";
    document.getElementById("choice2-2-response").style.display = "inline";
    document.getElementById("nextChoice2").style.display = "inline";
  } else {
    changeText();
  }
}

  /**
   * Hides all main text elements and displays the second prompt and set of user choices.
   */
function backToChoices2() {
  for (const e of document.getElementsByClassName("hiddenText")) {
    e.style.display = "none";
  }
  document.getElementById("nextChoice2").style.display = "none";
  document.getElementById("house-choice2").style.display = "inline";
  document.getElementById("choice2-1").style.display = "block";
  document.getElementById("choice2-2").style.display = "block";
  document.getElementById("choice2-3").style.display = "block";
  document.getElementById("next").style.display = "inline";
}

// variables for columns of map areas. 0-0 translates to zerozero, etc
var zerozero = document.getElementsByTagName('0-0')
var zeroone = document.getElementsByTagName('0-1')
var zerotwo = document.getElementsByTagName('0-2')
var zerothree = document.getElementsByTagName('0-3')
var onezero = document.getElementsByTagName('1-0')
var oneone = document.getElementsByTagName('1-1')
var onetwo = document.getElementsByTagName('1-2')
var onethree = document.getElementsByTagName('1-3')
var twozero = document.getElementsByTagName('2-0')
var twoone = document.getElementsByTagName('2-1')
var twotwo = document.getElementsByTagName('2-2')
var twothree = document.getElementsByTagName('2-3')
var threezero = document.getElementsByTagName('3-0')
var threeone = document.getElementsByTagName('3-1')
var threetwo = document.getElementsByTagName('3-2')
var threethree = document.getElementsByTagName('3-3')

// variables for rows of map areas. 00 translates to zz, etc
var zz = document.getElementsByTagName('00')
var zo = document.getElementsByTagName('01')
var zt = document.getElementsByTagName('02')
var oz = document.getElementsByTagName('10')
var oo = document.getElementsByTagName('11')
var ot = document.getElementsByTagName('12')
var tz = document.getElementsByTagName('20')
var to = document.getElementsByTagName('21')
var tt = document.getElementsByTagName('22')

function showTest() {
  document.getElementById("testSelection").visibility = "visible";
}
