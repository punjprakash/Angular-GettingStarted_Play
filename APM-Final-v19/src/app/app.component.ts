import { Component } from "@angular/core";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";


@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterLinkActive,
      RouterLink,
      RouterOutlet
     ]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pageTitle = 'eCommerce';
}
