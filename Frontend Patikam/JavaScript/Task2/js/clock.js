// İsim Yazdırma Bölümü
    let isim = prompt("Ad - Soyad Giriniz");
    let isimYazdir = document.querySelector('#myName');

    // içimden geldi renk verdim :)
    isimYazdir.innerHTML = `<b style="color:orangered">${isim} ! </b> `;

// Saat Yazdırma

    function zamanKontrol(i){ // 00 kontrolü
        if(i<10){
            i = "0" + i;
        }
        return i;
    }

    function ZamanYaz(){
        let buGun = new Date ;
        let saat = buGun.getHours();
        let dakika = buGun.getMinutes();
        let saniye = buGun.getSeconds();
        dakika = zamanKontrol(dakika);
        saniye = zamanKontrol(saniye);

        let saatYazdir = document.querySelector('#myClock');
        saatYazdir.innerHTML = `${saat}:${dakika}:${saniye}` 
        saatYazdir.classList.add('saatRengi');
    
       
    }
    setInterval("ZamanYaz()", 1000);

 // Gün Yazdırma
 let buGun = new Date ;
 let gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
]


let gunYaz = document.querySelector('#myDay');
let kacıncıGun = buGun.getDay();
gunYaz.innerHTML = `<b style=" color: orangered"> ${gunler[kacıncıGun]} ! </b> ` + gunYaz.innerHTML ;


// 2. ve Daha kolay yolu ile saat yazdırma

function getSaat() // şuanki saati belirlemek ve String Yazmak için
{
    let anlikSaat = new Date();
    return anlikSaat.toLocaleTimeString();
}

function ikinciSaatYazdir() {
    let saat = document.querySelector("#myClock2");
    saat.classList.add('saatRengi2');
    saat.innerHTML = getSaat();
    
}

ikinciSaatYazdir();
setInterval("ikinciSaatYazdir()", 1000);