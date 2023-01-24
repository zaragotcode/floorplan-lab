import Oven from "./Oven"
import Sink from "./Sink"


function Kitchen(props) {
  return (
    <div>
      <h2>Kitchen</h2>
      <Oven />
      <Sink />
    </div>
  )
}


export default Kitchen