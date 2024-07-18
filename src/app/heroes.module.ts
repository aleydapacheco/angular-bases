import { NgModule } from '@angular/core';
import { ListComponent } from './heroes/list/list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { CommonModule } from '@angular/common';

//Estos dos componentes seran visibles entre si unicamente.
//Para poder usar estos dos componenetes se deben exportar 
//hacia fuera de este modulo, asi ellos seran visibles por todo el proyecto
@NgModule({
    exports: [
        HeroComponent,
        ListComponent,
    ],
    declarations: [
        HeroComponent,
        ListComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class HeroesModule{ }
