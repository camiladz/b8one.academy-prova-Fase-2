let dropdownOne= document.querySelector('.dropdown-menu__one');
let icon = document.querySelector('.dropdown__one');


icon.addEventListener("click", function(){
    if(dropdownOne.style.display === "none"){
        dropdownOne.style.display = "flex";
        icon.src = './assets/images/desktop/dropdown__visible.svg'
    } else {
        dropdownOne.style.display = "none";
        icon.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
});


let dropdownTwo = document.querySelector('.dropdown-menu__two');
let iconTwo = document.querySelector('.dropdown-icon__two');

iconTwo.addEventListener("click", function(){
    if(dropdownTwo.style.display === "none"){
        dropdownTwo.style.display = "flex";
        iconTwo.src = './assets/images/desktop/dropdown__visible.svg'
    } else {
        dropdownTwo.style.display = "none";
        iconTwo.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
})


let dropdownThree = document.querySelector('.dropdown-menu__three');
let iconThree = document.querySelector('.dropdown-icon__three');

iconThree.addEventListener("click", function(){
    if(dropdownThree.style.display === "none"){
        dropdownThree.style.display = "flex";
        iconThree.src = './assets/images/desktop/dropdown__visible.svg'
    } else {
        dropdownThree.style.display = "none";
        iconThree.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
})


let dropdownFour = document.querySelector('.dropdown-menu__four');
let iconFour = document.querySelector('.dropdown-icon__four');

iconFour.addEventListener("click", function(){
    if(dropdownFour.style.display === "none"){
        dropdownFour.style.display = "flex";
        iconFour.src = './assets/images/desktop/dropdown__visible.svg'
    } else {
        dropdownFour.style.display = "none";
        iconFour.src = './assets/images/desktop/dropdown__visibleoff.svg'
    }
})

/* --- grafico --- */ 
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
        
    },
    {
        data: [0, 25, 10, 0, 0, 0, 30, 15, 0, 0, 0, 7, 15, 30],
        backgroundColor: "#F03460",
        label: "Cancelado",
        borderColor: "#F03460",
    },
    {
        data: [0, 0, 20, 24, 26, 30, 60, 25, 15, 20, 25, 45, 73, 100],
        backgroundColor: "#FFBE00",
        label: "Não pago",
        borderColor:  "#FFBE00",
    },
    {
        data: [0, 30, 60, 60, 60, 100, 150, 100, 50, 120, 190, 190, 190, 190],
        backgroundColor: "#2EB042",
        label: "Pago",
        borderColor:  "#2EB042",
    },
]
}

const config = {
    type: 'line',
    data: data,
    options: {
            plugins:{   
               legend: {
                 display: false
                       },
                    }
               }
  };
const myChart = new Chart(ctx, config);

document.getElementById('blue').style.backgroundColor = myChart.data.datasets[0].backgroundColor;
document.getElementById('red').style.backgroundColor = myChart.data.datasets[1].backgroundColor;
document.getElementById('yellow').style.backgroundColor = myChart.data.datasets[2].backgroundColor;
document.getElementById('green').style.backgroundColor = myChart.data.datasets[3].backgroundColor;

function toggleData(value) {
    const visibilityData = myChart.isDatasetVisible(value);
    if (visibilityData  === true ){
        myChart.hide(value);
    }
    if (visibilityData  === false ){
        myChart.show(value);
    }
}