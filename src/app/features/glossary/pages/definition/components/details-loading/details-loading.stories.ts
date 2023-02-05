import { type Meta, type Story } from '@storybook/angular'
import { DetailsLoadingComponent } from './details-loading.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Definition/Loading',
  component: DetailsLoadingComponent
} as Meta

const Template: Story<DetailsLoadingComponent> = (
  args: DetailsLoadingComponent
) => ({
  props: args
})

export const Default = Template.bind({})
