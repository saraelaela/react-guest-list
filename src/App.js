import { SyntheticEvent, useState } from 'react';
import UserCard from './UserCard';

function triggerCustomEvent(eventName, data) {
  const event = new SyntheticEvent(eventName, {
    bubbles: true,
    cancelable: true,
  });
  event.data = data;
  window.dispatchEvent(event);
}

/* function SaveName() {
  const [toggleText, setToggleText] = useState(false); */

/* //   return (
//     <div>
//       <button onClick={() => setToggleText(true)}>
//         {toggleText ? 'Clicked!' : 'Click me!'}
//       </button>
//     </div>
//   );
// } */

export default function App() {
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
    </>
  );
}
