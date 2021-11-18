import { getAuth, signInWithPopup,createUserWithEmailAndPassword, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import {useState,useEffect} from 'react';
import initializeAuthentication from "../firebase/Firebase.init";

initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({});


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle =() =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
        })
    }
  const   handleUserRegister = (email,password,name,history)=>{

      createUserWithEmailAndPassword (auth,email,name,password)
      .then((result) =>{
          const newUser ={email,displayName: name};
          setUser(newUser)
          //save user to the database
          saveUser(email,name)
          //send name to firebase after creation
        //   updateProfile(auth.currentUser,{
        //       displayName:name
        //   })
        .then(() => {
        })
        // .catch((error) => {
        // });
        history.replace('/');
    })
    .catch((error) => {
  
        // console.log(error);
    })
  }
//   useEffect(() => {
//     const unsubscribed = onAuthStateChanged(auth, (user) => {
//         if (user) {
//             setUser(user);
//         } else {
//             setUser({})
//         }
//     });
//     return () => unsubscribed;
// }, [])

//  const loginUser =(email,password,history,location) =>{
//         signInUsingGoogle(auth,email,password,location,history)
//         .then((userCredential) =>{
//              const destination =location?.state?.from || '/';
//              history.replace(destination);
//         //     setAuthError('');
//         })
//         // .catch((error) =>{
//         //     setAuthError(error.message)

// }
    const logOut = () =>{

        signOut(auth)
        .then(() =>{
            setUser({});
        })
    }
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                    setUser(user);
            } 
            else{
                setUser({});
            }
          });
    },[]) 
    //sav
    const saveUser = (email,displayName) =>{
        const user ={email,displayName};
        fetch('https://serene-falls-61146.herokuapp.com/user',{
            method:'POST',
            headers:{
                'content-type':"application/json"  
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return{
        user,
        signInUsingGoogle,
        logOut,
        // loginUser,
        handleUserRegister
    }
}
export default useFirebase;