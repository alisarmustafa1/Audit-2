// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Existing code for registration and login...

    // Handle Privacy Assessment form submission
    var privacyForm = document.getElementById('privacy-assessment');
    if (privacyForm) {
        privacyForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Collect responses and calculate score
            var score = 0;
            var collectsData = document.getElementById('collects-data').value;
            var privacyPolicy = document.getElementById('privacy-policy').value;
            // Add more questions as needed...

            if (collectsData === 'yes') score += 1;
            if (privacyPolicy === 'yes') score += 1;
            // Add more scoring logic as needed...

            // Display the score
            alert('Your Privacy score is: ' + score);
            // You can also display the score on the page or store it for further use
        });
    }

    // Handle Safety Assessment form submission
    var safetyForm = document.getElementById('safety-assessment');
    if (safetyForm) {
        safetyForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Collect responses and calculate score
            var score = 0;
            var physicalHarm = document.getElementById('physical-harm').value;
            var unsafeSituations = document.getElementById('unsafe-situations').value;
            // Add more questions as needed...

            if (physicalHarm === 'yes') score += 1;
            if (unsafeSituations === 'yes') score += 1;
            // Add more scoring logic as needed...

            // Display the score
            alert('Your Safety score is: ' + score);
            // You can also display the score on the page or store it for further use
        });
    }

    // Add similar code for other Areas of Impact...
});
