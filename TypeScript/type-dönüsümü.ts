//TÜR DÖNÜŞÜMÜ

let message;  //TANIMLAMADA KOYMADIĞIMIZ İÇİN ANY OLARAK OLUŞTURULDU
message='hello World';
let count= (<string>message).length;   // BU ŞEKİLDE ÇEVİRME İŞLEMİ YAPABİLİRİZ (<STRİNG>)
let lenght= (message as string).length;  //ALTERNATİF YÖNTEM