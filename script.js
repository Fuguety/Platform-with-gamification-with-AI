let isProfessor = false;

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (password.length < 8) {
        alert('A senha deve ter 8 ou mais caracteres.');
    } else {
        localStorage.setItem('username', user);
        localStorage.setItem('isProfessor', isProfessor ? 'true' : 'false');
        // Redirect to another page
        window.location.href = './Home/home.html';
    }
});


const roleSwitch = document.getElementById('roleSwitch');
const roleLabel = document.getElementById('roleLabel');

roleSwitch.addEventListener('change', function() {
    if (this.checked) {
        roleLabel.textContent = "Soy professor";
        isProfessor = true;
    } else {
        roleLabel.textContent = "Soy Estudiante";
        isProfessor = false;
    }
});

