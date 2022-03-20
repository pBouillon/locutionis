import { writable } from 'svelte/store';
import { browser } from "$app/env"

export type Theme = 'dark' | 'light';

function createThemeStore() {
  const initialTheme = (browser && localStorage.theme) ?? 'light';

  setTheme(initialTheme);
  const { subscribe, update } = writable<Theme>(initialTheme);

  return {
    subscribe,
    set: (theme: Theme) => update(() => setTheme(theme)),
    toggle: () => update((current) => setTheme(current === 'light' ? 'dark' : 'light')),
    update,
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
