import { RouterTestingModule } from '@angular/router/testing'
import {
  componentWrapperDecorator,
  moduleMetadata,
  type Meta,
  type Story
} from '@storybook/angular'
import { MainButtonLinkComponent } from './main-button-link.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Navigation/Button Link',
  component: MainButtonLinkComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
} as Meta

const Template: Story<MainButtonLinkComponent | { ngContent: string }> = (
  args
) => ({
  props: args,
  template: '<app-main-button-link>{{ ngContent }}</app-main-button-link>'
})
Template.decorators = [componentWrapperDecorator(MainButtonLinkComponent)]

export const Default = Template.bind({})
Default.args = {
  ngContent: 'Location',
  navigateTo: ['/']
}
