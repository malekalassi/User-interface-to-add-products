import { UrunService } from './../Services/urun.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts



  constructor(private http: HttpClient, private router: Router, private urunService: UrunService) {

  }
  ngOnInit() {
  }
  onCreatePost(postData: { name: string }) {

    let urun = this.urunService.replaceturkish(postData.name);

    this.router.navigate(['/urunozellik', { postData: urun }])


  }
  onCreateKat(postData: { title: string }) {

    let kat = this.urunService.replaceturkish(postData.title);

    this.router.navigate(['/kategori', { postData: kat }])

  }
  onCreateMarka(postData: { marka: string }) {
    console.log(postData.marka);
    let mark = this.urunService.replaceturkish(postData.marka);

    this.router.navigate(['/marka', { postData: mark }])

  }


}
