import './Card.css';

// want to use this as a wrapper component

function Card(props) {
  // Card is used custom component in ExpenseItem.js - with props.children,
  // everything inside the <Card> tags is available to the Card component

  // Anything added as a className to <Card></> is attached to this string. 
  // Now classNames will be applied to <Card> when it's used.
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
