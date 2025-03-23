// Music
export function musica() {
    let musicaBtn = document.getElementById('musicBtn');
    
    musicBtn.addEventListener('click', function () {
        let musicaAudio = document.getElementById('musicAudio');
    
        if (musicaAudio.paused) {
            musicaAudio.play();
            musicaBtn.src = "./assets/img/soundON.png";
        }
        else {
            musicaAudio.pause();
            musicaBtn.src = "./assets/img/soundOFF.png";
        }
    });
};