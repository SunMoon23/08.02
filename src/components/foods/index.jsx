import Foodcard from "../foodcard"
import { data } from '../../data';
import "react" 

// eslint-disable-next-line react/prop-types
function Foods({value}) {
  return (
    <div className="foods">
      {
        data.filter(food => food.name.toLowerCase().includes(value)).map(item => {
          // eslint-disable-next-line react/jsx-key
          return  <Foodcard item={item} />
        })
      }
        
    </div>
  )
}

export default Foods