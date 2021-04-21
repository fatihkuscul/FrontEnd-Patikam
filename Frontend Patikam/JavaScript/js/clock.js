// İsim Yazdırma Bölümü
    let isim = prompt("Ad - Soyad Giriniz");
    let isimYazdir = document.querySelector('#myName');

    // içimden geldi renk verdim :)
    isimYazdir.innerHTML = `<b style="color:orangered">${isim} ! </b> `;

// Saat Yazdırma

    function getSaat() // şuanki saati belirlemek ve String Yazmak için
    {
        let anlikSaat = new Date();
        return anlikSaat.toLocaleTimeString();
    }

    function saatYazdir() {
        let saat = document.querySelector("#myClock");
        saat.classList.add('saatRengi');
        saat.innerHTML = getSaat();
        
    }

    saatYazdir();
    setInterval("saatYazdir()", 1000);

// Gün Yazdırma

    let gunler = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi"
    ]

    let buGun = new Date
    let gunYaz = document.querySelector('#myDay');
    let kacıncıGun = buGun.getDay();
    gunYaz.innerHTML = `<b style=" color: orangered">${gunler[kacıncıGun]} ! </b> ` ;
