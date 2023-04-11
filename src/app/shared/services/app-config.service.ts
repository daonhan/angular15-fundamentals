import { Inject, Injectable, InjectionToken } from '@angular/core';
import { AppConfig } from '../models/appconfig.model';
import { Observable, of } from 'rxjs';

export const APP_CONFIG = new InjectionToken<AppConfig>('app-config');

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) { }
  load(): Observable<any> {
    // TODO: loading more data from network
    console.log(this.appConfig);
    return of({ ...this.appConfig });
  }
}
