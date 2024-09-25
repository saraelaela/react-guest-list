import React, { useState } from 'react';

export default function ExampleUserListTest(props) {
  const [users, setUsers] = useState('');
  const [pressEnter, setPressEnter] = useState(false);

  const handleAnswerChange = (event) => {
    if (event.key === 'Enter') {
      setPressEnter(true);
    }
  };
  return (
    <>
      <input
        value={users}
        onChange={(event) => setUsers(event.currentTarget.value)}
        onKeyDown={handleAnswerChange}
      />

      {pressEnter && <div>{users}</div>}
    </>
  );
}
