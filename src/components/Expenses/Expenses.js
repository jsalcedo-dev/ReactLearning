import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {

    return (
        <Card className={"expenses"}>
            {props.expenses.map(({title, amount, date}) =>
                (<ExpenseItem title={title} amount={amount} date={date}/>))
            }
        </Card>

    );
}

export default Expenses;