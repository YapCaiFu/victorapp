import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from 'redux/store';
import { uiLoadingSelector } from 'redux/ui/selector';

export default function GlobalSpinner() {
    const isLoading = useAppSelector(uiLoadingSelector);

    if (!isLoading) {
        return null;
    }

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 3000 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}