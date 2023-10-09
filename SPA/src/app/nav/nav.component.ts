import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { IUser } from '../_models/iuser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  model: any = {};
//  currentUser$: Observable<IUser | null> = of(null);

  constructor(public accountSerice: AccountService) {}

  ngOnInit(): void{
  //  this.currentUser$ = this.accountSerice.currentUser$;
  }


  login(): void{
    this.accountSerice.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }

  logout() : void {
    this.accountSerice.logout();
  }

}
