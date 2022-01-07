// For rendering expense item data
import './ExpenseItem.css';

function ExpenseItem(props) {
  // months start at 0, so March is month 2
  // .toLocaleString gives you options of how to display the date
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    // use props.date.toISOString to get the date to show as a string. Otherwise it'll break. Not pretty though
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
