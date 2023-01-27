import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { GlossaryComponent } from './glossary.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Glossary',
  component: GlossaryComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, GlossaryComponent]
    })
  ]
} as Meta

const Template: Story<GlossaryComponent> = (args: GlossaryComponent) => ({
  props: args
})

export const Default = Template.bind({})
