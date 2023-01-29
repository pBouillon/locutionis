import { RouterTestingModule } from '@angular/router/testing'
import { moduleMetadata, type Meta, type Story } from '@storybook/angular'
import { ErrorType } from 'src/app/models'
import { DetailsErrorComponent } from './details-error.component'

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'Pages/Definition/Error',
  component: DetailsErrorComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule]
    })
  ]
} as Meta

const Template: Story<DetailsErrorComponent> = (
  args: DetailsErrorComponent
) => ({
  props: args
})

export const UnableToConnect = Template.bind({})
UnableToConnect.args = {
  error: {
    type: ErrorType.UnableToConnect,
    message: 'Unable to connect'
  }
}

export const UnknownFigureOfSpeech = Template.bind({})
UnknownFigureOfSpeech.args = {
  error: {
    type: ErrorType.UnknownFigureOfSpeech,
    message: 'Unknown figure of speech'
  }
}

export const UnknownError = Template.bind({})
UnknownError.args = {
  error: {
    type: -1,
    message: 'Unknown error'
  }
}
