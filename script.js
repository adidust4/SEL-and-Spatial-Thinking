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

AFRAME.registerComponent('click-to-replace', {
    init : function(){
        const modelList = ["#back", "#left", "#right", "#top", "#blank"];
        const instructionText = ["I want this stripey design on the side please.", "We're hoping for this curved window if you could help us find where to put it.", "How do we connect the ceiling line to the side line design?", "Congratulations! Thank you for building my house!"];
        this.el.addEventListener("click", function(e) {
          instructions = document.getElementById("instruction");
          var selected = '#'.concat(e.target.getAttribute('id'));
          console.log("clicked")
          if(selected == (modelList[index].concat("-house"))){
            e.target.removeAttribute('gltf-model');
            e.target.setAttribute('gltf-model', modelList[index]);
            instructions.innerHTML = instructionText[index];
            index = (index + 1) % 5;
            if(index == 5){
                instructions.innerHTML = "Congratulations! Thank you for building my house!";
            }
          }
          else{
              instructions.innerHTML = "Not quite. Try placing it again."
          }
        });

    }
})