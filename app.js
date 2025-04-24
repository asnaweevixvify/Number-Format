let inputType = document.getElementById('type')
let output = document.getElementById('output')

inputType.addEventListener('input',function(){
    number = inputType.value
    let result = Intl.NumberFormat().format(number)
    // ถ้าต้องการเป็น 50K / 500K ใช้ Intl.NumberFormat("en",{notation:"compact"}).format(number)
    output.innerText = result
})