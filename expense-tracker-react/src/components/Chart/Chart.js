import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  // transform the dataPoint object into an array of just the numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // spread operator pulls out all the array elements and add them as standalone arguments to .max()
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {/** dataPoint => <ChartBar /> ensures there's a data point for each Chart Bar */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
