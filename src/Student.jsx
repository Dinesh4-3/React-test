import PropTypes from "prop-types"
function Student(props){ // props used to give a unique name or value to the object
    return(
        <div className="student">
        <h1>Hello, {props.name} is your age is {props.age}</h1>
        <h2>is {props.name} is a Student {props.isStudent ? "Yes" : "No"}</h2>

        </div>
    )
}
Student.propTypes= { // mainly used for debugging
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
Student.defaultProps= { // default props used to always initialize the permennant value
    name: 'Guests',
    age: 0,
    isStudent: false,
}
export default Student