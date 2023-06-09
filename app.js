const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume input"),
keysHide = document.querySelector(".checkBox input");

let allKeys = [],
audio = new Audio("tunes/a.wav"); //by default, audio src is "a" tune


const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
    //console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element
    clickedKey.classList.add("active"); //adding active class to the clicked key element
    setTimeout(() => { //removing active class after 150 ms from the clicked key element 
        clickedKey.classList.remove("active")
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); //adding data-key value to the allKeys array
    //calling playTune function with passing data-key value as an argument
    key.addEventListener("click", ()=> playTune(key.dataset.key));
});

const hideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value; //passing the range slider value as an audio volume
}

const pressedKey = (e) => {
    //if the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
    console.log(e);
}

keysHide.addEventListener("click", hideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);