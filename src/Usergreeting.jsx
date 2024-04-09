import PropTypes from "prop-types"
function Usergreeting(props){ // props used to give a unique name or value to the object
    
const welcomeMsg = <h1 className="welcomeMsg">Hey {props.name}</h1>
const promptMsg = <h1 className="promptMsg">{props.islogin} please try again</h1> 
return(props.islogin ? welcomeMsg : promptMsg)
}

Usergreeting.propTypes= { // mainly used for debugging
    name:PropTypes.string,
    islogin:PropTypes.bool,
}
Usergreeting.defaultProps= { // default props used to always initialize the permennant value
    name: 'Guests',
    islogin: false,
}
export default Usergreeting