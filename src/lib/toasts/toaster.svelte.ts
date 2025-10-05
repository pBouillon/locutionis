export type ToastType = 'success' | 'info' | 'error';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

class ToasterStore {
  #toasts = $state<Toast[]>([]);

  readonly toasts = $derived(this.#toasts);

  readonly dismiss = (id: string): void => {
    this.#toasts = this.#toasts.filter((toast) => toast.id !== id);
  };

  readonly show = (toast: { type: ToastType; message: string }): void => {
    const newToast: Toast = { id: crypto.randomUUID(), ...toast };

    this.#toasts = [...this.#toasts, newToast];

    setTimeout(() => this.dismiss(newToast.id), 3_000);
  };
}

export const toaster = new ToasterStore();
