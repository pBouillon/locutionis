import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { HeroComponent } from './hero.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Home/Hero',
  component: HeroComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
} as Meta

const Template: Story<HeroComponent> = (args: HeroComponent) => ({
  props: args
})

export const Default = Template.bind({})
