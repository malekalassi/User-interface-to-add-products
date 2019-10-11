import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UrunService {
  url = 'http://89.252.178.118/search/urun?baslangic=0&bitis=200&sorgu=';
  urlk = 'http://89.252.178.118/search/kategori?baslangic=0&bitis=200&sorgu=';
  urlm = 'http://89.252.178.118/search/marka?baslangic=0&bitis=200&sorgu=';
  urluzun = 'http://89.252.178.118/uzunurun/';
  urltamkat = 'http://89.252.178.118/kategoriler?baslangic=0&bitis=50000'

  constructor(private http: HttpClient) { }

  replaceturkish(kelime) {
    let yeni = kelime.replace('ü', '').replace('Ü', '').replace('ö', '').
      replace('Ö', '').replace('ı', '').replace('İ', '').replace('ğ', '').replace('Ğ', '').
      replace('ç', '').replace('Ç', '').replace('ş', '').replace('Ş', '');

    return yeni;
  }


  GetUrurs(postData: { title: string }) {

    console.log(this.url + postData.title);

    return this.http.get(this.url + postData.title)

  }
  getkategori(postData: { name: string }) {
    console.log(postData.name);

    return this.http.get(this.urlk + postData.name)
  }
  getMarka(postData: { marka: string }) {
    return this.http.get(this.urlm + postData.marka)

  }
  getUzunUrun(UrunId) {

    return this.http.get(this.urluzun + UrunId);

  }
  getTamMarkalar() {
    return this.http.get(this.urltamkat);
  }
}
