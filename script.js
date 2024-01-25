document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector(".sliderWrapper");
    const menuItems = document.querySelectorAll(".menuItem");
    const products = [{
            id: 1,
            title: "Pikachu",
            price: 2500,
            size: [{
                    code: "Regular",
                    img: "images/pikachu-transparent-hd-1.png",
                },
                {
                    code: "Shiny",
                    img: "images/MegaPika.png",
                },
            ],
        },
        {
            id: 2,
            title: "Blastoise",
            price: 4000,
            size: [{
                    code: "Regular",
                    img: "images/009.png",
                },
                {
                    code: "Shiny",
                    img: "https://static.pokemonpets.com/images/monsters-images-300-300/10009-Shiny-Mega-Blastoise.webp",
                },
            ],
        },
        {
            id: 3,
            title: "Charizard",
            price: 4000,
            size: [{
                    code: "red",
                    img: "images/collab_pokemon_catalog_charizard-min.png",
                },
                {
                    code: "Shiny",
                    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f7c594b-4131-4a46-a947-7f51c8aafb29/delpmav-730ef73a-1ee2-42f2-9875-3ef30a41a4c2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdmN2M1OTRiLTQxMzEtNGE0Ni1hOTQ3LTdmNTFjOGFhZmIyOVwvZGVscG1hdi03MzBlZjczYS0xZWUyLTQyZjItOTg3NS0zZWYzMGE0MWE0YzIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nmZEwpVnUDQlQuMB9C-Xs5T-384tcd-XLfW4S2Gy8ak",
                },
            ],
        },
        {
            id: 4,
            title: "Squirtle",
            price: 2000,
            size: [{
                    code: "scarf",
                    img: "images/pokemon-png-19.png",
                },
                {
                    code: "regular",
                    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9883388b-e3a4-4a5a-8953-fc1919dce451/dfrd0ib-0d7c761b-4a44-4f73-8b74-78b5b8ec6909.png/v1/fill/w_858,h_765/shiny_squirtle_dream_world___global_link_v2_by_hf978rh7834hru4r43_dfrd0ib-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY1IiwicGF0aCI6IlwvZlwvOTg4MzM4OGItZTNhNC00YTVhLTg5NTMtZmMxOTE5ZGNlNDUxXC9kZnJkMGliLTBkN2M3NjFiLTRhNDQtNGY3My04Yjc0LTc4YjViOGVjNjkwOS5wbmciLCJ3aWR0aCI6Ijw9ODU4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.i-3Vo1LSpXT6NATgYClI1qr0OnCy9-MSGW_vFwmoZS0",
                },
            ],
        },
        {
            id: 5,
            title: "Gengar",
            price: 99,
            size: [{
                    code: "purple",
                    img: "images/6fccdb916ab1435f32d7b9dd5a6b0e79.png",
                },
                {
                    code: "shinyG",
                    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e020f818-c681-4cc1-a494-d22da722f31e/dfbsa3p-3ebc927c-fde9-4eca-845b-d6aa453f0cf3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2UwMjBmODE4LWM2ODEtNGNjMS1hNDk0LWQyMmRhNzIyZjMxZVwvZGZic2EzcC0zZWJjOTI3Yy1mZGU5LTRlY2EtODQ1Yi1kNmFhNDUzZjBjZjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.og-_nLcdgbV6oiMLiToEDV8Ku_HzSikcFyzufmYuPvU",
                },
            ],
        },
    ];

    let chosenProduct = products[0];

    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductSizes = document.querySelectorAll(".size");

    menuItems.forEach((item, outerIndex) => {
        item.addEventListener("click", () => {
            wrapper.style.transform = `translateX(${-100 * outerIndex}vw)`;

            chosenProduct = products[outerIndex];

            currentProductTitle.textContent = chosenProduct.title;
            currentProductPrice.textContent = "$" + chosenProduct.price;
            currentProductImg.src = chosenProduct.colors[0].img;

            currentProductColors.forEach((color, innerIndex) => {
                color.style.backgroundColor = chosenProduct.colors[innerIndex].code;
            });
        });
    });

    currentProductSizes.forEach((size, index) => {
        size.addEventListener("click", () => {
            currentProductSizes.forEach((size) => {
                size.style.backgroundColor = "white";
                size.style.color = "black";
            });
            size.style.backgroundColor = "black";
            size.style.color = "white";
            currentProductImg.src = chosenProduct.size[index].img;
        });
    });

    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    productButton.addEventListener("click", () => {
        payment.classList.add("show");
    });

    close.addEventListener("click", () => {
        payment.classList.remove("show");
    });
});