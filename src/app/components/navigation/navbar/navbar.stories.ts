import { type Story, type Meta } from '@storybook/angular/types-6-0'
import { NavbarComponent } from './navbar.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Navigation/Navbar',
  component: NavbarComponent
} as Meta

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args
})

export const Default = Template.bind({})
