import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../reducers/tokenReducer';


export const useTokenStore = () => {
  const tokenState = useSelector(state => state.token);
  const tokenDispatch = useDispatch();
  const tokenActions = actions;

  return [tokenState, tokenDispatch, tokenActions];

}