import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// user-profile.ts
@Component({
  selector: 'about-page',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <h1 class="text-7xl font-bold">About Page</h1>
    <a
      class="mx-1 cursor-pointer"
      routerLink="/"
      routerLinkActive="active"
      ariaCurrentWhenActive="page"
      >Home</a
    >
  `,
})
export class AboutPage {
  /* Your component code goes here */
}
