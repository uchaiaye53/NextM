import React from 'react'

interface User{
  id: number;
  name: string;
  email: string;
}

const UsersPage = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div>
      <h2>Time: {new Date().toLocaleTimeString()}</h2>
      <br />
      <h1>Users List: </h1>
      <table className='table table-zebra'>
        <thead>
          <tr className='text-xl'>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map(user => <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>)
        }
        </tbody>       
      </table>
    </div>
  )
}

export default UsersPage;
