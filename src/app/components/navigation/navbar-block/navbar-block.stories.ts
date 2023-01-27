import { NgFor } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { NavbarLinkComponent } from '../navbar-link/navbar-link.component'
import { NavbarBlockComponent } from './navbar-block.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Navigation/Navbars/Block',
  component: NavbarBlockComponent,
  decorators: [
    moduleMetadata({
      imports: [NgFor, RouterTestingModule, NavbarLinkComponent]
    })
  ]
} as Meta

const Template: Story<NavbarBlockComponent> = (args: NavbarBlockComponent) => ({
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
