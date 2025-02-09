/* eslint-disable react/prop-types */
import "react"

 
function FoodCard({ item }) {
  return (
    <div className='card'>
        <img src={item.img} alt="" onError={(e) =>e.target.src="https://ih1.redbubble.net/image.3243769575.1059/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
    </div>
  )
}

export default FoodCard