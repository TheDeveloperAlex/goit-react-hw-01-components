import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
    return (
        <section>
            <h1>TransactionHistory</h1>
            <table className={s.table}>
                <thead>
                    <tr className={s.trHead}>
                        <th className={s.th}>Type</th>
                        <th className={s.th}>Amount</th>
                        <th className={s.th}>Currency</th>
                    </tr>
                </thead>

                <tbody> 
                    {items.map(({ id, type, amount, currency }) => (
                        <TransactionHistoryItem type={type} amount={amount} currency={currency} key={id} />   
                    ))}    
                </tbody>
            </table>
        </section>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.objectOf(
            PropTypes.string,
            PropTypes.string,
            PropTypes.string,
        )
    )
}

export default TransactionHistory;
// 
