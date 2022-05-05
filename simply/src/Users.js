import React from 'react'

const Users = ({users:{id,name,email},deleteData}) => {
  return (
    <>
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
            <button onClick={()=> deleteData(id)}>Delete</button>
        </td>
    </tr>
    </>
  )
}

export default Users