let jar_arr = ['necesities', 'long-term','play','education','financial','charity']

let jar1Label = document.getElementById('jar1')
let jar2Label = document.getElementById('jar2')
let jar3Label = document.getElementById('jar3')
let jar4Label = document.getElementById('jar4')
let jar5Label = document.getElementById('jar5')
let jar6Label = document.getElementById('jar6')

let amt = document.getElementById('amount')

amt.addEventListener('keyup', () => {
    const jar1 = calculateMoney1(amount)
    const jar2 = calculateMoney2(amount)
    const jar3 = calculateMoney2(amount)
    const jar4 = calculateMoney2(amount)
    const jar5 = calculateMoney2(amount)
    const jar6 = calculateMoney3(amount)

    jar1Label.innerHTML = jar1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
    jar2Label.innerHTML = jar2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
    jar3Label.innerHTML = jar3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
    jar4Label.innerHTML = jar4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
    jar5Label.innerHTML = jar5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
    jar6Label.innerHTML = jar6.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "/-"
})


function calculateMoney1(amount){
    return  (amount.value * 55 ) / 100
}
function calculateMoney2(amount){
    return  (amount.value * 10 ) / 100
}
function calculateMoney3(amount){
    return  (amount.value * 05 ) / 100
}