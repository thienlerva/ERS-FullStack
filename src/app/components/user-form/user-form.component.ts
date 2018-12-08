import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    this.user = this.userService.getter();
  }

  processForm() {
    if(this.user.id==undefined) {
      this.userService.createUser(this.user).subscribe();
      console.log(this.user);
      this.router.navigate(['/']);
    }
    else {
      this.userService.updateUser(this.user).subscribe();
      console.log(this.user);
      //this.router.navigate(['/']);
    }
  }

}
