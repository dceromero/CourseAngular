import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 1500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7000
        }
    ];

    addCharacter(character: Character): void {
        this.characters.push(character);
    }

    deleteCharacterById(id: string): void {
        // this.characters.splice(id,1);
        this.characters = this.characters.filter(x => x.id !== id);
    }

}