import s from './FriendListItem.module.css'
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    
    return (

        <li className={s.item}>
            <span className={isOnline ? s.spanGreen : s.spanRed}></span>
            <img src={avatar} alt="" width="48" className={s.img} />
            <p className={s.userName}>{name}</p>
        </li>
    )  
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;
