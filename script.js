
let speech  = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})


let voices = [];

let voiceSelect = document.querySelector("select");


window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]

   voices.forEach((voices, i)=>(voiceSelect.options[i]=
    new Option(voices.name, i)))
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})