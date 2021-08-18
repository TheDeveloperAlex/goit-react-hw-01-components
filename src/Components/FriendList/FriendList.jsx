import FriendListItem from '../FriendListItem/FriendListItem';
// import {avatar, name, id, isOnline}  from './Data/friends.json';

const FriendList = ({ friends }) => {
    const { avatar, name, isOnline } = friends;
    return (
        <ul>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline } />
        </ul>
    )
}

export default FriendList;