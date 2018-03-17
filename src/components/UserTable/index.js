import React from 'react';
import User from '../User';

const UserTable = ({ users, handleSort, handleEdit, handleDelete }) => {
  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th>
            Edit
          </th>
          <th scope="col">
            <a href="#" onClick={e => handleSort(e, 'firstName')}>First Name</a>
          </th>
          <th scope="col">
            <a href="#" onClick={e => handleSort(e, 'lastName')}>Last Name</a>
          </th>
          <th scope="col">
            <a href="#" onClick={e => handleSort(e, 'title')}>Title</a>
          </th>
          <th scope="col">
            <a href="#" onClick={e => handleSort(e, 'sex')}>Sex</a>
          </th>
          <th scope="col">
            <a href="#" onClick={e => handleSort(e, 'age')}>Age</a>
          </th>
          <th>
            Delete
          </th>
        </tr>
      </thead>

      <tbody>
        {
          users.map(user => {
            return (
              <User key={user.id} 
                {...user} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete} 
              />
            );
          })
        }
      </tbody>
    </table>
  );
};

export default UserTable;