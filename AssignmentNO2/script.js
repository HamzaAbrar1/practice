document.addEventListener('DOMContentLoaded', function() {
    // Place your JavaScript code here
    document.getElementById('myForm').addEventListener('submit', function(event) {
        var txtValue = document.getElementById('txt').value;
        var infoValue = document.getElementById('info').value;
        var emValue = document.getElementById('em').value;

        if (txtValue.trim() === '') {
            alert('Please enter text.');
            event.preventDefault();
            return false;
        }

        if (infoValue.trim() === '') {
            alert('Please provide extra info.');
            event.preventDefault();
            return false;
        }

        if (emValue.trim() === '') {
            alert('Please enter an email.');
            event.preventDefault();
            return false;
        }

        alert(
`
the value of email is ${emValue}
and the name is ${txtValue}
and the extra info is ${infoValue}
`
        );
        // // You can add more complex validation for the email if needed
        // var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(emValue)) {
        //     alert('Please enter a valid email address.');
        //     event.preventDefault();
        //     return false;
        // }

        // Form is valid, allow submission
        return true;
    });
});
