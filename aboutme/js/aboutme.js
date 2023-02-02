console.log(10);


var myImage = document.getElementById("myImage");
myImage.addEventListener("click", function() {
  if (myImage.style.width === "500px") {
    myImage.style.width = "300px";
    myImage.style.height = "200px";
  } else {
    myImage.style.width = "500px";
    myImage.style.height = "400px";
  }
});
