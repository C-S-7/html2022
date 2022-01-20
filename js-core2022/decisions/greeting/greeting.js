var date = new Date()
var hour = date.getHours()

var isMorning = hour<12

if (hour < 4) {
    document.write("Noapte buna")
}
else if (isMorning) {
    document.write("Buna dimineata")
} else if (hour == 12) {
    document.write("Pofta buna")
} else if (hour > 12 && hour < 17) {
    document.write("Buna ziua")
} else if (hour < 22) {
    document.write("Buna seara")
} else { 
    document.write("Noapte buna")
}
