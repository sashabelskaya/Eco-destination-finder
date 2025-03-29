document.getElementById('findButton').addEventListener('click', findEcoDestination);

function findEcoDestination() {
    const budget = parseInt(document.getElementById('budget').value);
    const season = document.getElementById('season').value;
    const distance = document.getElementById('distance').value;
    const ecoPreference = document.getElementById('eco-preference').value;
    const activity = document.getElementById('activity').value;

    // Simple destination database (You can expand this with more data)
    const destinations = [
        { name: 'Costa Rica', budget: 1500, season: 'winter', distance: 'international', eco: 'yes', activity: 'nature', description: 'Eco-lodges, nature tours, and sustainable tourism.' },
        { name: 'Iceland', budget: 2500, season: 'summer', distance: 'international', eco: 'yes', activity: 'adventure', description: 'Eco-friendly tours and geothermal spas.' },
        { name: 'Bhutan', budget: 2000, season: 'spring', distance: 'international', eco: 'yes', activity: 'culture', description: 'Sustainable cultural experiences and trekking.' },
        { name: 'New Zealand', budget: 3000, season: 'fall', distance: 'international', eco: 'yes', activity: 'nature', description: 'Hiking, eco-lodges, and wildlife tours.' },
        { name: 'Kyoto, Japan', budget: 1200, season: 'spring', distance: 'international', eco: 'yes', activity: 'culture', description: 'Cultural experiences and sustainable tourism.' },
        { name: 'Swiss Alps', budget: 2500, season: 'winter', distance: 'international', eco: 'yes', activity: 'adventure', description: 'Skiing and eco-lodges in the Swiss Alps.' },
        { name: 'Norway', budget: 2000, season: 'summer', distance: 'international', eco: 'yes', activity: 'nature', description: 'Hiking, fjords, and nature-based activities.' },
        { name: 'National Park', budget: 500, season: 'summer', distance: 'local', eco: 'no', activity: 'nature', description: 'Camping, nature trails, and relaxation.' },
    ];

    // Filter destinations based on user input
    const result = destinations.filter(destination => {
        return (
            destination.budget <= budget &&
            destination.season === season &&
            destination.distance === distance &&
            (ecoPreference === 'no' || destination.eco === 'yes') &&
            destination.activity === activity
        );
    });

    // Display results
    const resultDiv = document.getElementById('result');
    if (result.length > 0) {
        resultDiv.innerHTML = `We recommend: <br><ul>${result.map(r => `<li>${r.name}: ${r.description}</li>`).join('')}</ul>`;
    } else {
        resultDiv.innerHTML = 'Sorry, no destinations match your criteria. Please try again with different settings.';
    }
}
