let isProfessor = false;

// Function to display the stored username
window.onload = function() {
    const username = localStorage.getItem('username');
    isProfessor = localStorage.getItem('isProfessor');
    
    // Check if username exists and update the text content
    if (username) {
        document.getElementById('usernameDisplay').textContent = "Hola, " + username;
    } else {
        document.getElementById('usernameDisplay').textContent = "Usuario no disponible";
    }

    if (isProfessor === 'true') {
        document.getElementById('roleDisplay').textContent = "Tu eres Profesor";
    } else {
        document.getElementById('roleDisplay').textContent = "Tu eres Estudiante";
    }

    
    const mazePoints = localStorage.getItem('mazePoints') || 0;
    const geographyPoints = localStorage.getItem('geographyPoints') || 0;
    const placeholderPoints1 = localStorage.getItem('placeholderPoints1') || 0;
    const placeholderPoints2 = localStorage.getItem('placeholderPoints2') || 0;

    // Display points on the respective game cards
    document.getElementById('mazePoints').textContent = `Points: ${mazePoints}`;
    document.getElementById('geographyPoints').textContent = `Points: ${geographyPoints}`;
    document.getElementById('placeholderPoints1').textContent = `Points: ${placeholderPoints1}`;
    document.getElementById('placeholderPoints2').textContent = `Points: ${placeholderPoints2}`;

};

function toggleMenu() {
    const menu = document.getElementById('menuContent');
    menu.classList.toggle('expand');
}




function toggleMenu() {
    var menu = document.getElementById("menuContent");
    var studentsLink = document.getElementById("studentsLink");

    if (menu.style.display === "block") {
        menu.style.display = "none";  // Hide the menu when clicked again
    } else {
        // Show the menu
        menu.style.display = "block";

        // Check if the user is a professor and show the "Ver Estudiantes" link
        if (isProfessor === 'true') {
            studentsLink.style.display = "block";
        } else {
            studentsLink.style.display = "none";  // Hide if not a professor
        }
    }
}


window.onclick = function(event) {
    var menu = document.getElementById("menuContent");
    var icon = document.querySelector(".burger-icon");
    
    if (event.target !== menu && event.target !== icon && menu.contains(event.target) && menu.style.display === "block") {
        menu.style.display = "none";
    }
}
