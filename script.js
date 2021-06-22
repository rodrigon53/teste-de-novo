const box = document.getElementById('box');
document.addEventListener('keydown', e => moveBoxRight());

let boxPos = 0;

function moveBoxRight() {
   boxPos += 10;
   box.style.left = boxPos + 'px'; 
}