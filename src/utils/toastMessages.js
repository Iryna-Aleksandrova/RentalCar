import toast from 'react-hot-toast';

export const showSuccess = (msg = 'Successfully booked a car') => {
  toast.success(msg);
};

export const showError = (msg = 'Something went wrong') => {
  toast.error(msg);
};
