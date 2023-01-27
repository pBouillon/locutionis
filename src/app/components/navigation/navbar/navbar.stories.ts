import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { NavbarComponent } from './navbar.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Navigation/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
} as Meta

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args
})

export const Default = Template.bind({})
