import FriendListItem from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <section>
            <h1>FriendList</h1>
            <ul>
                {friends.map(({ avatar, name, isOnline, id }) =>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
                )}
            </ul>
        </section>
        
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.object,   
    )
}


export default FriendList;