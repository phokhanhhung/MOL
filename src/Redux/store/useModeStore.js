import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../reducers/modeReducer';


export const useModeStore = () => {
  const modeState = useSelector(state => state.mode);
  const modeDispatch = useDispatch();
  const modeActions = actions;

  return [modeState, modeDispatch, modeActions];

}