import { provideHttpClient } from '@angular/common/http'
import { bootstrapApplication } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { AppComponent } from './app/app.component'
import { routes } from './app/routes'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), provideHttpClient()]
}).catch((err) => {
  console.error(err)
})
