import Dictaphone from "../../components/Dictaphone";
import SpeechForm from "../../components/SpeechForm";
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from "../../features/speech/speechSlice";
//hes importing get not the create
//changed reset from speechslice to auth slice
 //import { reset } from '../../features/auth/authSlice'


const SayItSpellIt = () => {

    const navigate = useNavigate()
     const dispatch = useDispatch()
  
  
    const { user } = useSelector((state) => state.auth)
    
  
   const { speech, isLoading, isError, message } = useSelector((state) => state.speech)

  console.log(user)

  useEffect(() => {
 
      if (isError) {
        console.log(message)
      }

      if (!user) {
        navigate('/login')
        return
      }

      return () => {
        dispatch(reset())
        return
      }
    
  }, [user, navigate, isError, message, dispatch]) //ok still rendering twice but these are allowed back in
  //dont need dependencies its posting just fine
    

  return (
      
        <div className="contain">
            <h1>Welcome {user.name}</h1>
            <h3>Start by saying a word</h3>
            <Dictaphone />
            <p>Would you like the save the word to your word bank?</p>
        <SpeechForm />
      </div>
    
    );
}
 
export default SayItSpellIt;