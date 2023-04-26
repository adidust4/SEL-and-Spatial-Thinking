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

var index = 0;
var backClicked = false;
var rightClicked = false;
var leftClicked = false;
var topClicked = false;
var blankClicked = false;

AFRAME.registerComponent('click-to-replace', {
    init : function(){
        const modelList = ["#back", "#right", "#left", "#top", "#blank"];
        this.el.addEventListener("click", function(e) {
          var selected = '#'.concat(e.target.getAttribute('id'));
          console.log("clicked")
          if(selected == (modelList[index].concat("-house"))){
            e.target.removeAttribute('gltf-model');
            e.target.setAttribute('gltf-model', modelList[index]);
            index = (index + 1) % 5;
            console.log(index)
            if(index == 1){
              backClicked = true;
              console.log(backClicked)
            } 
            else if (index == 2){
              rightClicked = true;
            }
            else if (index == 3){
              leftClicked = true;
            }
            else if (index == 4){
              topClicked = true;
            }
            else{
              blank = true;
            }
          };

    })}
})


function showHouse() {
  for (const e of document.getElementsByClassName("house")) {
    e.style.visibility="visible";
  }
  document.getElementById("nextChoice1").style.display = "none";
  document.getElementById("nextChoice2").style.display = "none";
  for (const e of document.getElementsByClassName("house-solution")) {
    e.style.visibility="visible";
  }
  for (const e of document.getElementsByClassName("map")) {
    e.style.display="none";
  }
}

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
      document.getElementById("next").style.visibility = "hidden";
      document.getElementById("house1").style.display = "none";
      document.getElementById("house-choice1").style.display = "inline";
      document.getElementById("choice1-1").style.display = "block";
      document.getElementById("choice1-2").style.display = "block";
      document.getElementById("choice1-3").style.display = "block";
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
    } else if (document.getElementById("house3").style.display == "inline"  && (backClicked)) {
      document.getElementById("house3").style.display = "none";
      document.getElementById("house4").style.display = "inline";
    } else if (document.getElementById("house4").style.display == "inline" && (rightClicked)) {
      document.getElementById("house4").style.display = "none";
      document.getElementById("house5").style.display = "inline";
    } else if (document.getElementById("house5").style.display == "inline" && (leftClicked)) {
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