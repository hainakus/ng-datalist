import { Injectable } from "@angular/core";
import { createStore, select, withProps } from "@ngneat/elf";


interface UIProps {
    sheet: '' | null;
  }

@Injectable({providedIn: "root"})
export class DataListStore { 
    public store:any;
    selector: any;
    constructor() {
       this.store = createStore({ name: 'UIData' }, withProps<UIProps>({ sheet: null }));
       this.selector = this.store.pipe(select((state: any) => state.sheet));

       this.selector.subscribe((user: any) => { console.log(user); });
    }

}