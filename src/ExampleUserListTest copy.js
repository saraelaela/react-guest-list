import React, { useState } from 'react';

const initialUser = [
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Ian',
      last: 'Kuhn',
    },
    location: {
      city: 'Glasgow',
      state: 'Leicestershire',
      country: 'United Kingdom',
    },
    email: 'ian.kuhn@example.com',
    id: 1,
    picture: 'https://randomuser.me/api/portraits/med/men/47.jpg',
  },
];

export default function ExampleUserListTest(props) {
  const [users, setUsers] = useState(initialUser);
  const [pressEnter, setPressEnter] = useState(false);
  console.log(pressEnter);
  return (
    <>
      <div>
        {users.map(
          (user) => (
            <div key={`user-${user.id}`}>
              {user.name.first} {user.name.last}
            </div>
          ),
          // <div>{user.name}</div>
          // input onClick={(event) => setValue(event.currentTarget.value)}
        )}
      </div>
      <button onClick={() => setPressEnter(true)}>
        it happened!
        {(event) =>
          setPressEnter(event.key === 'Enter' ? 'something' : 'something else')
        }
      </button>

      <button
        onClick={() => {
          const newUser = {
            gender: 'female',
            name: {
              title: 'Miss',
              first: `${props.firstName}`,
              last: `${props.lastName}`,
            },
          };
          // 1. create a copy x1 of the current state
          const newUsers = [...users]; // use spread operator
          // 2. update the copy created in step 1
          newUsers.push(newUser);
          // 3. set state to the copy of the old array
          setUsers(newUsers);
        }}
      >
        Test{' '}
      </button>
    </>
  );
}
