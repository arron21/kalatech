import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@ui/header/header.component';
import { FooterComponent } from '@ui/footer/footer.component';
import { NavCompactComponent } from "../ui/nav-compact/nav-compact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent, NavCompactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kalatech-client';

  links = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Services',
      link: '/services'
    },
    {
      label: 'Portfolio',
      link: '/portfolio'
    },
    {
      label: 'About',
      link: '/about'
    },
    {
      label: 'Contact',
      link: '/contact'
    }
  ];
}
