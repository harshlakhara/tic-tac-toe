import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { PlayerService } from './player.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), PlayerService, provideAnimations()],
};
