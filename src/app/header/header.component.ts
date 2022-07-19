import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedOut: boolean = false;
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated$) {
      this.loggedOut = false;
    }
  }
}
