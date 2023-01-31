import { componentWrapperDecorator, type Meta, type Story } from '@storybook/angular'
import { TitleComponent } from './title.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Text/Title',
  component: TitleComponent
} as Meta

const Template: Story<TitleComponent | { ngContent: string }> = (args) => ({
  props: args,
  template: '<app-title>{{ ngContent }}</app-title>'
})
Template.decorators = [componentWrapperDecorator(TitleComponent)]

export const Default = Template.bind({})
Default.args = {
  ngContent: 'Lorem ipsum'
}
