function filterInternships() {
        let searchText = document
        .getElementById("searchBox")
        .value.toLowerCase();
        let locationFilter = document.getElementById("filterLocation").value;

        let internships = document.querySelectorAll(".internship-card");

        internships.forEach((card) => {
        let title = card.getAttribute("data-title").toLowerCase();
        let location = card.getAttribute("data-location");

        let matchesSearch = title.includes(searchText);
        let matchesLocation =
            locationFilter === "all" || location === locationFilter;

        if (matchesSearch && matchesLocation) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
        });
    }