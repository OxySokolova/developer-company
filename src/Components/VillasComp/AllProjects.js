import Project from "./Project";
import dataProjects from "../../data/dataProjects";

const AllProjects = () =>{
    return(
        <div>
            {dataProjects.map((proj) => <Project key={proj.id} proj={proj}/>)}
        </div>
    )
}
export default AllProjects; 