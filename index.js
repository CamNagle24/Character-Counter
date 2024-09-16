const textareaE1 = documnet.getElementById("textarea")
const totalCounterE1 = document.getElementById("total-counter")
textareaE1.addEvenetListener("keyup", ()=>{
    updateCounter()
})

function updateCounter() {
    totalCounterE1.innerText = textareaE1.value.length
}