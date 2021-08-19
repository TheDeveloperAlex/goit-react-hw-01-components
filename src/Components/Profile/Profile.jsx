// import {card, img, description, userName, userTag, userLocation, list, item} from './Profile.module.css';
import s from './Profile.module.css';
import PropTypes from 'prop-types';
const Profile = ({ avatar, name, tag, location, stats }) => {
    const arr = Object.entries(stats);
    return (
        <section className={s.section}>
            <h1>Profile</h1>
            <div className={s.card}>
                <div className={s.description}>
                    <img src={avatar} alt="avatar" className={s.img} />
                    <p className={s.userName}>{name}</p>
                    <p className={s.userTag}>@{tag}</p>
                    <p className={s.userLocation}>{location}</p>
                </div>
                <ul className={s.list}>
                    {arr.map(item => (
                        <li className={s.item} key={item[0]}>
                            <span className={s.span}>{item[0]}</span>
                        <span>{item[1]}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
        

    )
}

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
}

export default Profile;

