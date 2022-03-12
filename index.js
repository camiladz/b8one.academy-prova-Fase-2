/* ---- Inserindo dados da API na tabela  ---- */
async function fetchProducts() {

    const response = await fetch("https://test-final.b8one.academy/products/more-sold");

    const responseJson = await response.json();

    return responseJson;
}

function populateProducts(products) {
    const moreSoldListUl = document.querySelector(".insights-product__list");

    const moreSoldHtmlArray = products.map((product, index) => {
        return `
        <li class="insights-product__item insights-product__item--index">
            <div class="product-responsive__one">
                <div class="product-wrapper__01">
                    <span class="insights-product__index">
                        ${index + 1}
                    </span>
                    <img src="${product.image}" alt=""
                        class="insights-product__image" referrerpolicy="no-referrer">
                </div>
                <div class="product-responsive__two">
                    <span class="insights-product__description">
                        ${product.name}
                    </span>
                    <div class="product-responsive__three">
                        <span class="insights-product__sku">
                        ${product.orderId}
                        </span>
                        <span class="insights-product__department">
                        ${product.department}
                        </span>
                        <span class="insights-produtc__price">
                        ${(product.price/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </span>
                    </div>
                </div>
            </div>
        </li>
        `
    });
    const moreSoldHtml = moreSoldHtmlArray.join("");

    moreSoldListUl.insertAdjacentHTML("beforeend", moreSoldHtml);
}

/* ---- Inserindo dados da API no Ranking de Revendedores  ---- */
async function fetchResellers() {
    const response = await fetch("https://test-final.b8one.academy/resellers/ranking");

    const responseJson = await response.json();
    
    return responseJson;

}

function populateResellers(resellers) {
    const rankingListUl = document.querySelector(".position__list");
    
    const rankingHtmlArray = resellers.map((reseller, position) =>{
    
    const isValueNegative = reseller.percentage.split("").find((ele)=> ele === "-")
    
        return `
        <li class="position__item">
                            <span class="position">
                                ${position + 1}º
                            </span>
                            <span class="position__logo">
                                ${(reseller.name).split('').filter(a => a.match(/[A-Z]/)).join('')}
                            </span>
                            <div class="position__text">
                            <span class="position__text--black">
                                ${reseller.name}
                            </span>
                            <div class="position__bottom--block">
                            <span class="position__text--gray">
                                ${reseller.ordersCount} pedidos
                            </span>
                            <span class="position__percentage ${isValueNegative && "position__percentage--negative"}">
                                ${reseller.percentage}
                                ${isValueNegative ? '<img src="./assets/images/desktop/position__arrow--negative.svg" alt="" class="position__arrow">' : '<img src="./assets/images/desktop/position__arrow.svg" alt="" class="position__arrow">'}
                            </span>
                </div>
            </div>
        </li>
        `
    });
    const rankingsHtml = rankingHtmlArray.join("");

    rankingListUl.insertAdjacentHTML("beforeend", rankingsHtml);
}

/* ---- Inserindo dados da API nos cards do Relatório Geral  ---- */

async function fetchSales(){
    const response = await fetch("https://test-final.b8one.academy/sales");
    const responseJson = await response.json();

    return responseJson;
}

