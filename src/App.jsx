import './App.css'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Student from './Student'
import Usergreeting from './Usergreeting'
function App() {

  return(
    <>
        {/* <Header/>
        <Food/>
        <Footer/> */}
        <Card/>
        <Card/>
        <Student name="Dinesh Kumar" age ="2" isStudent={true}/>
        <Usergreeting name="Dinesh kumar" islogin = {true}/>



    </>
  );
}

export default App
