import { type Meta, type Story } from '@storybook/angular'
import { QuoteComponent } from './quote.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Definition/Quote',
  component: QuoteComponent
} as Meta

const Template: Story<QuoteComponent> = (
  args: QuoteComponent
) => ({
  props: args
})

export const WithSource = Template.bind({})
WithSource.args = {
  text: "Vous n'êtes point gentilhomme, vous n'aurez pas ma fille.",
  source: 'Molière, Le Bourgeois Gentilhomme, Scène XII'
}

export const WithoutSource = Template.bind({})
WithoutSource.args = {
  text: 'Votre prudence ou plutôt votre lâcheté nous ont perdu.'
}
