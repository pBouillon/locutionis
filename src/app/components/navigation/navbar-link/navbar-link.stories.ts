import { RouterTestingModule } from '@angular/router/testing'
import { componentWrapperDecorator, moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { NavbarLinkComponent } from './navbar-link.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Navigation/Navbar Link',
  component: NavbarLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
} as Meta

const Template: Story<NavbarLinkComponent | { ngContent: string }> = (args) => ({
  props: args,
  template: '<app-navbar-link>{{ ngContent }}</app-navbar-link>'
})
Template.decorators = [componentWrapperDecorator(NavbarLinkComponent)]

export const Default = Template.bind({})
Default.args = {
  ngContent: 'Location',
  navigateTo: '#'
}

export const External = Template.bind({})
External.args = {
  ngContent: 'GitHub',
  navigateTo: 'https://github.com/pbouillon/locutionis'
}
