import { type Meta, type Story } from '@storybook/angular'
import { UsagesComponent } from './usages.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Definition/Usages',
  component: UsagesComponent
} as Meta

const Template: Story<UsagesComponent> = (args: UsagesComponent) => ({
  props: args
})

export const Default = Template.bind({})
Default.args = {
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
