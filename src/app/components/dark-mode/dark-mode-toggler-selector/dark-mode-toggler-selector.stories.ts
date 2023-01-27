import { NgClass } from '@angular/common'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { DarkModeTogglerSelectorComponent } from './dark-mode-toggler-selector.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Dark Mode/Selector',
  component: DarkModeTogglerSelectorComponent,
  decorators: [
    moduleMetadata({
      imports: [NgClass]
    })
  ]
} as Meta

const Template: Story<DarkModeTogglerSelectorComponent> = (args: DarkModeTogglerSelectorComponent) => ({
  props: args
})

export const WithLightModeEnabled = Template.bind({})
WithLightModeEnabled.args = {
  isDarkModeEnabled: false
}

export const WithDarkModeEnabled = Template.bind({})
WithDarkModeEnabled.args = {
  isDarkModeEnabled: true
}
