let div1=document.createElement('div')
div1.className = "container"
let div2=document.createElement('div')
div2.className = "box"
var btn1=document.createElement('button')
btn1.textContent='previous'
var btn2=document.createElement('button')
btn2.textContent='next'

var img1=document.createElement('img')
img1.src='1000.jpg';
img1.setAttribute('class','img1')

div2.append(btn1)
div2.append(btn2)
div1.append(div2)
div2.append(img1)
document.body.append(div1)



let images=["1000.jpg","1001.jpg","1002.webp",
"1003.jpeg","1004.jpeg","1005.jpeg","1006.webp",
"1007.webp","1008.webp","1009.jpeg","1010.jpeg"];
let index=0;
btn2.addEventListener('click',myFunction)
 function myFunction(){
    index=index >=images.length-1? 0:index+1;
    img1.src=images[index];
}
btn1.addEventListener('click',prev)
function prev(){
    index=index==0?images.length-1:index-1;
    img1.src=images[index];
}






