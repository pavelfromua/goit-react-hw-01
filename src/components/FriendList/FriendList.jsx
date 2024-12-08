import css from './FriendList.module.css';

function FriendList({ friends }) {
    return (
        <ul className={css.list}>
            {friends.map((friend) => (
                <li key={friend.id} className={css.listItem}>
                    <FriendListItem {...friend} />
                </li>
            ))}
        </ul>
    );
}

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div>
            <img className={css.cardImage} src={avatar} alt="Avatar" width="48" />
            <h2>{name}</h2>
            <p className={isOnline ? css.green : css.red}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
}

export default FriendList;