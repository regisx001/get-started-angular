import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { RandomComponent } from '../../components/random/random.component';

// user-profile.ts
@Component({
  selector: 'about-page',
  imports: [
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    FormsModule,
    RandomComponent,
  ],
  templateUrl: `./home.component.html`,
})
export class HomePage {
  firstname = 'Someone';

  print() {
    console.log('Hello World');
  }
}
