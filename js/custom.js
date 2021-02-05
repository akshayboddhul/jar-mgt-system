let amount = document.getElementById('amt')
const calBtn = document.getElementById('cal')

document.getElementById("amt").focus();

let jar1Label = document.getElementById('jar1-amt')
let jar2Label = document.getElementById('jar2-amt')
let jar3Label = document.getElementById('jar3-amt')
let jar4Label = document.getElementById('jar4-amt')
let jar5Label = document.getElementById('jar5-amt')
let jar6Label = document.getElementById('jar6-amt')


function calculateMoney1(amount){
    const val =  (amount.value * 55 ) / 100
    
    return Math.round((val * 100) / 100)
}
function calculateMoney2(amount){
    const val =  (amount.value * 10 ) / 100
    
    return Math.round((val * 100) / 100)
}
function calculateMoney3(amount){
    
    const val =  (amount.value * 05 ) / 100
    
    return Math.round((val * 100) / 100)
}

calBtn.addEventListener('click', () => {
    const jar1 = calculateMoney1(amount)
    const jar2 = calculateMoney2(amount)
    const jar3 = calculateMoney2(amount)
    const jar4 = calculateMoney2(amount)
    const jar5 = calculateMoney2(amount)
    const jar6 = calculateMoney3(amount)
    
    jar1Label.innerHTML = jar1 + "/-"
    jar2Label.innerHTML = jar2 + "/-"
    jar3Label.innerHTML = jar3 + "/-"
    jar4Label.innerHTML = jar4 + "/-"
    jar5Label.innerHTML = jar5 + "/-"
    jar6Label.innerHTML = jar6 + "/-"
})


