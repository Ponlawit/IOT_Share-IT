function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
   }

   var video = document.querySelector("#videoElement");

   if (navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia({ video: true })
       .then(function (stream) {
         video.srcObject = stream;
       })
       .catch(function (err0r) {
         console.log("Something went wrong!");
       });
   }

   var canvas = document.getElementById('canvas');
   var context = canvas.getContext('2d');
   var video = document.getElementById('videoElement');

   function captureFunction(){
    document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
    });
   }