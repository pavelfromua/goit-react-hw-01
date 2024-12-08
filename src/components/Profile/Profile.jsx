import css from './Profile.module.css';

function Profile({name, tag, location, image, stats}) {
    return (
        <div className={css.card}>
            <div className={css.cardBlock}>
                <img src={image} alt="User avatar" className={css.cardImage} />
                <h2>{name}</h2>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={css.cardList}>
                <li className={css.listItem}>
                    <span>Followers</span>
                    <span className={css.cardListItemStats}>{stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span>Views</span>
                    <span className={css.cardListItemStats}>{stats.views}</span>
                </li>
                <li className={css.listItem}>
                    <span>Likes</span>
                    <span className={css.cardListItemStats}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;