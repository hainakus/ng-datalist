import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { DataListStore } from './store';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss'], 
})
export class DatalistComponent implements AfterViewInit {
  styles: any;
  options: any[] = [];
  @ViewChild('element') element!: ElementRef;
  @Output('selected') selected: EventEmitter<any> = new EventEmitter<any>();
  @Input('placeholder') placeholder: string = 'Select...';
  constructor(private store: DataListStore, private renderer: Renderer2) { 


    this.options = ['element', 'optionssssssssssssss (80000 GBPS)', 'провулок Аркадія Артюха, 10, Dobrovelychkivka, Kirovohradska oblast, Ukraine, 27000'];

   }

  ngAfterViewInit(): void {
    this.styles = this.store.store.getValue();
  
    var sheet = document.createElement('style')
    sheet.innerHTML = this.styles.sheet
    this.renderer.appendChild(this.element.nativeElement, sheet);
    const input = document.querySelector('input') as HTMLInputElement;
    const browsers = document.getElementById('browsers') as HTMLDataListElement;
   
    
    if(!input || !browsers ) return;
    const options = browsers.querySelectorAll('option') as any;
    input.onfocus = () => {
      browsers.style.display = "block";
      input.style.borderRadius = "5px 5px 0 0";
    };
    for (let option of options) {
      option.onclick = () => {
        input.value = option.value;
        this.selected.emit(option.value); 
        browsers.style.display = "none";
        input.style.borderRadius = "5px";
      };
    }
    
    input.oninput = function () {
      currentFocus = -1;
      var text = input.value.toUpperCase();
      for (let option of options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
          option.style.display = "block";
        } else {
          option.style.display = "none";
        }
      }
    };
    var currentFocus = -1;
    input.onkeydown = function (e) {
      console.log(options)
   
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(options);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(options);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (options) options[currentFocus].click();
        }
      }
    };
    
    const addActive = (x:any) => {
      if (!x) return;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      x[currentFocus].classList.add("active");
      this.selected.emit(x[currentFocus].value); 
    }
    function removeActive(x:any) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
    }
    
  }

}
