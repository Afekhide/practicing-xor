const xor = document.getElementById("xor");


let move = (ev) => {
    let w = xor.getBoundingClientRect().width;
    let h = xor.getBoundingClientRect().height;

    let x = ev.pageX;
    let y = ev.pageY;

    //console.clear();
    //console.log({x,y})

    xor.style.top = `${(y-h/2)}px`;
    xor.style.left = `${(x-w/2)}px`;
}


window.addEventListener("keypress", ev => {
    console.log(event.ctrlKey);
    if ((ev.key === "Enter")) window.removeEventListener("mousemove", move);
})
window.addEventListener('dblclick', ev => window.addEventListener("mousemove", move));
window.addEventListener('mousemove', move);