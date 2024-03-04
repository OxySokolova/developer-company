import Project from "./Project";
import dataProjects from "../../data/dataProjects";

const AllProjects = () =>{
    return(
        <div>
            {dataProjects.map((proj, index) => <Project key={index} proj={proj}/>)}
        </div>
    )
}
export default AllProjects; 