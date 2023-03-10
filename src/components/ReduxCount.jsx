import { createStore ,combineReducers} from "redux";
import { useDispatch, useSelector } from "react-redux";
const initialState = { count: 0 };
const countReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const initialAuth = {isLogin : false,}
const authReducer = (state = initialAuth, action) =>{
const {type} = action;
switch(type){
  case'Login':
  return {isLogin:true};
  case'LogOut':
  return {isLogin:false};
  default:
    return state;
}
}
const rootReducer = combineReducers({
  counter : countReducer,
  auth : authReducer
})
export const store = createStore(rootReducer);

const ReduxCount = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter);
  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };
  return (
    <div>
      <h1>Count: {count.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default ReduxCount;
