import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

function createThemeStore() {
  const { subscribe, update } = writable<Theme>('light');

  return {
    subscribe,
    setDark: () => update(() => setTheme('dark')),
    setLight: () => update(() => setTheme('light')),
  };
}

/**
 * Set the theme as a CSS class of the root element
 * @param theme The theme to use
 * @returns The theme that has been set
 */
function setTheme(theme: Theme): Theme {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return theme;
}

export const theme = createThemeStore();
