import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string {
    return 'Hola Mundo'.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Capitan America';
  }

  changeAge(): void {
    this.age = 37;
  }

  reset(): void {
    this.age = 45;
    this.name = 'Ironman';
  }
}
