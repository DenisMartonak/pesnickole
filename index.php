<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pesnickole</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <style>
        :root {
            --background: #1c2e4a;
            --background-body: #1c2e4a;
            --backgrond-alt: #1c2e4a;
        }
    </style>
    <link rel="stylesheet" href="resources/stylesheet.css">
    <link rel="stylesheet" href="resources/playButton.css">
</head>
<body>
<h1 class="Name">Pesnickole</h1>
<hr class="hrsize">
<div class="main">
    <h2 class="bigger">Try to <span class="green">guess the song</span> from listening to <br> small parts of it</h2>
    <br>
    <button class="button-40" role="button" id="playButton">Play</button>
</div>
<div class="game">
    <div class="guess1 hrsize guessHeight"></div>
    <div class="guess2 hrsize guessHeight"></div>
    <div class="guess3 hrsize guessHeight"></div>
    <div class="guess4 hrsize guessHeight"></div>
    <div class="guess5 hrsize guessHeight"></div>
    <div class="guess6 hrsize guessHeight"></div>



    <div id="progressBar">
        <div id="progressFill"></div>
    </div>

    <audio id="audioPlayer" controls src="resources/Songs/Vlak.mp3" type="audi/mpeg" hidden="">
    </audio>

    <div class="songPlay">
        <div class="playButton play" id="playPauseButton">
            <div class="front" x="0" y="0" width="200" height="200"></div>
            <div class="playButtonIcon" width="200" height="200">
                <div class="playButtonProportion playButtonAnimation" x="0" y="0" width="200" height="200" fill="#fff"></div>
                <div class="playButtonProportion playButtonAnimation2" x="0" y="0" width="200" height="200" fill="#fff"></div>
            </div>
            <div class="playButtonPuntero"></div>
        </div>
    </div>

    <div class="search-container">
        <input class="InputClass hrsize" type="text" id="guessInput" placeholder="Enter your guess">
        <div id="suggestionsList" class="suggestions-list"></div>
    </div>

    <br>
    <div class="buttonsgroup">
        <button id="skipButton">Skip</button>
        <button id="submitButton">Submit</button>
    </div>

</div>


<script src="resources/script.js"></script>
</body>
</html>


<!--
0.1s
0.5s
2s
4s
8s
15s
end

#4169e1 //Royal Blue
#FFE5B4 //Peach
-->