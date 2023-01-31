import { type Meta, type Story } from '@storybook/angular'
import { SourcesComponent } from './sources.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Definition/Sources',
  component: SourcesComponent
} as Meta

const Template: Story<SourcesComponent> = (args: SourcesComponent) => ({
  props: args
})

export const Default = Template.bind({})
Default.args = {
  sources: [
    {
      displayName: 'Wikipedia',
      url: 'https://fr.wikipedia.org/wiki/Alitération'
    },
    {
      displayName: 'La culture générale',
      url: 'https://www.laculturegenerale.com/alliteration-definition-exemples/'
    }
  ]
}
