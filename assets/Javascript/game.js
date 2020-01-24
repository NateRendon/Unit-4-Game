$ (document).ready(function() {

    let randomNumber = Math.floor(Math.random() * 135 + 15)
    console.log(randomNumber);

    $('#goal').text(randomNumber);

    let num1 = Math.floor(Math.random() * 15)
    let num2 = Math.floor(Math.random() * 15)
    let num3 = Math.floor(Math.random() * 15)
    let num4 = Math.floor(Math.random() * 15)

    let wins = 0;
    let losses = 0;
    let score = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset() {
        const randomNumber = Math.floor(Math.random() * 135 + 15)
        console.log(randomNumber);
        $('#goal').text(randomNumber);
        num1 = Math.floor(Math.random() * 15);
        num2 = Math.floor(Math.random() * 15);
        num3 = Math.floor(Math.random() * 15);
        num4 = Math.floor(Math.random() * 15);
        score = 0;
        $('#playerScore').text(score);
    }

    function winning(){
        alert('..you have won..');
        wins++;
        $("#wins").text(wins);
        reset()
    }

    function loosing(){
        alert('..you have lost..');
        losses++
        $("#losses").text(losses)
        reset()
    }

    $(".red").on('click', function(){
        score = score + num1;
        console.log("player score = " + score);
        $("#playerScore").text(score);

            if (score == randomNumber){
                winning();
            } else if (score > randomNumber){
                loosing();
            }

    });

    $(".blue").on('click', function(){
        score = score + num2;
        console.log("player score = " + score);
        $("#playerScore").text(score);

            if (score == randomNumber){
                winning();
            } else if (score > randomNumber){
                loosing();
            }
    })

    $(".purple").on("click", function(){
        score = score + num3;
        console.log("player score = " + score);
        $("#playerScore").text(score);
            
            if (score == randomNumber){
                winning();
            } else if (score > randomNumber){
                loosing();
            }
    })

    $(".green").on("click", function(){
        score = score + num4;
        console.log("player score = " + score);
        $("#playerScore").text(score);

            if (score == randomNumber){
                winning();
            } else if (score > randomNumber){
                loosing();
            }
    })
})