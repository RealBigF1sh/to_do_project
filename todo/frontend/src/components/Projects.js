import React from "react";

const ProjectItem = ({project, deleteProject}) => {
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
            <td>
                <button onClick={()=>deleteProject(project.id)} type='button'>Delete</button>
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
        <th>

        </th>
        {projects.map((project) => <ProjectItem project={project}/>)}
    </table>
    )
}

export default ProjectList