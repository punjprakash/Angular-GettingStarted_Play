import { Component } from "@angular/core";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'pm-root',
    template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'></a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/about'>About</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
    standalone: true,
    styleUrls: ['./app.component.css'],
    imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle = 'Acme Product Management';
}
