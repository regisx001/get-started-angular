import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// user-profile.ts
@Component({
  selector: 'about-page',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: `about.component.html`,
})
export class AboutPage {
  /* Your component code goes here */
}
