function contador() {

    var n1 = document.getElementById('inicio')
    var n2 = document.getElementById('fim')
    var n3 = document.getElementById('passo')
    var res = document.getElementById('res')

    

    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0 ) {
        window.alert('[ERRO] Falta dados!')
    } else {
        res.innerHTML = 'Contando: ' 
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(n3.value)
        if (i < f){
            for (var c = i; c <= f; c +=p){
                res.innerHTML += `  ${c} \u{1F449}`
            }
        } else {
            for (var c = i; c >= f; c -= p){   
                res.innerHTML += `  ${c} \u{1F449}`
            }               
        }
        res.innerHTML += ` \u{1F3C1}`
    }  
}