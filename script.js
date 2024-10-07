function filterBusinesses() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let categories = document.getElementsByClassName('category');

    for (let i = 0; i < categories.length; i++) {
        let category = categories[i];
        let businesses = category.getElementsByClassName('business-list')[0].getElementsByTagName('li');
        
        let categoryFound = false;

        for (let j = 0; j < businesses.length; j++) {
            let businessName = businesses[j].getElementsByTagName('h3')[0].innerText.toLowerCase();
            if (businessName.includes(input)) {
                businesses[j].classList.remove('hidden');
                categoryFound = true;
            } else {
                businesses[j].classList.add('hidden');
            }
        }

        if (!categoryFound) {
            category.style.display = 'none';
        } else {
            category.style.display = 'block';
        }
    }
}