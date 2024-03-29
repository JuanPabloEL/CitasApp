import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
//  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {
    
  }

  register(): void{
    this.accountService.register(this.model).subscribe({
      next: _ => {
        this.cancel();
      },
      error: error => {
        this.toastr.error(error.error);
        console.log(error);
      }
      
    });
  }

  cancel(): void{
    this.cancelRegister.emit(false);
  }

}
