var image=document.images;
console.log(image);
// image[0].src=".//imgages/1.jpg";
// image[1].src=".//imgages/2.jpg";

for(i=0;i<=image.length-1;i++){
    image[i].src=`images/${i}.jpg`
    image[i].style.height="180px"
    image[i].style.height="200px"
}
function bigWindow(imagepath){
    document.getElementById("containerBigImage").style.display="flex"
    document.getElementById("image").style.backgroundImage=`url(${imagepath})`
}
function bigWindowClose(){
    document.getElementById("containerBigImage").style.display="none"
}