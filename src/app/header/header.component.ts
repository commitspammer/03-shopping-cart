import { Component, Input } from '@angular/core';

@Component({
  selector: 'header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class Header {
  @Input() itemCount = 0
}
