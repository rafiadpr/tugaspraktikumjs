let pil1 = "rock"
let pil2 = "paper"
let pil3 = "scissors"

function rps(player1, player2){
    if(player1 === player2){
        console.log("Draw")
    }
    else if(player1 == pil1){
        if(player2 == pil2){
            console.log("Player 2 Won")
        }else{
            console.log("Player 1 Won")
        }
    }
    else if(player1 == pil3){
        if(player2 == pil1){
            console.log("Player 2 Won")
        }else{
            console.log("Player 1 Won")
        }
    }
    else if(player1 == pil2){
        if(player2 == pil3){
            console.log("Player 2 Won")
        }else{
            console.log("Player 1 Won")
        }
    }
    else{
        console.log("Pilihan Salah")
    }
}

    rps(pil1, pil2)