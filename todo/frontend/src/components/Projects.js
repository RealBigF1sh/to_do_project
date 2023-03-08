import React from "react";

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.description}
            </td>
            <td>
                {project.creator}
            </td>
            <td>
                {project.repository}
            </td>
        </tr>

    )
}

const ProjectList = ({projects}) => {
    return(
    <table>
        <th>
            Name
        </th>
          <th>
            Description
        </th>
          <th>
            Creator
        </th>
          <th>
            Repository
        </th>
        {projects.map((project) => <ProjectItem project={project}/>)}
    </table>
    )
}

export default ProjectList