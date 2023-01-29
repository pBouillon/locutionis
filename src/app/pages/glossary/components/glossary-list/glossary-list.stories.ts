import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { type FigureOfSpeechPreview } from 'src/app/models'
import { GlossaryEntryComponent } from '../glossary-entry/glossary-entry-component'
import { GlossarySectionComponent } from '../glossary-section/glossary-section.component'
import { GlossaryListComponent } from './glossary-list.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Glossary/List',
  component: GlossaryListComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, GlossarySectionComponent, GlossaryEntryComponent]
    })
  ]
} as Meta

const Template: Story<GlossaryListComponent> = (
  args: GlossaryListComponent
) => ({
  props: args
})

const previews: FigureOfSpeechPreview[] = [
  {
    name: 'Alitération',
    preview:
      "L'alitération est la répétition d'une ou de plusieurs consonnes ou plus généralement d'un même son c..."
  },
  {
    name: 'Antanaclase',
    preview:
      "On parle d'antanaclase lorsque l'on emploie deux fois un même mot mais avec un sens différent: on pa..."
  }
]

export const Default = Template.bind({})
Default.args = {
  glossary: new Map<string, FigureOfSpeechPreview[]>([['A', [...previews]]])
}
