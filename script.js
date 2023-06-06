window.onload = function() {
    fetch('https://raw.githubusercontent.com/dopabean26/my_new_project/main/patch_notes.txt')
        .then(response => response.text())
        .then(data => {
            let updates = data.split('\n\n').map(update => {
                let [title, ...notes] = update.split('\n');
                return {title, notes};
            });
            let updatesDiv = document.getElementById('updates');
updates.forEach(update => {
                let updateDiv = document.createElement('div');
                updateDiv.className = 'update';
                let titleDiv = document.createElement('div');
                titleDiv.className = 'title';
                titleDiv.textContent = update.title;
                titleDiv.onclick = function() {
                    this.nextElementSibling.classList.toggle('hidden');
                };
                let notesDiv = document.createElement('div');
                notesDiv.className = 'notes hidden';
                notesDiv.textContent = update.notes.join('\n');
                updateDiv.appendChild(titleDiv);
                updateDiv.appendChild(notesDiv);
                updatesDiv.appendChild(updateDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}