function formularz() {
    let imie = document.getElementById("imie");
    let nazwisko = document.getElementById("nazwisko");
    let email = document.getElementById("email").value.toLowerCase();
    let telefon = document.getElementById("telefon");
    let haslo = document.getElementById("haslo");
    let zgloszenie = document.getElementById("zgloszenie");
    let wynik = document.getElementById("wynik");
wynik.innerHTML = imie.value + " " + nazwisko.value + "<br/>" + email + "<br/>" + telefon.value + "<br/>" + "Zgloszenie:" + " " + zgloszenie.value
}