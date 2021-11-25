const queryString = window.location.search
const urlParams = new URLSearchParams(queryString);
videoId = urlParams.get('watch')
console.log('https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=AIzaSyArZbYjKtxq-IGULCp3V9ol-Rnu_KgW2hE&part=statistics')

fetch('https://www.googleapis.com/youtube/v3/videos?id=' + videoId + '&key=AIzaSyArZbYjKtxq-IGULCp3V9ol-Rnu_KgW2hE&part=statistics')
    .then(res => res.json())
    .then(res => {
        document.getElementsByClassName('top-level-buttons')[1].childNodes[1].firstChild.childNodes[1].innerHTML = 
            res.items[0].statistics.dislikeCount
        console.log(res.items[0].statistics.dislikeCount)
    }).catch(function(error) {
        console.log(error);
    });