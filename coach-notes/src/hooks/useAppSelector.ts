import { useSelector } from 'react-redux';
import { RootState } from '../config/configureStore';

export const useAppSelector = useSelector.withTypes<RootState>();
