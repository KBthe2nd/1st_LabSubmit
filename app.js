let cells = document.querySelectorAll('.row > div');

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
	event.target.textContext = 'X';
		
}
//if ( cellClicked ='X'){
//   event.target.textContent = 'O'
//}
//if (cells[0].textContent==='X'||'O' && cells[3].textContent==='X'||'O' && cells[6].textContent==='X'||'O'){
//  console.log('Winner');
//}   else{
//  console.log('Draw');
//}
