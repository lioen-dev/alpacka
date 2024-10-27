// Function to search products by title or description
function searchProducts() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let products = document.getElementsByClassName('product-card');
    
    for (let i = 0; i < products.length; i++) {
        let title = products[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        let description = products[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}

// Function to filter products by category
function filterProducts() {
    let filterValue = document.getElementById('category-filter').value;
    let products = document.getElementsByClassName('product-card');

    for (let i = 0; i < products.length; i++) {
        let category = products[i].getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
