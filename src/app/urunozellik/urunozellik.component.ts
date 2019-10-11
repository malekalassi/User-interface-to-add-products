import { UrunService } from './../Services/urun.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-urunozellik',
  templateUrl: './urunozellik.component.html',
  styleUrls: ['./urunozellik.component.css'],
  host: {
    "(document:click)": "onDocumentClicked($event)"
  }

})
export class UrunozellikComponent implements OnInit {

  constructor(private route: ActivatedRoute, private urunService: UrunService, private router: Router) {


  }



  onDocumentClicked(ev) {

    let className = 'mat-cell cdk-column-urun_id mat-column-urun_id';


    if (ev.target.className == className) {

      let idNumber = +ev.target.textContent;
      console.log(idNumber);
      this.router.navigate(['/urundetail', { idNumber }])
    }
  }

  posts

  displayedColumns: string[] = ['sok_fiyat', 'urun_id', 'bim_fiyat', 'urun_ad', 'a101_fiyat'];
  ngOnInit() {
    let title = this.route.snapshot.paramMap.get("postData")
    this.urunService.GetUrurs({ title: title }).subscribe(
      res => {
        this.posts = res;
        console.log(res);

      }
    );
  }
}

