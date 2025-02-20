document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("play");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progressBar = document.getElementById("progress-bar");
    const albumCover = document.getElementById("album-cover");
    const songTitle = document.getElementById("song-title");
    const artistName = document.getElementById("artist-name");

    // 🎵 Song List
    const songs = [
        { title: "Kannazhaga", artist: "Anirudh", src: "Kannazhaga.mp3", image: "https://sund-images.sunnxt.com/6999/640x360_3_6999_d51f949f-d92d-4184-b580-f856a73762ea.jpg" },
        { title: "Why This Kolaveri Di", artist: "Dhanush", src: "Kolaveri.mp3", image: "https://sund-images.sunnxt.com/6999/640x360_3_6999_d51f949f-d92d-4184-b580-f856a73762ea.jpg" },
        { title: "Vijaykumar Reentry", artist: "Anirudh", src: "vijaykumar-reentry.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHcEPKeovBDJcqIt-zm0tG9vTuA-znWfHEM9fnZ32syTLBAGvHjHm5Udn1Ar6Bl4lefs&usqp=CAU" },
        { title: "Baby in Hospital", artist: "Anirudh", src: "babyhospital-theri.mp3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDSbtv_HgfE7KamQtAIX5TXCnVYmMrBtCaA&s" },
        { title: "Beast Mode", artist: "Anirudh", src: "beastmode.mp3", image: "https://www.sunpictures.in/wp-content/uploads/2021/03/Beast-Vijay.jpg" }
    ];

    let currentSongIndex = 0;

    // 🎶 Load Song
    function loadSong(index) {
        songTitle.innerText = songs[index].title;
        artistName.innerText = songs[index].artist;
        audio.src = songs[index].src;
        albumCover.src = songs[index].image;
        audio.currentTime = 0;
    }

    // ⏯ Play/Pause
    playBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerHTML = "❚❚";
            albumCover.classList.add("playing");
        } else {
            audio.pause();
            playBtn.innerHTML = "▶";
            albumCover.classList.remove("playing");
        }
    });

    // ⏪ Previous Song
    prevBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
        playBtn.innerHTML = "❚❚";
        albumCover.classList.add("playing");
    });

    // ⏩ Next Song
    nextBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
        playBtn.innerHTML = "❚❚";
        albumCover.classList.add("playing");
    });

    // 🎧 Auto Play Next Song
    audio.addEventListener("ended", () => {
        nextBtn.click();
    });

    // 🔄 Update Progress Bar
    audio.addEventListener("timeupdate", () => {
        progressBar.value = (audio.currentTime / audio.duration) * 100;
    });

    // ⏩ Seek Audio
    progressBar.addEventListener("input", () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    // 🔄 Load First Song
    loadSong(currentSongIndex);
});
