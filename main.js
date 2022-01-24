Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5_version is ",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Pptbf2I0K/model.json",modelLoaded);

function modelLoaded(){
    console.log("Your Model is Loaded");
}
