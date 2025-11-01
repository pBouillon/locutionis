import type { ToastType } from './toast-type';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}
