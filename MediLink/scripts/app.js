document.getElementById('search-button').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    
    if (location) {
        // Mock data for demonstration
        const facilities = [
            {
                name: 'City Hospital',
                address: 'Warangal',
                bedsAvailable: 5,
                oxygenAvailable: true
            },
            {
                name: 'Healthcare Center',
                address: 'Hanamkonda',
                bedsAvailable: 2,
                oxygenAvailable: false
            },
            {
                name: 'StarX hospital',
                address: 'Warangal',
                bedsAvailable: 5,
                oxygenAvailable: true
            },
            {
                name: 'MGM Hospital',
                address: 'Warangal',
                bedsAvailable: 2,
                oxygenAvailable: false
            }
        ];

        displayFacilities(facilities);
    } else {
        alert('Please enter your location.');
    }
});

function displayFacilities(facilities) {
    const facilitiesList = document.getElementById('facilities-list');
    facilitiesList.innerHTML = '';

    facilities.forEach(facility => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${facility.name}</strong><br>
                        Address: ${facility.address}<br>
                        Beds Available: ${facility.bedsAvailable}<br>
                        Oxygen Available: ${facility.oxygenAvailable ? 'Yes' : 'No'}`;
        facilitiesList.appendChild(li);
    });
}
