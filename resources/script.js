const playButton = document.getElementById('playButton');
const mainDiv = document.querySelector('.main');
const gameDiv = document.querySelector('.game');
const guessInput = document.getElementById('guessInput');
const submitButton = document.getElementById('submitButton');
const guessesContainer = document.querySelector('.guesses');

let guessCount = 1;
let audioStopTime = 0.2;


playButton.addEventListener('click', () => {
    mainDiv.style.display = 'none';
    gameDiv.style.display = 'block';
    audioPlayer.volume = 0.1;

    fetch('getsongs.php') // Change to the correct path
        .then(response => response.json())
        .then(songs => {
            const currentDate = new Date();
            const selectedSongIndex = currentDate.getDate() % songs.length; // Randomly select a song based on the date
            const selectedSong = songs[selectedSongIndex];

            audioPlayer.src = `resources/songs/${selectedSong}.mp3`;
            todaySong = selectedSong;

            audioPlayer.play(); // Play the selected song immediately
        })
        .catch(error => {
            console.error('Error fetching song titles:', error);
        });
});

guessInput.addEventListener('input', () => {
    const userInput = guessInput.value.trim();
    suggestionsList.innerHTML = ''; // Clear previous suggestions

    if (userInput.length > 0) {
        fetch('getsongs.php') // Change to the correct path
            .then(response => response.json())
            .then(songs => {
                const filteredSongs = songs.filter(song => song.toLowerCase().startsWith(userInput.toLowerCase()));

                filteredSongs.forEach(song => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.textContent = song;
                    suggestionItem.classList.add('suggestion');
                    suggestionItem.addEventListener('click', () => {
                        guessInput.value = song;
                        suggestionsList.innerHTML = ''; // Clear suggestions when suggestion is clicked
                    });

                    suggestionsList.appendChild(suggestionItem);
                });
            })
            .catch(error => {
                console.error('Error fetching song titles:', error);
            });
    }
});

// Handle clicks outside the input and suggestions to clear suggestions
document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-container')) {
        suggestionsList.innerHTML = '';
    }
});
const audioPlayer = document.getElementById('audioPlayer');
const playPauseButton = document.getElementById('playPauseButton');

let isPlaying = false;

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reset audio to start
        playPauseButton.classList.remove('active');
    } else {
        audioPlayer.play();
        playPauseButton.classList.add('active');
        setTimeout(() => {
            audioPlayer.pause();
            audioPlayer.currentTime = 0; // Reset audio to start
            playPauseButton.classList.remove('active');
            isPlaying = false;
        }, audioStopTime * 1000);
    }

    isPlaying = !isPlaying;
});


audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = audioPlayer.currentTime;
    const duration = audioPlayer.duration;
    const progressPercentage = (currentTime / duration) * 100;

    progressFill.style.width = `${progressPercentage}%`;

    if (currentTime >= audioStopTime) {
        audioPlayer.pause();
        playPauseButton.classList.remove('active');
        isPlaying = false;
    }
});

// Update button class when audio finishes playing
audioPlayer.addEventListener('ended', () => {
    playPauseButton.classList.remove('active');
    isPlaying = false;
});

const skipButton = document.getElementById('skipButton'); // Assuming you have an HTML element with id="skipButton"

skipButton.addEventListener('click', () => {
    if (guessCount <= 5) {
        const guessDiv = document.querySelector(`.guess${guessCount}`);
        guessDiv.textContent = '-';
        guessDiv.style.backgroundColor = '#6b1010';
        guessCount++;

        if (guessCount > 5) {
            guessInput.disabled = true;
            submitButton.disabled = true;
            const lastGuessDiv = document.querySelector(`.guess6`)
            lastGuessDiv.textContent = todaySong;
            lastGuessDiv.style.backgroundColor = '#ad6a1c';
            audioStopTime = 20;
            audioPlayer.play();
            playPauseButton.classList.add('active');

        }
        if (guessCount == 1) {
            audioStopTime = 0.1;
        }
        if (guessCount == 2) {
            audioStopTime = 0.5;
        }
        if (guessCount == 3) {
            audioStopTime = 2;
        }
        if (guessCount == 4) {
            audioStopTime = 4;
        }
        if (guessCount == 5) {
            audioStopTime = 8;
        }
    }

});



submitButton.addEventListener('click', () => {
    const userGuess = guessInput.value.trim();
    if (guessCount <= 5) {
        const guessDiv = document.querySelector(`.guess${guessCount}`);
        guessDiv.textContent = userGuess;

        if (userGuess == todaySong) {
            guessInput.disabled = true;
            submitButton.disabled = true;
            const correctGuessDiv = document.querySelector(`.guess${guessCount}`);
            correctGuessDiv.style.backgroundColor = '#185b18';
            guessCount = 300;
            audioStopTime = 20;
            audioPlayer.play();
            playPauseButton.classList.add('active');
            const lastGuessDiv = document.querySelector(`.guess6`);
            lastGuessDiv.style.display = 'none';
        } else {
            const correctGuessDiv = document.querySelector(`.guess${guessCount}`);
            correctGuessDiv.style.backgroundColor = '#6b1010';
        }

        guessCount++;
        guessInput.value = '';

        if (guessCount > 5) {
            guessInput.disabled = true;
            submitButton.disabled = true;
            const lastGuessDiv = document.querySelector(`.guess6`)
            lastGuessDiv.textContent = todaySong;
            lastGuessDiv.style.backgroundColor = '#ad6a1c';
            audioStopTime = 20;
        }

        if (guessCount == 1) {
            audioStopTime = 0.1;
        }
        if (guessCount == 2) {
            audioStopTime = 0.5;
        }
        if (guessCount == 3) {
            audioStopTime = 2;
        }
        if (guessCount == 4) {
            audioStopTime = 4;
        }
        if (guessCount == 5) {
            audioStopTime = 8;
        }

    }
});


