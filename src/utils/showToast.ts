import toast from 'react-hot-toast';

export function showToast(message: string, type: 'success' | 'error' = 'success') {
  toast[type](message);
}
