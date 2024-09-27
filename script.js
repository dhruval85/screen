function showInfo(type) {
    var infoDisplay = document.getElementById('info-display');
    switch (type) {
        case 'followers':
            infoDisplay.innerHTML = 'List of Followers: <br> - John <br> - Jane <br> - Mike';
            break;
        case 'following':
            infoDisplay.innerHTML = 'List of Following: <br> - Sarah <br> - Dave <br> - Alex';
            break;
        case 'trophies':
            infoDisplay.innerHTML = 'Total Trophies: 10';
            break;
        case 'subscribed':
            infoDisplay.innerHTML = 'List of Subscribed Activities: <br> - Bodybuilding <br> - Powerlifting <br> - Calisthenics ';
            break;
         default:
             infoDisplay.innerHTML = '';
    }
    infoDisplay.style.display = "block";
}
