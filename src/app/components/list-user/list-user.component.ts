import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe((User)=> {
      this.users = User;
    })
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe();
    this.users.splice(this.users.indexOf(user), 1);
  }

  updateUser(user: User) {
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }

  newUser() {
    let user = new User();
    this.userService.setter(user);
    this.router.navigate(['/op']);
  }

}
