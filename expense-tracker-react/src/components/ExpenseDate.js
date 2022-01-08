import './ExpenseDate.css';

function ExpenseDate(props) {
  // use props.date.toISOString to get the date to show as a string. Otherwise it'll break. Not pretty though
  // months start at 0, so March is month 2
  // .toLocaleString gives you options of how to display the date
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expanse-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
}

export default ExpenseDate;
