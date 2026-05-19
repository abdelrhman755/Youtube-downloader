const input = document.getElementById ("video-input");
const button = document.getElementById ("download-btn");
const message = document.getElementById ("message");

button.addEventListener ("click", () => {
    const videoURL = input.value;
    if (videoURL ==="") {
        message.innerHTML = "please enter a youtube video link";
        message.style.color = "red";
        return;
    
    }
    if(!videoURL.includes("youtube.com") && !videoURL.includes("youtu.be")){
        message.innerHTML = "invalid link, please enter a valid youtube video link";
        message.style.color = "red";
        return;
    }
    message.innerHTML = "Cheking Link......";
    message.style.color = "orange";
    setTimeout (() => {
        message.innerHTML = "Link is valid, and ready for download";
        message.style.color = "green";
        input.value = "";
    }, 2000);

    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            button.click();
        }
    });

});