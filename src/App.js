import { SyntheticEvent, useState } from 'react';
import ExampleUserList from './ExampleUserList';
import ExampleUserListTest from './ExampleUserListTest';
import UserCard from './UserCard';

const initialList = [
  {
    id: 'a',
    name: 'Robin',
  },
  {
    id: 'b',
    name: 'Dennis',
  },
];

export default function App() {
  const [users, setUsers] = useState(initialList);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  //

  return (
    <>
      <h1>Guest List</h1>
      <form>
        <label>
          First Name{' '}
          <input
            value={firstName}
            onChange={(event) => {
              setFirstName(event.currentTarget.value);
            }}
          />
        </label>
        <label>
          Last Name{' '}
          <input
            value={lastName}
            onChange={(event) => {
              setLastName(event.currentTarget.value);
            }}
          />
        </label>
      </form>
      <UserCard firstName={firstName} lastName={lastName} />
      {/* <ExampleUserList firstName={firstName} lastName={lastName} /> */}
      <ExampleUserListTest firstName={firstName} lastName={lastName} />
    </>
  );
}
