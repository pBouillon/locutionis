import { writable } from 'svelte/store';
import { browser } from "$app/env"

type Theme = 'dark' | 'light';

function createThemeStore() {
  const initialTheme = (browser && localStorage.theme) ?? 'light';

  setTheme(initialTheme);
  const { subscribe, update } = writable<Theme>(initialTheme);

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
  if (!browser) {
    return;
  }

  localStorage.theme = theme;

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  return theme;
}

export const theme = createThemeStore();
