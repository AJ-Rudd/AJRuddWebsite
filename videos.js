//Show the camera video when the photo is clicked and hide all other videos
$(document).ready(function(){
  $("#cameraPhoto").click(function(){
    console.log("clicked!");
    $("#cameraVideo").toggle();
    $("#storyVideo").hide();
    $("#politicsVideo").hide();
    $("#prototypeVideo").hide();
  });
  //$("cameraPhoto").mouseOver(function(){

  //}
});

//Show the Story video when the photo is clicked and hide all other videos
$(document).ready(function(){
  $("#storyPhoto").click(function(){
    console.log("clicked!");
    $("#storyVideo").toggle();
    $("#cameraVideo").hide();
    $("#politicsVideo").hide();
    $("#prototypeVideo").hide();
  });
});

//Show the Political divide video and hide all other videos
$(document).ready(function(){
  $("#politicsPhoto").click(function(){
    console.log("clicked!");
    $("#politicsVideo").toggle();
    $("#cameraVideo").hide();
    $("#storyVideo").hide();
    $("#prototypeVideo").hide();
  });
});

//Show the Alonzo video and hide all other videos
$(document).ready(function(){
  $("#prototypePhoto").click(function(){
    console.log("clicked!");
    $("#prototypeVideo").toggle();
    $("#cameraVideo").hide();
    $("#storyVideo").hide();
    $("#politicsVideo").hide();
  });
});
