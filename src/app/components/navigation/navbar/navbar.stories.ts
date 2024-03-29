import { NgFor } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { DarkModeTogglerIconComponent } from '../../dark-mode'
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component'
import { NavbarComponent } from './navbar.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Navigation/Navbars/Main',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgFor,
        RouterTestingModule,
        NavbarLinkComponent,
        DarkModeTogglerIconComponent
      ]
    })
  ]
} as Meta

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args
})

export const Default = Template.bind({})
Default.args = {
  links: [
    {
      name: 'Home',
      navigateTo: ''
    },
    {
      name: 'GitHub',
      navigateTo: 'https://github.com/pbouillon/locutionis'
    }
  ]
}
