import { themes } from '@storybook/theming'

export const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  docs: {
    themes: themes.dark
  }
};

export default preview;
