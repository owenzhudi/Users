import React from 'react';

const User = ({id, handleEdit, firstName, lastName, title, sex, age, handleDelete}) => {
  return (
    <tr>
      <td><button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => handleEdit(id)}>Edit</button></td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{title}</td>
      <td>{sex}</td>
      <td>{age}</td>
      <td><button type="button" className="btn btn-outline-danger btn-sm" onClick={() => handleDelete(id)}>Delete</button></td>
    </tr>
  );
};

export default User;