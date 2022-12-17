const foods = [
    {
        id: 0,
        name: 'همبرگر مخصوص',
        price: 10000,
        src: 'images/hamburger.png',
    },
    {
        id: 1,
        name: 'همبرگر معمولی',
        price: 8000,
        src: 'images/hamburger.png',
    },
    {
        id: 2,
        name: 'همبرگر مخصوص با قارچ و پنیر',
        price: 20000,
        src: 'images/hamburger.png',
    },
    {
        id: 3,
        name: 'همبرگر معمولی با قارچ و پنیر',
        price: 10000,
        src: 'images/hamburger.png',
    },
    {
        id: 4,
        name: 'سیب زمینی سرخ کرده',
        price: 10000,
        src: 'images/french_fries.png',
    },
    {
        id: 5,
        name: 'سیب زمینی سرخ کرده ویژه',
        price: 25000,
        src: 'images/french_fries.png',
    },
    {
        id: 6,
        name: 'نوشابه',
        price: 5000,
        src: 'images/soda.png',
    },
    {
        id: 7,
        name: 'نوشابه رژیمی',
        price: 6000,
        src: 'images/soda.png',
    },
    {
        id: 8,
        name: 'سالاد سزار',
        price: 25000,
        src: 'images/ceasar.png',
    },
    {
        id: 9,
        name: 'سالاد فصل',
        price: 8000,
        src: 'images/salad.png',
    },
];

function renderFood(allFoods) {
    const foods = document.querySelector('.foods');
    allFoods.forEach(food => {
        const html = `<div class="foods__card">
                <div>
                    <img class="foods__img" src=${food.src} alt="foods">
                </div>
                <div class="foods__detail">
                    <p class="foods__detail--name">${food.name}</p>
                    <p class="foods__detail--price">
                        <span id="price">${food.price}</span> تومان
                    </p>
                    <div class="foods__detail--wrapper--counter">
                        <div class="foods__detail--decAndIncBtn">
                            <div class="btn--add" data-fee=${food.price} data-id=${food.id} onclick="countAdd(this)">
                                <i class="bi bi-plus-square-fill"></i>
                            </div>
                            <span class="num" id=count${food.id}>0</span>
                            <div class="btn--delete" data-fee=${food.price} data-id=${food.id} onclick="countDelete(this)">
                                <i class="bi bi-dash-square-fill"></i>
                            </div>
                        </div>
                        <div>
                            <p class="foods__detail--Price">
                                <span id=price${food.id}>0</span> تومان
                            </p>
                        </div>
                    </div>
                </div>
            </div>`;
        foods.insertAdjacentHTML('beforeend', html);
    })
}

renderFood(foods)

function countAdd(el) {
    let count = el.parentElement.children[1].textContent;
    let price = +document.getElementById(`price${el.dataset.id}`).textContent;
    let allPrice = +document.getElementById("all-price").textContent;
    document.getElementById("all-price").textContent = allPrice + +el.dataset.fee
    tax(+document.getElementById("all-price").textContent)
    total()
    price = +price + +el.dataset.fee;
    count++
    el.parentElement.children[1].textContent = count;
    document.getElementById(`price${el.dataset.id}`).textContent = price;
}

function countDelete(el) {
    let count = el.parentElement.children[1].textContent;
    console.log(count)
    let price = document.getElementById(`price${el.dataset.id}`).textContent
    let allPrice = +document.getElementById("all-price").textContent;
    if (allPrice > 0 && count> 0) {
        document.getElementById("all-price").textContent = allPrice - +el.dataset.fee;
        tax(+document.getElementById("all-price").textContent)
        total()
    }
    if (count > 0 || price > 0) {
        price = +price - +el.dataset.fee;
        count--;
    } else {
        count = 0
        price = 0
    }
    el.parentElement.children[1].textContent = count;
    document.getElementById(`price${el.dataset.id}`).textContent = price;
}

function tax(price) {
    document.getElementById("service").textContent=price*5/100
}
function total() {
    const toPay = +document.getElementById("service").textContent + +document.getElementById("all-price").textContent
    document.getElementById("pay").textContent=toPay
}

function openModal() {
    document.getElementById("modal").classList.remove("close")
    document.getElementById("modal").classList.add("show");
    document.querySelector(".modalBg").style.display = "flex"

}
function closeModal() {
    document.getElementById("modal").classList.remove("show")
    document.getElementById("modal").classList.add("close")
    document.querySelector(".modalBg").style.display = "none";
    window.location.reload()
}