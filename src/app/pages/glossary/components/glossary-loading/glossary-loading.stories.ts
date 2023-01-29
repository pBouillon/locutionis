import { type Meta, type Story } from '@storybook/angular'
import { GlossaryLoadingComponent } from './glossary-loading.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Glossary/Loading',
  component: GlossaryLoadingComponent
} as Meta

const Template: Story<GlossaryLoadingComponent> = (
  args: GlossaryLoadingComponent
) => ({
  props: args
})

export const Default = Template.bind({})
