$('#play-disco').click(function () {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'mp3/02.mp3');
    audioElement.play();
});