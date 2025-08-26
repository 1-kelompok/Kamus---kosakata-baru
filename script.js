let words = [];

// Load kata dari file JSON
fetch('words.json')
    .then(response => response.json())
    .then(data => {
        words =
