
import { UrunService } from './../Services/urun.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTabLinkBase } from '@angular/material/tabs/typings/tab-nav-bar';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-urundetail',
  templateUrl: './urundetail.component.html',
  styleUrls: ['./urundetail.component.css']
})
export class UrundetailComponent implements OnInit {



  idNumber
  urunUzun = {}
  tamMarkalar
  stateCtrl = new FormControl();
  // filteredStates: Observable<tamMarkalar>;

  constructor(private route: ActivatedRoute, private router: Router, private urunService: UrunService) {
    // this.filteredStates = this.stateCtrl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(state => state ? this._filterStates(state) : this.states.slice())
    //   );
  }

  async ngOnInit() {

    let idNumber = +this.route.snapshot.paramMap.get('idNumber');
    this.idNumber = idNumber;
    console.log(idNumber);

    this.urunService.getTamMarkalar().subscribe(res => {
      console.log(res);
      this.tamMarkalar = res;

    })

    await this.urunService.getUzunUrun(idNumber).subscribe(res => {
      // let rst = JSON.stringify(res);
      this.urunUzun = JSON.parse(JSON.stringify(res));
      // this.urunUzun = this.urunUzun.reduce(function (acc, cur, i) {
      //   acc[i] = cur;
      //   return acc;
      // }, {});

      this.urunUzun = this.urunUzun[0];
      console.log(this.urunUzun);




    })




  }

  // private _filterStates(value: string): State[] {
  //   const filterValue = value.toLowerCase();

  //   return this.tamMarkalar.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);


}
