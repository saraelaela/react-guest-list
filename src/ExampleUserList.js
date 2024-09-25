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

export default function ExampleUserList() {
  const [users, setUsers] = useState(initialUser);
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
        )}
      </div>

      <label>
        <button
          onClick={() => {
            const newUserId = users[users.length - 1].id + 1;
            const newUser = {
              gender: 'female',
              name: {
                title: 'Miss',
                first: 'Deniz',
                last: 'Atakol',
              },
              location: {
                city: 'Glasgow',
                state: 'Leicestershire',
                country: 'United Kingdom',
              },
              email: 'ian.kuhn@example.com',
              id: newUserId,
              picture: 'https://randomuser.me/api/portraits/med/women/34.jpg',
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
        <input />
      </label>

      <div>Hey</div>
      <div>Hey</div>
      <div>Hey</div>
      <div>Hey</div>
    </>
  );
}
