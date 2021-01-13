function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor digite um número!')        
    } else {
        var n = Number(num.value)
        var i = 1
        tab.innerHTML = ''
        while (i <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            
            tab.appendChild(item)
            i++
        }     
    }
}