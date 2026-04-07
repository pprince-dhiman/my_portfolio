import { Timeline } from "../components/TimeLine";
import { experiences } from "../constants";

const Experience = () => {
  return (
    <div className="w-full" id="work">
      <Timeline data={experiences} />
    </div>
  )
}

export default Experience;