import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    // const { avatar, name, isOnline } = friends;
    console.log(friends);
    return (
        <section>
            <h1>FriendList</h1>
            <ul>
                {friends.map(e => 
                    <FriendListItem avatar={e.avatar} name={e.name} isOnline={e.isOnline} key={e.id} />
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