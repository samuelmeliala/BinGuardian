document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    window.location.href = 'login.html'; // replace 'login.html' with the path to your login page
});