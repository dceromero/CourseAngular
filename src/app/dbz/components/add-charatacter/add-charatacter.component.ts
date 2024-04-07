import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';
import {v4 as uuid} from 'uuid'

@Component({
  selector: 'app-dbz-add-charatacter',
  templateUrl: './add-charatacter.component.html',
  styleUrl: './add-charatacter.component.css'
})
export class AddCharatacterComponent {

  @Output()
  OnNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: '',
    power: 0
  };

  EmitCharacter(): void {

    if(this.character.name.length === 0) return

    this.OnNewCharacter.emit(this.character);

    this.character= {
      id : uuid(),
      name: '',
      power: 0
    };
  }

}
