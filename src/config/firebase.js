import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, setDoc, doc, collection, query, getDocs, where } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "YOUR_API-KEY",
  authDomain: "YOUR_AUTH-DOMAIN",
  projectId: "YOUR_PROJECT-ID",
  storageBucket: "YOUR_STORAGE-BUCKET",
  messagingSenderId: "YOUR_MESSAGING",
  appId: "YOUR_APP-ID",
  measurementId: "YOUR_MEASUREMENT-ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const db = getFirestore(app)

const signup = async (username, email, password) => {
  try{

    const res = await createUserWithEmailAndPassword(auth, email, password)

    const user = res.user

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "Hey, There I'm using Talknet",
      lastSeen: Date.now()
    })

    await setDoc(doc(db, "chats", user.uid), {
      chatsData: []
    })

  } catch(error){
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const login = async (email, password) => {

  try{

    await signInWithEmailAndPassword(auth, email, password)

  } catch(error){
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }

}

const logout = async () => {

  try{
    
    await signOut(auth)

  } catch(error){
    console.error(error)
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }

}

const resetPass = async (email) => {
  if(!email){
    toast.error("Digite seu e-mail")
    return null
  }
  try{

    const userRef = collection(db, 'users')
    const q = query(userRef, where("email", "==", email))
    const querySnap = await getDocs(q)

    if(!querySnap.empty){
      await sendPasswordResetEmail(auth, email)
      toast.success("E-mail enviado")
    } else {
      toast.error("E-mail não existe!")
    }

  } catch(error){ 
    console.error(error)
    toast.error(error)
  }
}

export { signup, login, logout, auth, db, resetPass }