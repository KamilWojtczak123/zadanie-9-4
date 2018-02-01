// scripts.js
function drawTree(n) {
    console.log('Ile poziomów ma posiadać choinka' + n);
    var i;
    for(i=0; i<=n; i++) {
        var star = "", j;
        for(j=0; j<i; j++) {
            var star;
            star += '*';
        }
        console.log(star);
    }
}