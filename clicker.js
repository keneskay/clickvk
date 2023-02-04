var clicks = 0;


function pressClick() {
    clicks++;
    document.getElementById('count').innerHTML = "Clicks: " + clicks;
}