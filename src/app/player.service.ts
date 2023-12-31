import { Injectable } from '@angular/core';
import { Player } from './player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  player1: Player = new Player(0, '');
  player2: Player = new Player(0, '');
  constructor() {}
}
