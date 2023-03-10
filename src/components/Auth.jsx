import { useDispatch,useSelector } from "react-redux"

const Auth = () => {
   const dispatch = useDispatch();
   const auth = useSelector(state => state.auth);
   const handleLogin = () =>{
      dispatch({type:'Login'})
   }
   const handleLogOut = () =>{
      dispatch({type:'LogOut'})
   }
  return (
    <div>
      {
         auth.isLogin ? <div>
            <h1>Welcome</h1>
            <button  onClick={handleLogOut}>Logout</button>
         </div> :
         <button onClick={handleLogin}>Login</button>
      }
     
      
    </div>
  )
}

export default Auth