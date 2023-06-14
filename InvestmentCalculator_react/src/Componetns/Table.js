import styles from './Table.module.css'


const Table = (props) =>{
    
    return(
        <table className={styles.result}>
        <thead  className={`${styles.result} ${styles.thead}`}>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
          </tr>
        </thead>
        <tbody  className={`${styles.result} ${styles.tbody}`}>
            {props.data == null || props.data ==0  ?   <div className={styles.data}>no data entered</div> :   <>
              {props.data.map(x => {
                return <tr>
                <td>{x.year}</td>
            <td>{x.yearlyInterest}</td>
            <td>{x.savingsEndOfYear}</td>
            <td>{x.yearlyContribution}</td>
            </tr>
                     })}
        </>}
        </tbody>
      </table>
    );
}

export default Table;