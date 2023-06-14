import styles from './Form.module.css'

const Form = (props) => {

  const onsubmitHandler = (e)=>{
    e.preventDefault();
    console.log(e)
    const userInput =[e.target[0].value ,e.target[1].value ,e.target[2].value,e.target[3].value];
    props.calculatehandler(userInput)
  }
  const resetHandler = () =>{
   props.resethandler()
  }

    return (
<form className={styles.form} onSubmit ={onsubmitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    );
}


export default Form;

