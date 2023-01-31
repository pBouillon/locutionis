import { type Meta, type Story } from '@storybook/angular'
import { DetailsComponent } from './details.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Definition/Details',
  component: DetailsComponent
} as Meta

const Template: Story<DetailsComponent> = (
  args: DetailsComponent
) => ({
  props: args
})

export const Default = Template.bind({})
Default.args = {
  definition: {
    name: 'Alitération',
    description: "L'alitération est la répétition d'une ou de plusieurs consonnes ou plus généralement d'un même son consonne.",
    purpose: 'Le sens de la répétition du son se trouve dans le contexte dans lequel il est utilisé. Par exemple, pour décrire un éboulement, un son [r] répété rappellera les roulements des rochers qui tombent.',
    sources: [
      {
        displayName: 'Wikipedia',
        url: 'https://fr.wikipedia.org/wiki/Alitération'
      },
      {
        displayName: 'La culture générale',
        url: 'https://www.laculturegenerale.com/alliteration-definition-exemples/'
      }
    ],
    usages: [
      {
        example: "(...) l'onde de choc fractura le fémur d'enceinte et le vent sabla cru le village à travers les jointures béantes du granit. Sous mon casque, le son atroce du roc poncé perce, mes dents vibrent - je plie contre Pietro, des aiguilles de quartz crissent sur son masque de contre.",
        source: 'La horde du contrevent, Alain Damasio'
      },
      {
        example: 'Pour qui sont ces serpents qui sifflent sur vos têtes ?',
        source: 'Racine, Andromaque, acte V, scène 5'
      }
    ]
  }
}
