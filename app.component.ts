import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isActive: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isActive = false;
    }, 2000);
  }

  public toggleActive(): void{
    this.isActive = !this.isActive;
  }


}
