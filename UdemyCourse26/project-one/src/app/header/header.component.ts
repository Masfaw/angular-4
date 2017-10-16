import { Component, EventEmitter, Output} from '@angular/core';


@Component ({
  selector : 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featureSelected  = new EventEmitter<string>();

  onSelect(feature : string ){

    console.log("On Select from header was triggered");

    this.featureSelected.emit(feature);
  }

}
