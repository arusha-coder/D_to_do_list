$(document).ready(function () {
  var urls = [
    "https://media.istockphoto.com/photos/birch-in-frost-picture-id1301976222?b=1&k=20&m=1301976222&s=170667a&w=0&h=B5WsNAcRCIERJbUv1AqE2aL03fRHqfVaGViFxltCQpE=",
    "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
    "https://static.dw.com/image/51955966_303.jpg",
    "http://www.travelettes.net/wp-content/uploads/2014/03/IMG_3829-Medium-600x400.jpg"
  ];

  var cout = 1;
  $("body").css("background-image", 'url("' + urls[0] + '")');
  setInterval(function () {
    $("body").css("background-image", 'url("' + urls[cout] + '")');
    cout == urls.length - 1 ? (cout = 0) : cout++;
  }, 6000);
});