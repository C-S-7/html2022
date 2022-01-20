var isRaining = false
var isSunny = true
var isSnowing = true

if (isRaining) {
    document.write("Ia umbrela!")
    document.write("Si ciubotele!")
} else if (isSunny) {
    document.write("Bucura-te de viata")
} else if (isSnowing) {
    document.write("Du-te la sauna!")
} else {
    document.write("Stai acasa")
}

// // // dacă le pui pe toate adevărate atunci o să arate doar rezultatul pentru prima deoarece
// // cu else în cod restul nu mai contează, pe cînd dacă ar fi for fiecare 
// condiție aparte 3 de if la rînd atunci dacă toate
// // 3 valori ar fi fost true atunci ar fi apărut în document toate 3 propoziții