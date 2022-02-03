let cells = document.querySelectorAll('.row > div');
let player_one = 'O'
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClicked);
    
}

function cellClicked(){
    event.target.textContent = player_one;
    if (hasPlayerWon(player_one)) {
        document.write(`${player_one} wins!!`);
        return;
    }
     if (player_one === 'O'){
    event.target.textContent = 'X';
     player_one = 'X'
     }else if (player_one === 'X'){
        event.target.textContent = 'O'
         player_one = 'O';
         

     }
    
}

const hasPlayerWon = (player) => {
    //from top left, check across, down, and diagonal
    if (cells[0].textContent === player) {
      if (cells[1].textContent === player_one && cells[2].textContent === player_one) {
        console.log(`${player_one} wins up top`);
        return true;
      }
      if (cells[3].textContent === player_one && cells[6].textContent === player_one) {
        console.log(`${player_one} wins on the left`);
        return true;
      }
      if (cells[4].textContent === player_one && cells[8].textContent === player_one) {
        console.log(`${player_one} wins on the diagonal`);
        return true;
      }
    }
    //from bottom check up and across
    if (cells[8].textContent === player_one) {
      if (cells[2].textContent === player_one && cells[5].textContent === player_one) {
        console.log(`${player_one} wins on the right`);
        return true;
      }
      if (cells[7].textContent === player_one && cells[6].textContent === player_one) {
        console.log(`${player_one} wins on the bottom`);
        return true;
      }
    }
    //from middle check middle vertical and middle horizontal
    if (cells[4].textContent === player_one) {
      if (cells[3].textContent === player_one && cells[5].textContent === player_one) {
        console.log(`${player_one} wins on the middle horizontal`);
        return true;
      }
      if (cells[1].textContent === player_one && cells[7].textContent === player_one) {
        console.log(`${player_one} wins on the middle vertical`);
        return true;
      }
    }
  };

  restartBtn.addEventListener("click", () => {
    cells.forEach((space, index) => {
      cells[index] = null;
    });
    cells.forEach((cell) => {
        cells.innerText = "";
    });
    document.write(`Refresh the page`);
  
    player_one = null;
  });
