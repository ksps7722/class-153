//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});
AFRAME.registerComponent("plane-rotation-reader",{
  schema:{
    speedOfRotation:{type:"number", default:0},
    speedOfAscend:{type:"number", default:0}
  },
  init: function (){
    window.addEventListener("keydown",(e)=>{
      this.data.speedOfRotation=this.el.getAttribute("rotation")
      this.data.speedOfAscend=this.el.getAttribute("position")
      var planeRotation=this.data.speedOfRotation
      var planeposition=this.data.speedOfAscend
      //right arrow
      if(e.key==="ArrowRight"){
        if(planeRotation.x<10){
          planeRotation.x+=0.5
          this.el.setAttribute("rotation",planeRotation)
        }
      }
      //arrow left
      if(e.key==="ArrowLeft"){
        if(planeRotation.x>-10){
          planeRotation.x=-0.5
          this.el.setAttribute("position",planeposition)
        }
      }
      //arrow up
      if(e.key==="ArrowUp"){
        if(planeRotation.z<20){
          planeRotation.z
          this.el.setAttribute("rotation",planeRotation)
        }
        if(planeposition.y<2){
          planeposition.y+=0.1
          this.el.setAttribute("position",planeposition)
        }
      }
      //arrow down
      if(e.key==="ArrowDown"){
        if(planeRotation.z>-20){
          planeRotation.z
          this.el.setAttribute("rotation",planeRotation)
        }
        if(planeposition.y>-2){
          planeposition.y-=0.1
          this.el.setAttribute("position",planeposition)
        }
      }

    })
  }
})




