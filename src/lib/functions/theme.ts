import { writable } from 'svelte/store';

type Theme = 'dark' | 'light';

function createThemeStore() {
  const { subscribe, update } = writable<Theme>('light');

  return {
    subscribe,
    setDark: () => update(() => 'dark'),
    setLight: () => update(() => 'light'),
  };
}

export const theme = createThemeStore();
