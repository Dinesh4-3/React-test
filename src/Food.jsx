
function Food(){
    const food1 = "Chicken"
    const food2 = "Burger"
    const food3 = ["Chicken", "chilli"]
    return(
        <ul>
            <li>Vegetable</li>
            <li>{food1}</li>
            <li>{food2}</li>
            <li>{food3[1]}</li>

        </ul>
        
    )
}

export default Food