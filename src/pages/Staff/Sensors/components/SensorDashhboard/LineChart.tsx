/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChartData,
  Chart as ChartJs,
  ChartOptions,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip
} from 'chart.js';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { Line } from 'react-chartjs-2';
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

ChartJs.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
)

interface ChartProps {
  datasets: Map<string, { data: number[], createTimestamp: string[] }>;
}

const LineChart: React.FC<ChartProps> = (props) => {
  const { datasets } = props;

  const data: ChartData<'line'> = {
    // labels: labels,
    datasets: Object.entries(datasets).map(([key, value]): any => ({
      label: key.toString(),
      data: value.data.map((dataPoint: any, index: number) => ({
        x: new Date(value.createTimestamp[index]).getTime(),
        y: dataPoint,
      })),
      borderWidth: 1,
      pointRadius: 1,
    })),
  };

  const options: ChartOptions<"line"> = {
    // animation: false,
    normalized: true,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "time",
        time: {
          unit: 'day',
        },
        ticks: {
          autoSkip: false,
          maxTicksLimit: 10,
          minRotation: 0,
          maxRotation: 0,
          sampleSize: 10,
        },
      },
    },
    // interaction: {
    //   intersect: false,
    // },
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          boxHeight: 15,
          boxWidth: 15,
        }
      },
    },
  };

  return (
    <>
      <div className="border border-[#333333] p-4 w-[100%]">
        <Line
          data={data}
          options={options}
          style={{ maxWidth: '100%', height: '400px' }}
        />
      </div>
    </>
  );
};

export default LineChart;
