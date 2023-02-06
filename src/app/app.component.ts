import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DatalistComponent } from './datalist/datalist.component';
import { DataListStore } from './datalist/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
getCurrent($event: any) {
  console.log($event.detail);
}
 constructor(private injector: Injector, private store: DataListStore) { 

  const converted = 'fieldset { border: 1px solid red; width: 360px; border-radius: 5px; } legend, label{ color: red; font-size: 24px; font-family: sans-serif; } input { font-size: 18px; padding: 5px; height: 35px; width: 350px; border: 1px solid red; outline: none; border-radius: 5px; color: red; /* border-bottom: none; */ } datalist { position: absolute; background-color: white; border: 1px solid red; border-radius: 0 0 5px 5px; border-top: none; font-family: sans-serif; width: 350px; padding: 5px; max-height: 10rem; overflow-y: auto } option { background-color: white; padding: 4px; color: red; margin-bottom: 1px; font-size: 18px; cursor: pointer; } option:hover, .active{ background-color: pink; }';
    
  
    this.store.store.update((state: any) => ({
      ...state,
      sheet: converted,
    }));
    const datalist = createCustomElement(DatalistComponent, { injector: this.injector });
    customElements.define('ng-datalist', datalist);
 }
}
