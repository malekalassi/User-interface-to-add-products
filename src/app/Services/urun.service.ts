
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

interface Urun {

  s_f: string,
  b_f: string,
  a_f: string,
  u_dur: string,
  u_ad: string,
  ut_man: string,
  ut_boy: string,
  ut_hac: string,
  ut_gr: string,
  ua_ac: string,
  ka_id: string,
  mar_id: string,
  r_kucuk: string,
  r_orta: string,
  r_buyuk: string,
  jhon: string,
  wick: string
}


@Injectable({
  providedIn: 'root'
})

export class UrunService {
  url = 'http://89.252.178.118/search/urun?baslangic=0&bitis=200&sorgu=';
  urlk = 'http://89.252.178.118/search/kategori?baslangic=0&bitis=200&sorgu=';
  urlm = 'http://89.252.178.118/search/marka?baslangic=0&bitis=200&sorgu=';
  urluzun = 'http://89.252.178.118/uzunurun/';
  urltamkat = 'http://89.252.178.118/kategoriler?baslangic=0&bitis=50000';


  constructor(private http: HttpClient) {

  }

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

    return this.http.get(this.urlk + postData.name, {
      observe: 'events'
    })
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
  geturl(url) {
    return this.http.get(url)

  }



  updateUrun(urunId, urun): Observable<Urun> {
    let body = new FormData();
    body.append('jhon', 'Joele');
    body.append('lastName', 'Smith4');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const putUrl = this.urluzun + urunId;
    return this.http.put<Urun>(putUrl, urun, httpOptions);
  }

  postUrun(urun): Observable<any> {
    let url = 'http://89.252.178.118/uzunurun';

    return this.http.post<any>(url, urun);

  }

  deleteUrun(idNumber): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        "jhon": localStorage.getItem('jhon'),
        "wick": localStorage.getItem('wick')
      }
    }

    return this.http.delete<any>(this.urluzun + idNumber, options)
  }

  postLogin(postData) {
    const urlLogin = 'http://89.252.178.118/shire';
    return this.http.post(urlLogin, postData);

  }


}
