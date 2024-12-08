import css from "../FriendList/FriendList.module.css";

export default function FriendListItem({avatar, name, isOnline}) {
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