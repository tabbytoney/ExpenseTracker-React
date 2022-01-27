import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  return (
    <div className='chart'>
      {/** dataPoint => <ChartBar /> ensures there's a data point for each Chart Bar */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
