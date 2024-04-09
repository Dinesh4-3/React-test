import image from   './assets/imgs.png'
export default function Card(){
return(
    // we can add child elements with one class only
    <div className="card"> 
    <img src={image} alt="" />
    <h1 className='card-title'>Dinesh kumar</h1>
    <p className='card-text'>I am Rich</p>
    </div>
)
}