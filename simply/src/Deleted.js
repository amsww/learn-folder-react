import React from 'react'

const Deleted = ({users:{id,name,email},archieveData}) => {
  return (
    <>
     <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
            <button onClick={()=> archieveData(id)}>Archieve</button>
        </td>
    </tr>
    </>
  )
}

export default Deleted