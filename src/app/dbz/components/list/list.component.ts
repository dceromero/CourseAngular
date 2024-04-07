
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid} from 'uuid'

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  onDeleteEmiter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id : uuid(),
    name: 'Trusks',
    power: 100
  }];

  deleteEmiter(id: string): void {
    this.onDeleteEmiter.emit(id);
  }

}
