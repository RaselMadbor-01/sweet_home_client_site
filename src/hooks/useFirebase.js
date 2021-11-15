import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  getIdToken,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const[admin,setAdmin]=useState(false);
  const [token,setToken]=useState('');

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInRegister = (email, password,name,history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser={email,displayName:name}
        setUser(newUser);
        updateName(name);
        setError("");
        savedUser(email,name,'POST');
        history.replace("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setUser({});
        setError(errorMessage);
      })
      .finally(()=>{setIsLoading(false)})
  };

  const signInLogin = (email, password,location,history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setError("");
        const destination=location?.state?.from||"/";
        history.replace(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setUser({});
        setError(errorMessage);
      })
      .finally(()=>{setIsLoading(false)})
  };

  const signInWithGoogle = (location,history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        savedUser(user.email,user.displayName,'PUT');
        setUser(user);
        setError("");
        const destination=location?.state?.from||"/";
        history.replace(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setUser({});
        setError(errorMessage);
      })
      .finally(()=>{setIsLoading(false)})
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken=>setToken(idToken))
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  useEffect(()=>{
    fetch(`https://morning-brushlands-15665.herokuapp.com/user/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  },[user.email])

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setUser({});
      })
      .finally(()=>{setIsLoading(false)})
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const savedUser=(email,displayName,method)=>{
    const user={email,displayName};
    fetch("https://morning-brushlands-15665.herokuapp.com/users",{
      method:method,
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })

  }

  return {
    user,
    setUser,
    admin,
    token,
    error,
    setError,
    isLoading,
    setIsLoading,
    signInRegister,
    signInLogin,
    logOut,
    signInWithGoogle,
  };
};
export default useFirebase;
