import React from "react";

const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.age}
            </td>
            <td>
                {user.email}
            </td>
        </tr>

    )
}

const UserList = ({users}) => {
    return(
    <table>
        <th>
            First name
        </th>
          <th>
            Last name
        </th>
          <th>
            Age
        </th>
          <th>
            E-mail
        </th>
        {users.map((user) => <UserItem user={user}/>)}
    </table>
    )
}

export default UserList