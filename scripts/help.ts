var textAssets = null;
var helpOverlay = document.getElementById('helpOverlay')
var helpContent = document.getElementById('helpContent')

fetch('./resources/textAssets.json')
.then(response => {return response.json()})
.then(json => {textAssets = json; console.log(json)})

function showHelp(message:string) {
    helpContent.innerHTML = textAssets[message]
    helpOverlay.style.display = 'block'
    setTimeout(() => {
        helpOverlay.style.transform = 'translateY(0)'
    }, 2)
}

function hideHelp() {
    if (sessionStorage.getItem('phase') == 'intro') {
        introEnter()
    }
    window.scrollTo(0,0)
    helpOverlay.style.transform = 'translateY(110vh)'
    setTimeout(() => {
        helpOverlay.style.display = 'none'
    }, 1510)
}

document.getElementById('exitHelp').addEventListener('click', e => {
    hideHelp()
})