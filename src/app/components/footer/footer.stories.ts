import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { FooterComponent } from './footer.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
} as Meta

const Template: Story<FooterComponent> = (args: FooterComponent) => ({
  props: args
})

export const Default = Template.bind({})
