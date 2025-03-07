import { Component } from '@angular/core';

@Component({
  selector: 'pm-submitform',
  standalone: true,
  imports: [],
  templateUrl: './submitform.component.html',
  styleUrl: './submitform.component.scss'
})
export class SubmitformComponent {
constructor() { }

showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}
ngOnInit() {
  console.log('SubmitformComponent initialized');
}

}
