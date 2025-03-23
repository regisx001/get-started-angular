import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// user-profile.ts
@Component({
  selector: 'about-page',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <h1 class="text-7xl font-bold">Home Page</h1>
    <a
      class="mx-1 cursor-pointer"
      routerLink="/about"
      routerLinkActive="active"
      ariaCurrentWhenActive="page"
      >About</a
    >
  `,
})
export class HomePage {
  /* Your component code goes here */
}
