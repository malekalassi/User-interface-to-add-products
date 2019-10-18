import { UrunService } from './../Services/urun.service';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-aktuel',
  templateUrl: './aktuel.component.html',
  styleUrls: ['./aktuel.component.css']
})
export class AktuelComponent implements OnInit {

  magazalar = new FormControl();
  baslangic = new FormControl();
  bitis = new FormControl();
  durum = new FormControl();
  constructor(private urunService: UrunService) {


  }

  ngOnInit() {
  }

  submit() {
    let postData = {
      "m": this.magazalar.value,
      "bas": this.baslangic.value,
      "bit": this.bitis.value,
      "d": this.durum.value,
      "jhon": localStorage.getItem("jhon"),
      "wick": localStorage.getItem("wick"),
    }
    if (this.magazalar.value === "bim") postData.m = "1";
    else if (this.magazalar.value === "sok") postData.m = "2";
    else if (this.magazalar.value === "a101") postData.m = "3";

    if (this.durum.value === "evet") postData.d = "1";
    else if (this.durum.value === "hayir") postData.d = "2";

    console.log(postData);

    this.urunService.postData(this.urunService.urlStanderd + "aktuel", postData).subscribe(data => console.log(data)
    )




  }




}
