const computerPlay = () => {
    // will randomly return either 'rock', 'paper' or 'scissors
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);

    if (randomNumber === 0) {
        return console.log('Rock');
    } else if (randomNumber === 1) {
        return console.log('Paper');
    } else if (randomNumber === 2) {
        return console.log('Scissors');
    }
}

computerPlay();