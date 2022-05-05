import React from 'react'

const Archive = ({users:{id,name,email},onArchive}) => {
  return (
    <>
     <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
            <button onClick={()=> onArchive(id)}>Restore</button>
        </td>
    </tr>
    </>
  )
}

export default Archive