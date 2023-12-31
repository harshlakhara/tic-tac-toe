import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerService } from './player.service';
import { Player } from './player.model';
import { animate, style, transition, trigger } from '@angular/animations';
import { NumericType } from 'mongodb';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({
          tranform: 'scale(1)',
          opacity: 0,
        }),
        animate(
          '1000ms',
          style({
            tranform: 'scale(0)',
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({
          tranform: 'scale(0)',
        }),
        animate(
          '1000ms',
          style({
            tranform: 'scale(1)',
          })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  playerService: PlayerService = inject(PlayerService);
  id: number = 1;
  player1!: Player;
  player2!: Player;
  seconds: number = 5;

  getRandomSymbol() {
    const arr: ('X' | 'O')[] = ['X', 'O'];
    return arr[Math.floor(Math.random() * 2)];
  }

  addPlayer(inputEle: HTMLInputElement) {
    const player = new Player(this.id, inputEle.value);
    if (this.id == 1) {
      this.playerService.player1 = player;
      this.player1 = player;
      this.player1.symbol = this.getRandomSymbol();
    } else {
      this.playerService.player2 = player;
      this.player2 = player;
      this.player2.symbol = this.player1.symbol == 'O' ? 'X' : 'O';
    }
    this.id++;
    if (this.id == 3) {
      const interval = setInterval(() => {
        this.seconds--;
        if (this.seconds == 0) {
          clearInterval(interval);
          alert('Game starts');
        }
      }, 1000);
    }
  }
}
