var robux = 0
var darkmode = false
var theme = document.getElementsByTagName('link')[0];

async function getRobux() {
    robux += 1
    document.getElementById("robuxAmount").innerText = "Robux: "+robux
}


async function toggleTheme() {
    if (darkmode == false) {
        darkmode = true
        theme.setAttribute('href', 'dark.css');
        document.getElementById('darkmode').innerHTML = "darkmode | enabled"
    } else {
        darkmode = false
        theme.setAttribute('href', 'light.css');
        document.getElementById('darkmode').innerHTML = "darkmode | disabled"
    }
}