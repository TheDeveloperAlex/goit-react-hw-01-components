import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


const TransactionHistory = ({ items }) => {
    console.log(items);
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
                {items.map(e => {
                    return (<tr key={e.id} className={s.tr}>
                            <td className={s.td}>{e.type}</td>
                            <td className={s.td}>{e.amount}</td>
                            <td className={s.td}>{e.currency}</td>
                    </tr> )
                            
                })}    
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

