text = "LEARN MORE LEAR MORE";
textCircle = document.querySelector(".learnmore");

for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = text[i]
    textCircle.appendChild(span);
    span.style.transform = `rotate(${18 * i}deg)`
}

