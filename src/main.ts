import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { APP_CONFIG } from './app/shared/services/app-config.service';

function configListener(response: any) {
  try {
    const configuration = JSON.parse(response.target.responseText);
    platformBrowserDynamic([{ provide: APP_CONFIG, useValue: configuration }]).bootstrapModule(AppModule)
      .catch(err => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

function configFailed() {
  console.error('Error: retrieving settings.json');
}

const request = new XMLHttpRequest();
request.addEventListener('load', configListener);
request.addEventListener('error', configFailed);
request.open('GET', './assets/settings.json');
request.send();

