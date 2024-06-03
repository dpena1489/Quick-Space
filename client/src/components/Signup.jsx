import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup() {
  const [formState, setFormState] = useState({ 
    email: '', 
    password: '' , 
    firstName: '',
    lastName: '',
    username: ''
  });
  const [createUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const {data} = await createUser({
      variables: {
        ...formState
      },
    });
   
    Auth.login(data.createUser.token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2 className='text-3xl font-bold'>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input className="text-black ml-2"
            placeholder="First"
            name="firstName"
            type="text"
           value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input className="text-black ml-2"
            placeholder="Last"
            name="lastName"
            type="text"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="username">Username:</label>
          <input className="text-black ml-2"
            placeholder="username"
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input className="text-black ml-2"
            placeholder="youremail@test.com"
            name="email"
            type="email"
           value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input className="text-black ml-2"
            placeholder="******"
            name="password"
            type="password"
           value={formState.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit"
            className="rounded-md bg-sky-600 px-2.5 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-3">
            Submit
          </button>
       
      </form>
    </div>
  );
}

export default Signup;
