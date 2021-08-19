// 1
import { avatar, name, tag, location, stats } from './Data/user.json';
import Profile from './Profile/Profile'
// 2
import statisticalData  from './Data/statistical-data.json'
import Statistics from './Statistics/Statistics'
// 3
import friends from './Data/friends.json';
import FriendList from './FriendList/FriendList';

// 4
import transactions from './Data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';


const App = () => {
    return (
        <>
            <Profile avatar={avatar} name={name} tag={tag} location={location} stats={stats} />
            <Statistics stats={statisticalData} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    )
}

export default App;