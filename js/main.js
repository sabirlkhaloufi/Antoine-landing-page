text = "LEARN MORE LEAR MORE";
textCircle = document.querySelector(".learnmore");

for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = text[i]
    textCircle.appendChild(span);
    span.style.transform = `rotate(${18 * i}deg)`
}



// slider images
images = document.querySelector(".slider");
const slideimg = (nbr,element)=>{
  console.log(nbr);
  document.querySelector('style').remove();
  const styleElement = document.createElement('style');
    const cssRule = `.temoignages .slider img:nth-of-type(${nbr}) {order: 2;}`;
    styleElement.appendChild(document.createTextNode(cssRule));
    document.head.appendChild(styleElement);
    
    document.querySelectorAll(".btns button").forEach(btn => {
      btn.classList.remove("activebtn");
    });

    const images = document.querySelectorAll(".slider img");
    images.forEach(img => {
      img.classList.remove("imgactive");
    });

    images[2].classList.add("imgactive");
    element.classList.add("activebtn")
}















