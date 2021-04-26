
// Değişkenler

let input = document.querySelector('#task');
let ekleBtn = document.querySelector('#liveToastBtn');
let btnDeleteAll = document.querySelector('#btnDeleteAll');
let yeniUl = document.querySelector('#list');
let clickLi = document.querySelector('li');
let sayi = document.querySelector('#sayi');
let items;

// Kayıtlı Item yüklenme
loadItem();

// event listener Çağırma
eventListenerListesi();

function eventListenerListesi() {
    // Ekle click olunca function çağırılır
    ekleBtn.addEventListener('click', addNewItem);

    // X 'ya basınca li silinsinmesi için function çağrılır
    yeniUl.addEventListener('click', deleteItem);

    // görev yapıldı kontrolü
    yeniUl.addEventListener('click', check);

    // Delete All 'a basınca tüm liste silinsin
    btnDeleteAll.addEventListener('click', deleteAll);
}

// localStorage'de kayıtlı olanların yüklenmesi
function loadItem(){

    items = getItemsFromLocalStorage(); // function çağrıldı

    items.forEach(function(i){ // İtems dizisindeki değerleri oluşturan döngü
        createItem(i);
    })
    gorevSayisi(); // görev sayısı yazdırıldı
}

// Local Storage 'dan bilgi alma (get)
function getItemsFromLocalStorage(){

    if(localStorage.getItem('items')===null){ // items içi boşsa dizi haline getirelim
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items')); // items içi doluysa Json parsa ile dönüştürelim  
    }
    return items;
}

// Local Storage 'a bilgi girme (set)
function setItemsFromLocalStorage(text){
    items = getItemsFromLocalStorage(); // var olan bilgileri aldık 
    items.push(text); // items dizisine text 'i ekledik
    localStorage.setItem('items',JSON.stringify(items)); // local storage 'a items 'i string yapıp ekledik

}

// Local Storage 'dan silme
function deleteItemFromLocalStorage(text){
    items = getItemsFromLocalStorage();
    items.forEach(function(i,index){
        if(i === text){
            items.splice(index,1); // splice ile silme gerçekleşti
        }
    });
    localStorage.setItem('items',JSON.stringify(items));
}

// Yeni Item ekleme
function addNewItem(e) {
    console.log('ekleme oldu. Girilen değer: ' + input.value);

    if (input.value === '') {
            // sağ köşe uyarısı
            $('#liveToast2').toast('show')
    }else {

        // girilen görev item 'ını oluşturma
        createItem(input.value);

        // sağ köşe uyarısı
        $('#liveToast1').toast('show')

        // Local Storage 'a kayıt etme
        setItemsFromLocalStorage(input.value);

        // işlem sonunda input değerini Temizlememiz lazım
        input.value = '';
    }
   
    e.preventDefault(); // sayfayı sabitlemek için
}

// Yeni Item oluşturma 
function createItem(text){
    // li oluşturma
    let yeniLi = document.createElement('li');
    yeniLi.className = 'nanChecked'
    yeniLi.appendChild(document.createTextNode(text));

    // span oluşturma
    let yeniSpan = document.createElement('span');
    yeniSpan.className = 'delete-item close float-right';
    yeniSpan.innerHTML = '<i class="fas fa-times"></i>'
   

    // yeniLi altına yeniSpan 'yı ekleme
    yeniLi.appendChild(yeniSpan);

    // yeniUl altına yeniLi 'yi ekleme
    yeniUl.appendChild(yeniLi);

    gorevSayisi(); // görev sayısı yazdırıldı
}

// Li silme
function deleteItem(e) {
    if (e.target.className === 'delete-item close float-right') { // tıklanan yerin class 'ı span'nın class 'ı ile aynıysa çalış
        if (confirm('Bir Görev Silinecek. Onaylıyor Musunuz ?')) { // kullanıcıdan onay alıyoruz

            console.log('1 görev silindi ');
            e.target.parentElement.remove();

            gorevSayisi(); // görev sayısı yazdırıldı
            $('#liveToast3').toast('show') //sağ üst uyarı mesajı

            // Local Storage 'dan silme
            deleteItemFromLocalStorage(e.target.parentElement.textContent);

            e.preventDefault(); // sayfayı sabitlemek için
        }

    }else if (e.target.className === 'fas fa-times') { // tıklanan yerin class 'ı X'nın class 'ı ile aynıysa çalış
        if (confirm('Bir Görev Silinecek. Onaylıyor Musunuz ?')) { // kullanıcıdan onay alıyoruz

            console.log('1 görev silindi ');
            e.target.parentElement.parentElement.remove(); // X iconu i içerisinde olduğu için 2 kez parent yazıldı
            
            gorevSayisi(); // görev sayısı yazdırıldı
            $('#liveToast3').toast('show') //sağ üst uyarı mesajı

            // Local Storage 'dan silme
            deleteItemFromLocalStorage(e.target.parentElement.parentElement.textContent); // X iconu i içerisinde olduğu için 2 kez parent yazıldı

            e.preventDefault(); // sayfayı sabitlemek için
        }
    }
}

// Delete All ile tüm listeyi silme
function deleteAll(e) {
    if (confirm('DİKKAT !!! Tüm Liste Silinecek. Emin Misiniz ?')) { // kullanıcıdan onay alıyoruz

        yeniUl.innerHTML='';
        localStorage.clear(); // Local Storage 'in tamamı temizlenir

        $('#liveToast4').toast('show') //sağ üst uyarı mesajı
        
        gorevSayisi(); // görev sayısı yazdırıldı
        console.log('Tüm liste silindi');
        e.preventDefault(); // sayfayı sabitlemek için
    }
}

// task check kontrol
function check(e){

    if(e.target.className === 'nanChecked'){ // bitmemiş görevse
       e.target.classList.add('checked');
       e.target.classList.remove('nanChecked')
    }else if(e.target.className === 'checked'){ //bitmiş görevse
        e.target.classList.add('nanChecked');
        e.target.classList.remove('checked');
    }

}

// görev sayısını belirle
function gorevSayisi(){
    if( document.querySelectorAll("#list li").length == 0 ){
        sayi.innerHTML = "BOŞ";
    } else{
        sayi.innerHTML= `${document.querySelectorAll("#list li").length} Görev`
    }
}

