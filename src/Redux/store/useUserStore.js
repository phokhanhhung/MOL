import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../reducers/userReducer';


export const useUserStore = () => {
  const userState = useSelector(state => state.token);
  const userDispatch = useDispatch();
  const userActions = actions;

  return [userState, userDispatch, userActions];

}