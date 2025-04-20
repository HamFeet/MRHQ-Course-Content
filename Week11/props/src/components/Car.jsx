import "./Car.css";

function Car({make, year, price}){
    return (
        <div className="card-car">
            <h2>Make: {make}</h2>
            <p>Year: {year}</p>
            <p>Asking Price: {price}</p>
        </div>
    )
}
export default Car;