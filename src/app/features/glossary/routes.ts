import { type Route } from '@angular/router'
import { DefinitionComponent } from './pages/definition/definition.component'
import { GlossaryComponent } from './pages/glossary/glossary.component'

export default [
  {
    path: '',
    component: GlossaryComponent
  },
  {
    path: ':name',
    component: DefinitionComponent
  }
] as Route[]
