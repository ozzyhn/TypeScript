//DEĞİŞKEN TÜRLERİ

// let number =5;
// number = 'a';

let a;

a=5;
a='5';
a= true;
//Tipini Any olarak verdiğimiz için hata vermiyor


let b: string ='a';
let c: boolean;
let e: number[]=[1,2,3];
let d: any[] = [1,'e',true];

const krediPayment=0;
const havalePayment=1;
const eftPayment=2;

enum Payment {KrediPayment=0,havale=1,eft=2};
  //Üst kısmın daha modern yazılmış hali ENUM İLE YAZILABİLİR

  let kredi=Payment.KrediPayment;
  let havale= Payment.havale;
  let eft= Payment.eft;