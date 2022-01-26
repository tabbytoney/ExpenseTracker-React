// For rendering expense item data
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // Card is a custom component - with props.children, everything inside the <Card> tags
  // is available to the Card component in Card.js

  // React hooks like useState should only be called directly inside a component function, not outside or in nested functions
  // props gets the current value of the title.
  // const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
