let cart = JSON.parse(localStorage.getItem("cart")) || [];

const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const card = button.parentElement;

        const name = card.querySelector("h3").innerText;
        const price = card.querySelector("p").innerText;
        const image = card.querySelector("img").src;

        cart.push({
            name,
            price,
            image
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart!");
    });
});