import { provideHttpClient } from '@angular/common/http'
import { isDevMode } from '@angular/core'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { AppComponent } from './app/app.component'
import { routes } from './app/routes'
import { provideFiguresOfSpeechFeature } from './app/store/figures-of-speech'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode()
    }),
    provideEffects(),
    provideFiguresOfSpeechFeature()
  ]
}).catch((err) => { console.error(err) })
