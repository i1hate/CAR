AFRAME.registerComponent('car-model', {
    schema: {
      modelRef: {type: "string", default: "../asessts/old_rusty_car/scene.gltf"},
      clickCounter: {type: "number", default: 0}
    },
    init: function () {
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = {x:0, y:15, z:80};
        const rotation = {x:0, y:-90, z:0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
      },
    update: function(){
      window.addEventListener("click", (e)=>{
        this.data.clickCounter = this.data.clickCounter + 1;
        if(this.data.clickCounter === 1){
          const rotation = {x:0 ,y:30 ,z:0};
          this.el.setAttribute("rotation", rotation);
        }
        else if(this.data.clickCounter === 2){
          const rotation = {x:0 ,y:110 ,z:0};
          this.el.setAttribute("rotation", rotation);
        }
        else if(this.data.clickCounter === 3){
          const rotation = {x:0 ,y:-190 ,z:0};
          this.el.setAttribute("rotation", rotation);
        }
        else if(this.data.clickCounter === 4){
          const rotation = {x:0 ,y:-90 ,z:0};
          this.el.setAttribute("rotation", rotation);
          const cameraEl = document.querySelector("#camera");
          const position = {x:0 ,y: 295, z: 410};
          cameraEl.setAttribute("position", position);
        }
        else{
          const rotation = {x:0, y:-90, z:0};
          this.el.setAttribute("rotation", rotation);
          const cameraEl = document.querySelector("#camera");
          const position = {x:0 ,y: 15, z: 250};
          cameraEl.setAttribute("position", position);
          this.data.clickCounter = 0;
        }
    })
  }
});