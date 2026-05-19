const input = document.getElementById ("video-input");
const button = document.getElementById ("download-btn");
const message = document.getElementById ("message");
const thumbnail = document.getElementById ("thumbnail");
const downloadLink = document.getElementById ("download-link");

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
        message.innerHTML = "Link is valid, press download to open the download page";
        message.style.color = "green";
        let videoId = "";
        if (videoURL.includes("v=")) {
            videoId = videoURL.split ("v=") [1].split ("&") [0];
        }
        else if (videoURL.includes("youtu.be/")) {
    videoId = videoURL.split("youtu.be/")[1].split("?")[0];
    }
        const thumbnailURL = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;       
        thumbnail.src = thumbnailURL;
        thumbnail.style.display = "block";
        const externalDownloadLink = `https://freightpass.ca/convert/?url=https://www.youtube.com/watch?v=${videoId}`;
        downloadLink.href = externalDownloadLink;
        downloadLink.style.display = "inline-block";
        input.value = "";
    }, 2000);
});

input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            button.click();
        }
    });