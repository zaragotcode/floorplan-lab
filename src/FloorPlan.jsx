import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan(props) {
  
  return (
    <>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
      <LivingRoom />
    </>
  )
}


export default FloorPlan