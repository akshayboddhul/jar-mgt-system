let amount = document.getElementById('amt')
const calBtn = document.getElementById('cal')
const clearBtn = document.getElementById('clear')

let total = document.getElementById('total-amt')

let jar1Label = document.getElementById('jar1-amt')
let jar2Label = document.getElementById('jar2-amt')
let jar3Label = document.getElementById('jar3-amt')
let jar4Label = document.getElementById('jar4-amt')
let jar5Label = document.getElementById('jar5-amt')
let jar6Label = document.getElementById('jar6-amt')


function calculateMoney1(amount){
    return  (amount.value * 55 ) / 100
}
function calculateMoney2(amount){
    return  (amount.value * 10 ) / 100
}
function calculateMoney3(amount){
    return  (amount.value * 05 ) / 100
}

amount.addEventListener('keyup', () => {
        const jar1 = calculateMoney1(amount)
        const jar2 = calculateMoney2(amount)
        const jar3 = calculateMoney2(amount)
        const jar4 = calculateMoney2(amount)
        const jar5 = calculateMoney2(amount)
        const jar6 = calculateMoney3(amount)
        // x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        jar1Label.innerHTML = jar1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
        jar2Label.innerHTML = jar2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
        jar3Label.innerHTML = jar3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
        jar4Label.innerHTML = jar4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
        jar5Label.innerHTML = jar5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
        jar6Label.innerHTML = jar6.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
    
        let sum = jar1 + jar2 + jar3 + jar4 + jar5 + jar6
        
        total.innerHTML = (sum.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-" 
})


clearBtn.addEventListener('click', () => {
    jar1Label.innerText = ''
    jar2Label.innerText = ''
    jar3Label.innerText = ''
    jar4Label.innerText = ''
    jar5Label.innerText = ''
    jar6Label.innerText = ''
    total.innerText = ''
    amount.value = ''
})