import { componentWrapperDecorator, type Meta, type Story } from '@storybook/angular'
import { SubtitleComponent } from './subtitle.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Text/Subtitle',
  component: SubtitleComponent
} as Meta

const Template: Story<SubtitleComponent | { ngContent: string }> = (args) => ({
  props: args,
  template: '<app-subtitle>{{ ngContent }}</app-subtitle>'
})
Template.decorators = [componentWrapperDecorator(SubtitleComponent)]

export const Default = Template.bind({})
Default.args = {
  ngContent: `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in nesciunt
  fugit porro laudantium impedit officia magni eum, asperiores labore minima
  aperiam, quae dignissimos. Quo pariatur vitae esse totam ad.
  `
}
