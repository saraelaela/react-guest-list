import styles from './UserCard.module.css';

export default function UserCard(props) {
  return (
    <div className={styles.wrapper}>
      <div>
        {props.firstName} {props.lastName}
      </div>
      <div>
        <div className={styles.attending}>
          <label>
            Attending <input type="checkbox" />
          </label>
        </div>
        <div>
          <label>
            Not Attending
            <input type="checkbox" />
          </label>
        </div>
      </div>
      <button>remove</button>
    </div>
  );
}
