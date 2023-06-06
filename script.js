window.onload = function() {
    fetch('https://www.ea.com/games/apex-legends/news#game-updates')
        .then(response => response.text())
         .then(data => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(data, 'text/html');
            let updates = doc.querySelector('#game-updates');
            document.getElementById('updates').innerHTML = updates.innerHTML;
        })
        .catch(error => console.error('Error:', error));
}