async function populateSales() {
    const salesCard = await fetchSales();

    const revenueSpan = document.querySelector(".card__text--revenue");
    revenueSpan.innerHTML = (salesCard.revenues/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const totalSaleSpan = document.querySelector(".card__text--sales");
    totalSaleSpan.innerHTML = (salesCard.totalSales);

    const ticketSpan = document.querySelector(".card__text--ticket");
    ticketSpan.innerHTML = (salesCard.averageTicket/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}

/* ---- Inserindo dados da API no menu ---- */ 
async function fetchUser() {
    const response = await fetch("https://test-final.b8one.academy/user");
    const responseJson = await response.json();

    return responseJson;
}

async function populateUser() {
    const menuUser = await fetchUser();

    const userSpan = document.querySelector(".logo__text");
    userSpan.innerHTML = (menuUser.organization);

    const profileSpan = document.querySelector(".user-actions-profile__name");
    profileSpan.innerHTML = (menuUser.username);

    const profileAvatar = document.querySelector(".user-actions-profile__avatar");
    profileAvatar.src = (menuUser.photo);
    
}

async function main() {

    const data = await fetchProducts();
    const dataResellers = await fetchResellers();
  

    populateProducts(data.products);
    populateResellers(dataResellers.resellers);
    populateSales();
    populateUser();
}

main(); 

/* ---- dropdown menu ---- */

let dropdownOne = document.querySelector('.dropdown-menu__one');
let icon = document.querySelector('.dropdown__one');

let dropdownTwo = document.querySelector('.dropdown-menu__two');
let iconTwo = document.querySelector('.dropdown-icon__two');

let dropdownThree = document.querySelector('.dropdown-menu__three');
let iconThree = document.querySelector('.dropdown-icon__three');

let dropdownFour = document.querySelector('.dropdown-menu__four');
let iconFour = document.querySelector('.dropdown-icon__four');


icon.addEventListener("click", function () {
    console.log(dropdownOne.style.display)
    if (dropdownOne.style.display === "none" || dropdownOne.style.display === "") {
        dropdownOne.style.display = "flex";
        icon.src = './assets/images/desktop/dropdown__visible.svg' 

        dropdownTwo.style.display = "none";
        iconTwo.src = './assets/images/desktop/dropdown__visibleoff.svg'

        dropdownThree.style.display = "none";
        iconThree.src = './assets/images/desktop/dropdown__visibleoff.svg'

        dropdownFour.style.display = "none";
        iconFour.src = './assets/images/desktop/dropdown__visibleoff.svg'

    } else {
        dropdownOne.style.display = "none";
        icon.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
});


iconTwo.addEventListener("click", function () {
    if (dropdownTwo.style.display === "none" || dropdownTwo.style.display === "") {
        dropdownTwo.style.display = "flex";
        iconTwo.src = './assets/images/desktop/dropdown__visible.svg'

        dropdownOne.style.display = "none";
        icon.src = './assets/images/desktop/dropdown__visibleoff.svg'

        dropdownThree.style.display = "none";
        iconThree.src = './assets/images/desktop/dropdown__visibleoff.svg'

        dropdownFour.style.display = "none";
        iconFour.src = './assets/images/desktop/dropdown__visibleoff.svg'

    } else {
        dropdownTwo.style.display = "none";
        iconTwo.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
})

iconThree.addEventListener("click", function () {
    if (dropdownThree.style.display === "none" || dropdownThree.style.display === "") {
        dropdownThree.style.display = "flex";
        iconThree.src = './assets/images/desktop/dropdown__visible.svg'

        dropdownOne.style.display = "none";
        icon.src = './assets/images/desktop/dropdown__visibleoff.svg'

        dropdownTwo.style.display = "none";
        iconTwo.src = './assets/images/desktop/dropdown__visibleoff.svg'

        
        dropdownFour.style.display = "none";
        iconFour.src = './assets/images/desktop/dropdown__visibleoff.svg'

    } else {
        dropdownThree.style.display = "none";
        iconThree.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
})

iconFour.addEventListener("click", function () {
    if (dropdownFour.style.display === "none" || dropdownFour.style.display === "") {
        dropdownFour.style.display = "flex";
        iconFour.src = './assets/images/desktop/dropdown__visible.svg'

        dropdownOne.style.display = "none";
        icon.src = './assets/images/desktop/dropdown__visibleoff.svg'

        dropdownTwo.style.display = "none";
        iconTwo.src = './assets/images/desktop/dropdown__visibleoff.svg'

        dropdownThree.style.display = "none";
        iconThree.src = './assets/images/desktop/dropdown__visibleoff.svg'

    } else {
        dropdownFour.style.display = "none";
        iconFour.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
})


/* ---- tab de mudança de gráfico ---- */

function openTab(evt, tabName, tab) {
    var i, tabcontent, reportlink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    reportlink = document.getElementsByClassName("reportlink");
    for (i = 0; i < reportlink.length; i++) {
        reportlink[i].className = reportlink[i].className.replace(" active", "");
    }
    document.getElementById(tabName, tab).style.display = "block";
    evt.currentTarget.className += " active";
  }


/* ---- gráfico de vendas ---- */
// vendas
const ctx = document.getElementById('myChart');

const labels = [
    "06/10/21", "",
    "07/10/21", "",
    "08/10/21", "",
    "09/10/21", "",
    "10/10/21", "",
    "11/10/21", "",
    "12/10/21", "",
]

const data = {
    labels,
    datasets: [{
        data: [0, 40, 20, 10, 10, 10, 15, 25, 50, 25, 10, 10, 10, 10],
        backgroundColor: "#425DC7",
        label: "Estornado",
        borderColor: '#425DC7',
        pointRadius: 0,
    },
    {
        data: [0, 25, 10, 0, 0, 0, 30, 15, 0, 0, 0, 7, 15, 30],
        backgroundColor: "#F03460",
        label: "Cancelado",
        borderColor: "#F03460",
        pointRadius: 0,
    },
    {
        data: [0, 0, 20, 24, 26, 30, 60, 25, 15, 20, 25, 45, 73, 100],
        backgroundColor: "#FFBE00",
        label: "Não pago",
        borderColor: "#FFBE00",
        pointRadius: 0,
    },
    {
        data: [0, 30, 60, 60, 60, 100, 150, 100, 50, 120, 190, 190, 190, 190],
        backgroundColor: "#2EB042",
        label: "Pago",
        borderColor: "#2EB042",
        pointRadius: 0,
    },
    ]
}

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                }
            },
            y: {
                ticks: {
                    stepSize: 50,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
        },

    }
};
const myChart = new Chart(ctx, config);

document.getElementById('blue').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
document.getElementById('red').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
document.getElementById('yellow').style.backgroundColor = myChart.data.datasets[2].backgroundColor;
document.getElementById('green').style.backgroundColor = myChart.data.datasets[3].backgroundColor;

function toggleData(value) {
    const visibilityData = myChart.isDatasetVisible(value);
    if (visibilityData === true) {
        myChart.hide(value);
    }
    if (visibilityData === false) {
        myChart.show(value);
    }
}

/* ---- gráfico de pedidos ---- */
const ctxTwo = document.getElementById('myChartTwo');

const labelsTwo = [
    "06/10/21", "",
    "07/10/21", "",
    "08/10/21", "",
    "09/10/21", "",
    "10/10/21", "",
    "11/10/21", "",
    "12/10/21", "",
]

const dataTwo = {
    labels,
    datasets: [{
        data: [0, 30, 60, 60, 60, 100, 150, 100, 50, 120, 190, 190, 190, 190],
        backgroundColor: "#425DC7",
        label: "Pago",
        borderColor: "#425DC7",
        pointRadius: 0,
    },
    ]
}

const configTwo = {
    type: 'line',
    data: dataTwo,
    options: {
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                    drawOnChartArea: false,
                }
            },
            y: {
                ticks: {
                    stepSize: 50,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
        },

    }
};
const myChartTwo = new Chart(ctxTwo, configTwo);

document.getElementById('blueTwo').style.backgroundColor = myChartTwo.data.datasets[0].backgroundColor;

function toggleDataTwo(value) {
    const visibilityData = myChart.isDatasetVisible(value);
    if (visibilityData === true) {
        myChartTwo.hide(value);
    }
    if (visibilityData === false) {
        myChartTwo.show(value);
    }
}

/* ---- gráfico de revendedores ---- */
const ctxThree = document.getElementById('myChartThree');
const labelsThree = [
    "06/10/21", "",
    "07/10/21", "",
    "08/10/21", "",
    "09/10/21", "",
    "10/10/21", "",
    "11/10/21", "",
    "12/10/21", "",
]
const dataThree = {
    labels,
    datasets: [{
        data: [0, 40, 20, 10, 10, 10, 20, 30, 50, 25, 10, 10, 10, 10],
        backgroundColor: "#425DC7",
        label: "Total de vendas",
        borderColor: '#425DC7',
        pointRadius: 0,
    },
    {
        data: [0, 30, 60, 60, 60, 100, 150, 100, 50, 120, 190, 190, 190, 190],
        backgroundColor: "#2EB042",
        label: "Pago",
        borderColor:  "#2EB042",
        pointRadius: 0,
    },
    {
        data: [0, 25, 10, 0, 0, 0, 30, 15, 0, 0, 0, 7, 15, 30],
        backgroundColor: "#F03460",
        label: "Cancelado",
        borderColor: "#F03460",
        pointRadius: 0,
    },
]
}
const configThree = {
    type: 'line',
    data: dataThree,
    options: {
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    drawOnChartArea: false,
                    display: true,
                    lineWidth: 0
                }
            },
            y: {
                ticks: {
                    stepSize: 50,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
            plugins:{   
               legend: {
                 display: false
                       },
                    },
                
               }
  };
const myChartThree = new Chart(ctxThree, configThree);

document.getElementById('blueThree').style.backgroundColor = myChartThree.data.datasets[0].backgroundColor;
document.getElementById('greenThree').style.backgroundColor = myChartThree.data.datasets[1].backgroundColor;
document.getElementById('redThree').style.backgroundColor = myChartThree.data.datasets[2].backgroundColor;

function toggleDataThree(value) {
    const visibilityData = myChartThree.isDatasetVisible(value);
    if (visibilityData  === true ){
        myChartThree.hide(value);
    }
    if (visibilityData  === false ){
        myChartThree.show(value);
    }
}


