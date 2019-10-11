import { UrunService } from './../Services/urun.service';
import { Product, ServicekategoriService } from './../servicekategori.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  posts
  products: Product[];
  displayedColumns: string[] = ['kategori_ad', 'kategori_id', 'ust_kategori_id'];


  constructor(private route: ActivatedRoute, private urunService: UrunService) {

  }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get("postData");
    this.urunService.getkategori({ name: name }).subscribe(
      res => {
        this.posts = res;
        console.log(res);

      }
    )



  }

}
