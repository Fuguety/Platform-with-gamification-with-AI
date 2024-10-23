function showGame(game) {
    var map = document.getElementById('map');
    var geography = document.getElementById('geography');
    var buttons = document.getElementsByClassName('tab-btn');

    if (game === 'map') {
        map.style.display = 'block';
        geography.style.display = 'none';
    } else if (game === 'geography') {
        geography.style.display = 'block';
        map.style.display = 'none';
    }

    // Set active tab button
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    document.querySelector(`button[onclick="showGame('${game}')"]`).classList.add('active');
}
