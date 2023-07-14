/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Chart as ChartJs,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  TimeScale,
  Tooltip
} from 'chart.js';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
// import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import React, { useEffect, useState } from 'react';
import { getSensorIntervalData } from 'src/redux/slices/loraDataSlice';
import { useAppDispatch } from 'src/redux/store/hooks';


ChartJs.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
)

interface ChartProps {
  selectedSensorId: string;
  setMin: any;
  setMax: any;
  setAvg: any;
}

const LineChart: React.FC<ChartProps> = (props) => {
  const dispatch = useAppDispatch();
  const { selectedSensorId, setMin, setMax, setAvg } = props;
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>(
    {
      chart: {
        height: '500px',
      },
      xAxis: {
        minRange: 1,
      },
      rangeSelector: {
        buttonTheme: {
          fill: 'none',
          stroke: 'none',
          'stroke-width': 0,
          r: 8,
          style: {
            color: '#039',
            fontWeight: 'bold',
            padding: '100',
          },
          width: 40,
          states: {
            hover: {
            },
            select: {
              fill: '#039',
              style: {
                color: 'white'
              }
            }
          }
        },
        selected: 2,
        buttons: [{
          type: 'day',
          count: 1,
          text: 'Day',
        }, {
          type: 'week',
          count: 1,
          text: 'Week',
        }, {
          type: 'month',
          count: 1,
          text: 'Month',
        }],
      },
      scrollbar: {
        barBorderRadius: 0,
        barBorderWidth: 1,
        buttonsEnabled: true,
        height: 14,
        margin: 0,
        rifleColor: '#333',
        trackBackgroundColor: '#f2f2f2',
        trackBorderRadius: 0
      },
      series: [
        {
          type: 'line',
          name: 'Stock Price',
          data: [], // Replace with your actual data
          tooltip: {
            valueDecimals: 2
          }
        },
      ],
    });

  useEffect(() => {
    const fetchData = async () => {
      if (selectedSensorId !== null && selectedSensorId !== undefined && selectedSensorId !== '') {
        dispatch(getSensorIntervalData(selectedSensorId)).then((res: any) => {
          const chartData: number[][] = res.payload.data
          setChartOptions({
            series: [
              {
                type: 'line',
                name: 'Temperature',
                data: chartData, // Replace with your actual data
                tooltip: {
                  valueDecimals: 2
                }
              },
            ],
          });
          setMin(res.payload.min);
          setMax(res.payload.max);
          setAvg(res.payload.avg);
        });
      }
    }
    fetchData();

    const handler = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(handler);
  }, [selectedSensorId]);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={chartOptions}
      />
    </div>
  );
};

export default LineChart;
