export function quePrefieres() {
    const mainDiv = document.getElementById('mainDiv');
    const containerSongs = document.createElement("div");
    mainDiv.appendChild(containerSongs);

    containerSongs.innerHTML = 
    `<div class="flex flex-row mx-4 gap-4 sm:gap-16" data-aos="fade-in" data-aos-duration="1000">
        <div class="w-full max-w-sm bg-stone-900 border-2 border-white rounded-lg shadow-sm hover:scale-105 transition duration-500">
            <button id="firstSong">
                <img class="pt-8 pb-4 px-8 rounded-t-lg hover:scale-105 transition duration-200 cursor-pointer" src="/assets/img/song1.jpg" alt="Blinding Lights by The Weeknd"/>
            </button>
            <div class="px-4 pb-4">
                <h5 class="text-white text-sm sm:text-2xl lg:text-4xl text-center font-bold">Blinding Lights</h5>
                <h5 class="text-yellow-400 text-sm sm:text-2xl lg:text-4xl text-center font-bold">The Weeknd</h5>
                <a href="https://www.youtube.com/watch?v=4NRXx6U8ABQ&ab_channel=TheWeekndVEVO" target="_blank">
                    <h6 class="mt-2 text-blue-200 text-xs sm:text-sm text-center underline font-bold">ver en youtube</h6>
                </a>
            </div>
        </div>

        <div class="w-full max-w-sm bg-stone-900 border-2 border-white rounded-lg shadow-sm hover:scale-105 transition duration-500">
            <button id="secondSong">
                <img class="pt-8 pb-4 px-8 rounded-t-lg hover:scale-105 transition duration-200 cursor-pointer" src="/assets/img/song2.jpg" alt="Shape of You by Ed Sheeran"/>
            </button>
            <div class="px-4 pb-4">
                <h5 class="text-white text-sm sm:text-2xl lg:text-4xl text-center font-bold">Shape of You</h5>
                <h5 class="text-yellow-400 text-sm sm:text-2xl lg:text-4xl text-center font-bold">Ed Sheeran</h5>
                <a href="https://www.youtube.com/watch?v=JGwWNGJdvx8&ab_channel=EdSheeran" target="_blank">
                    <h6 class="mt-2 text-blue-200 text-xs sm:text-sm text-center underline font-bold">ver en youtube</h6>
                </a>
            </div>
        </div>
    </div>`
}