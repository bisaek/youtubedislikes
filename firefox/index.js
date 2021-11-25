const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
videoId = urlParams.get('watch')

fetch('https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=AIzaSyArZbYjKtxq-IGULCp3V9ol-Rnu_KgW2hE&part=statistics')
    .then(res => res.json())
    .then(res => {
        document.getElementsByClassName('top-level-buttons')[1].childNodes[1].firstChild.childNodes[1].innerHTML = 
            res.items[0].statistics.dislikeCount
    })