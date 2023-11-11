// Simulated search function
function search() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value;

    // Simulated search results
    const searchResults = [
        'Herb 1',
        'Herb 2',
        'Herb 3',
        'Disease 1',
        'Disease 2',
    ];

    const searchResultsContainer = document.querySelector('.search-results');
    searchResultsContainer.innerHTML = '';

    if (searchTerm) {
        for (const result of searchResults) {
            if (result.toLowerCase().includes(searchTerm.toLowerCase())) {
                const resultItem = document.createElement('div');
                resultItem.textContent = result;
                searchResultsContainer.appendChild(resultItem);
            }
        }
    }
}
