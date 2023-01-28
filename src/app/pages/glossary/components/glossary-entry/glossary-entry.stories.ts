import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { type FigureOfSpeechPreview } from 'src/app/models'
import { GlossaryEntryComponent } from './glossary-entry-component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Glossary/Entry',
  component: GlossaryEntryComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
} as Meta

const preview: FigureOfSpeechPreview = {
  name: 'Alitération',
  preview: "L'alitération est la répétition d'une ou de plusieurs consonnes ou plus généralement d'un même son c..."
}

const Template: Story<GlossaryEntryComponent> = (
  args: GlossaryEntryComponent
) => ({
  props: args
})

export const Default = Template.bind({})
Default.args = {
  entry: preview
}
