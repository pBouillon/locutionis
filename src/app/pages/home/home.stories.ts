import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { HeroComponent } from './hero/hero.component'
import { HomeComponent } from './home.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, HeroComponent]
    })
  ]
} as Meta

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args
})

export const Default = Template.bind({})
