import { useSnackbar, VariantType } from 'notistack';

export const useAluToast = () => {
    const { enqueueSnackbar } = useSnackbar();

    const showToast = (message: string, variant: VariantType = 'info') => {
        enqueueSnackbar(message, { variant });
    };

    return {
        showSuccess: (msg: string) => showToast(msg, 'success'),
        showError: (msg: string) => showToast(msg, 'error'),
        showWarning: (msg: string) => showToast(msg, 'warning'),
        showInfo: (msg: string) => showToast(msg, 'info'),
    };
};