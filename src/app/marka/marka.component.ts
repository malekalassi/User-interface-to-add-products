import { UrunService } from './../Services/urun.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marka',
  templateUrl: './marka.component.html',
  styleUrls: ['./marka.component.css']
})
export class MarkaComponent implements OnInit {
  posts
  displayedColumns: string[] = ['marka_ad', 'marka_id', 'ust_marka_id'];

  constructor(private Router: ActivatedRoute, private urunService: UrunService) { }

  ngOnInit() {
    let marka = this.Router.snapshot.paramMap.get("postData");
    console.log(marka);


    this.urunService.getMarka({ marka: marka }).subscribe(res => {
      console.log(res);
      this.posts = res;

    }

    )

  }

}
