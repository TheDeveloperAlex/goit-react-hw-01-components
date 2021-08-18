
const Statistics = ({ title, stats }) => {
    // console.log(stats);
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
                {stats.map(e => (
                    <li key={e.id}>
                        <span>{e.label}</span> <span>{e.percentage}</span>
                    </li>
                ))}
                </ul>
        </section>
    )
        
}

export default Statistics;