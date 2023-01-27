import { NgIf } from '@angular/common'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { DarkModeTogglerIconComponent } from './dark-mode-toggler-icon.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Components/Dark Mode/Icon',
  component: DarkModeTogglerIconComponent,
  decorators: [
    moduleMetadata({
      imports: [NgIf]
    })
  ]
} as Meta

const Template: Story<DarkModeTogglerIconComponent> = (args: DarkModeTogglerIconComponent) => ({
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
