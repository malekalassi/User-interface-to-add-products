import { UrunService } from './../Services/urun.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-urunozellik',
  templateUrl: './urunozellik.component.html',
  styleUrls: ['./urunozellik.component.css'],
  // host: {
  //   "(document:click)": "onDocumentClicked($event)"
  // }

})
export class UrunozellikComponent implements OnInit {

  constructor(private route: ActivatedRoute, private urunService: UrunService, private router: Router) {


  }



  onDocumentClicked(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    let idNumber = +target.textContent;
    this.router.navigate(['/urundetail', { idNumber }])

  }

  posts

  displayedColumns: string[] = ['sok_fiyat', 'urun_id', 'bim_fiyat', 'urun_ad', 'a101_fiyat'];
  ngOnInit() {
    let title = this.route.snapshot.paramMap.get("postData")
    this.urunService.GetUrurs({ title: title }).subscribe(
      res => {
        this.posts = res;

      }
    );
  }
}

