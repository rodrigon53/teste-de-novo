const box = document.getElementById('box');
document.addEventListener('keydown', e => moveBoxLeft());

let boxPos = 0;

function moveBoxLeft() {
   boxPos += 10;
   box.style.left = boxPos + 'px'; 
}