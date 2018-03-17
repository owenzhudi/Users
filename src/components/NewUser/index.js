import React from 'react';
import './style.css'

const NewUser = ({ firstName, lastName, password, repeat, title, sex, age, curEditId,
  onFirstNameChange, onLastNameChange, onTitleChange, onSexChange, onAgeChange,
  onPasswordChange, onRepeatChange, handleSubmit, passwordsSame }) => {
  return (
    <div className="new_user">
      <p>{curEditId === null ? 'Create New User:' : 'Edit User'}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group row" >
          <label className="col-sm-2 col-lg-2 col-form-label" htmlFor="first_name">
            First Name:
          </label>
          <div className="col-sm-10 col-lg-4">
            <input
              type="text"
              id="first_name"
              value={firstName}
              className="form-control"
              onChange={onFirstNameChange}
            />
          </div>

        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-lg-2 col-form-label" htmlFor="last_name">
            Last Name:
          </label>
          <div className="col-sm-10 col-lg-4">
            <input
              type="text"
              id="last_name"
              value={lastName}
              className="form-control"
              onChange={onLastNameChange}
            />
          </div>

        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-lg-2 col-form-label" htmlFor="title">
            Title:
          </label>
          <div className="col-sm-10 col-lg-4">
            <input
              type="text"
              id="title"
              value={title}
              className="form-control"
              onChange={onTitleChange}
            />
          </div>

        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-lg-2 col-form-label" htmlFor="sex">
            Sex:
          </label>
          <div className="col-sm-10 col-lg-4">
            <input
              type="text"
              id="sex"
              value={sex}
              className="form-control"
              onChange={onSexChange}
            />
          </div>

        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-lg-2 col-form-label" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-10 col-lg-4">
            <input
              type="text"
              id="age"
              value={age}
              className="form-control"
              onChange={onAgeChange}
            />
          </div>

        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="password">
            Password:
          </label>
          <div className="col-sm-10 col-lg-4">
            <input
              type="password"
              id="password"
              value={password}
              className="form-control"
              onChange={onPasswordChange}
            />
          </div>

        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="password_repeat">
            Repeat:
          </label>
          <div className="col-sm-10 col-lg-4">
          <input
            type="password"
            id="password_repeat"
            value={repeat}
            className="form-control"
            onChange={onRepeatChange}
          />
          </div>

        </div>
        <button className="btn btn-secondary" type="submit">Save Changes</button>
      </form>
      <div>
        {passwordsSame ? ('') : ('Passwords are not the same!')}
      </div>

    </div>
  );
};

export default NewUser;