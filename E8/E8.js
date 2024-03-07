document.addEventListener("DOMContentLoaded", function () {
    const factContainer = document.getElementById("fact");
    const getFactBtn = document.getElementById("get-fact-btn");

    function fetchFact() {
        fetch('http://numbersapi.com/random/trivia?json')
            .then(response => response.json())
            .then(data => {
                factContainer.textContent = data.text; // This is the fact text about number
            })
            .catch(error => {
                factContainer.textContent = "Error fetching human body fact. Please try again later.";
            });
    }

    getFactBtn.addEventListener("click", fetchFact);

    fetchFact();
});
