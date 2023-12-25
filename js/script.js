function closePopup() {
    var overlay = document.querySelector('.overlay');
    var popup = document.querySelector('.pop-up-container');

    overlay.classList.toggle('show-popup');
    popup.classList.toggle('show-popup');

    //remove element 
}

let btn = document.querySelector('#closePopup');
btn.addEventListener('click', function() {
    var memeContainer = document.getElementById("memeContainer");
    memeContainer.innerHTML = '';
})

function showPopup() {
    closePopup();
}

function calculate() {
    // Get values from input fields
    let name = document.querySelector('#name').value;
    let crushName = document.querySelector('#crushname').value;
    
    if (name != '' && crushName != '') {
        // Generate a random number between 1 and 100
        let randomNumber = Math.floor(Math.random() * 100) + 1;

        showresult(name, crushName, randomNumber);
        showPopup();
    }else {
        alert('Name or Crushname field is empty!');
    }
}

function showresult(Name, crushname, randomnumber) {
    document.querySelector('.result-per').textContent = randomnumber+"%";
    document.querySelector('#userName').textContent = Name;
    document.querySelector('#crushName').textContent = crushname;
    let randomNumber = randomnumber;
    let memeName = getMeme(randomNumber);



    // Get the memeContainer element
    var memeContainer = document.getElementById("memeContainer");
    // Video element string with autoplay and muted audio
    var videoElementString = '<video src="memes/'+memeName+'.mp4"' + ' controls="" loop autoplay=""></video>';
    // Append the video element string to the memeContainer
    memeContainer.innerHTML = videoElementString;





}

function getMeme(number) {
    let randomNumber = number;

    // Categorize the random number into different ranges using if-else statements
    let videoPath;
    if (randomNumber >= 1 && randomNumber <= 10) {
        videoPath = "laugh";
    } else if (randomNumber > 10 && randomNumber <= 30) {
        videoPath = "dukh";
    } else if (randomNumber > 30 && randomNumber <= 50) {
        videoPath = "amit";
    } else if (randomNumber > 50 && randomNumber <= 80) {
        videoPath = "dil-gardan";
    } else if (randomNumber > 80 && randomNumber <= 90) {
        videoPath = "itni-khushi";
    }
    // Add more conditions for additional ranges as needed
    else {
        videoPath = "masti";
    }

    return videoPath;
}
