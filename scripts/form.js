const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
// const disable_first_option = document.querySelector("#to-disable-later");
const review_data = document.querySelector("#review-bomb")
// <h3>So far you have made</h3>
const product_selector = document.querySelector("#product-name");
//<option value=""></option>
function build_product_choices(product_array) {
    let data_to_build = ''
    product_array.forEach(element => {
        data_to_build += `<option value="${element.id}">${element.name}</option>`
    });
    return data_to_build
};

if (product_selector != null) {
    product_selector.innerHTML += build_product_choices(products);
    product_selector.addEventListener('click', () => {
        product_selector.options[0].disabled = true;
    })
}
if (review_data != null) {
    let count_reviews = localStorage.getItem("visits");
    if (count_reviews === null) {
        count_reviews = 1
        localStorage.setItem("visits", '1')
    }
    else {
        count_reviews = parseInt(count_reviews);
    }
    if (count_reviews === 1) {
        review_data.innerHTML += `<h2>Thank you for your first review</h2>`;

    }
    else {
        review_data.innerHTML += `<h2>Thank you for your ${count_reviews} total reviews of our products</h2>`;
    };
    count_reviews += 1;
    localStorage.setItem("visits", `${count_reviews}`);
}