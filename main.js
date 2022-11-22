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
                            <div class="btn--add" onclick="countPlus(this)">
                                <i class="bi bi-plus-square-fill"></i>
                            </div>
                            <span class="num" id=${food.id}>0</span>
                            <div class="btn--delete" onclick="countMinus(this)">
                                <i class="bi bi-dash-square-fill"></i>
                            </div>
                        </div>
                        <div>
                            <p class="foods__detail--Price">
                                <span id=${food.id}>0</span> تومان
                            </p>
                        </div>
                    </div>
                </div>
            </div>`;
        foods.insertAdjacentHTML('beforeend', html);
    })
}
renderFood(foods)