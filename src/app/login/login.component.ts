import { Router } from '@angular/router';
import { UrunService } from './../Services/urun.service';
import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data
  constructor(private UrunService: UrunService, private router: Router) {

  }

  ngOnInit() {
  }
  onLogin(postData: { jhon: string, wick: string }) {
    console.log(postData)
    this.UrunService.postLogin(postData).subscribe(data => {
      this.data = data;
    },
      err => {
        console.log("yanlis", err);
      },
      () => {
        if (stringify(this.data) == "sonuc=basarili") {
          localStorage.setItem('jhon', postData.jhon);
          localStorage.setItem('wick', postData.wick);
          this.router.navigate(['/home'])


        }
        else {
          alert('password veya kullanci adi yanlis girildi')

        }



      }


    )



  }

}
