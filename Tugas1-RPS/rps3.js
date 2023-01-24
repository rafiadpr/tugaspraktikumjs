function rps(player1, player2){
    if(player1 === player2){
        console.log("Draw")
    }
    else if(player1 == 'rock'){
        if(player2 == 'paper'){
            console.log("Player 2 Won")
        }else{
            console.log("Player 1 Won")
        }
    }
    else if(player1 == 'scissors'){
        if(player2 == 'rock'){
            console.log("Player 2 Won")
        }else{
            console.log("Player 1 Won")
        }
    }
    else if(player1 == 'paper'){
        if(player2 == 'scissors'){
            console.log("Player 2 Won")
        }else{
            console.log("Player 1 Won")
        }
    }
    else{
        console.log("Pilihan Salah")
    }
}

rps("rock", "scissors")