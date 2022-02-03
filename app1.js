let cells = document.querySelectorAll('.row > div');
let player_one = 'X'
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClicked);
    
}

function cellClicked(){
    //console.log(event.target.textContent);
    let id = event.target.textContent;
    id = 'X';
    // if (player_one == id){
    // id = 'O';
    // player_one = id
    // }else {
    //     id = 'X';

    // }
    
}