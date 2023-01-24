import LivingRoom from "./LivingRoom"
import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan(props) {
  const bedNum = ["1", "2"]
  
  return (
    <>
      <Bedroom bedroom={[bedNum]}/>
      <Kitchen />
      <LivingRoom />
    </>
  )
}


export default FloorPlan