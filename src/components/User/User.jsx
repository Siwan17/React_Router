// import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {myid} = useParams()
  return (
    <div>
      <h1 className='bg-gray-600 text-white
       text-3xl p-4'>User: {myid}</h1>
    </div>
  )
}

export default User
