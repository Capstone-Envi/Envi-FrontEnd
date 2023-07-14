import { useEffect, useRef, useState } from 'react';

// ** libs
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { getSensorOfTypeIntervalData } from 'src/redux/slices/loraDataSlice';
import { useAppDispatch } from 'src/redux/store/hooks';

interface FilterProps {
  datasets: any;
  setDatasets: any;
}

const Filter: React.FC<FilterProps> = (props) => {
  const { datasets, setDatasets } = props;
  const [selectedType, setSelectedType] = useState("TEMPERATURE");
  const [startDate, setStartDate] = useState();
  const [startDateError, setStartDateError] = useState<string>();
  const [endDate, setEndDate] = useState();
  const [endDaterror, setEndDateError] = useState<string>();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<any>();
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const req = {
        startDate: null,
        endDate: null,
      };
      dispatch(getSensorOfTypeIntervalData({ type: selectedType, req })).then((res: any) => {
        const payload: Map<string, { data: number[], createTimestamp: string[] }> = res.payload;
        setDatasets(payload);
      });
    };

    fetchData();

    const id = setInterval(fetchData, 10000);
    intervalIdRef.current = id;

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [selectedType]);

  // ** handle select isEvent
  const handleSelectTime = () => {
    if (startDate && endDate) {
      const startTime = new Date(startDate).getTime();
      const endTime = new Date(endDate).getTime();
      if (startTime >= endTime) {
        setStartDateError('Start cannot be greater than end');
        setEndDateError(undefined);
      } else {
        setError(undefined);
        setStartDateError(undefined);
        setEndDateError(undefined);
        console.log(dayjs(startDate).format());
        console.log(dayjs(endDate).format());
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
        const fetchData = async () => {
          const req = {
            startDate: dayjs(startDate).format(),
            endDate: dayjs(endDate).format(),
          };
          dispatch(getSensorOfTypeIntervalData({ type: selectedType, req })).then((res: any) => {
            const payload: Map<string, { data: number[], createTimestamp: string[] }> = res.payload;
            setDatasets(payload);
          });
        };
        fetchData();
        const id = setInterval(fetchData, 10000);
        intervalIdRef.current = id;
      }
    } else {
      if (!startDate) {
        setStartDateError('Select start date');
      }
      if (!endDate) {
        setEndDateError('Select end date');
      }
    }
  };

    // ** handle select isEvent
    const handleClearTime = () => {
      setStartDate(undefined);
      setEndDate(undefined);
      const fetchData = async () => {
        const req = {
          startDate: null,
          endDate: null,
        };
        dispatch(getSensorOfTypeIntervalData({ type: selectedType, req })).then((res: any) => {
          const payload: Map<string, { data: number[], createTimestamp: string[] }> = res.payload;
          setDatasets(payload);
        });
      };
  
      fetchData();
  
      const id = setInterval(fetchData, 10000);
      intervalIdRef.current = id;
  
      return () => {
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
        }
      };
    };

  return (
    <div className="mt-5 flex items-center gap-2">
      {/* start  date */}
      <div className="">
        <p className="text-t3 font-medium text-gray-500">Start date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            // onError={(newError, value) => setError(newError)}
            // slotProps={{
            //   textField: {
            //     helperText: errorMessage,
            //   },
            // }}
            value={startDate}
            // minDateTime={today}
            onChange={(event: any) => {
              setStartDate(event);
            }}
            // label="Start date"
            // format="DD-MM-YYYY"
            sx={{
              height: '36px',
              '& .MuiFormLabel-root': {
                top: '-11px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                // border: 'none',
              },
              '& .MuiInputBase-inputAdornedEnd': {
                padding: '6px 14px',
                fontSize: '14px',
              },
            }}
            className="block md:w-[260px] w-full h-[36px] p-[12px] text-t3 rounded-[5px] focus:outline-primary outline-none border-none"
          />
        </LocalizationProvider>
        {<p className="text-danger text-t3">{startDateError} &nbsp;&nbsp;</p>}
      </div>

      {/* end date */}
      <div className="">
        <p className="text-t3 font-medium text-gray-500">End date</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            // onError={(newError, value) => setError(newError)}
            // slotProps={{
            //   textField: {
            //     helperText: errorMessage,
            //   },
            // }}
            value={endDate}
            // minDateTime={today}
            onChange={(event: any) => {
              setEndDate(event);
            }}
            sx={{
              height: '36px',
              '& .MuiFormLabel-root': {
                top: '-11px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                // border: 'none',
              },
              '& .MuiInputBase-inputAdornedEnd': {
                padding: '6px 14px',
                fontSize: '14px',
              },
            }}
            className="block md:w-[260px] w-full h-[36px] p-[12px] text-t3 rounded-[5px] focus:outline-primary outline-none border-none"
          />
        </LocalizationProvider>
        {<p className="text-danger text-t3">{endDaterror} &nbsp;&nbsp;</p>}
      </div>

      {/* save button */}
      <button
        onClick={() => handleSelectTime()}
        className="rounded-[6px] text-white text-t3 font-medium px-5 py-1 mb-[5px] bg-primary"
      >
        Save
      </button>

      <button
        onClick={() => handleClearTime()}
        className="rounded-[6px] text-white text-t3 font-medium px-5 py-1 mb-[5px] bg-primary"
      >
        Clear
      </button>

      {/* temperature */}
      <div>
        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
          className={`block md:w-[140px] w-full h-[34px] pl-[10px] text-t3 sm:text-t3 mb-[5px] font-poppins border rounded-[5px] focus:outline-primary`}
        >
          <option value="TEMPERATURE">Temperature</option>
          <option value="LIGHT">Light</option>
          <option value="HUMIDITY">Humidity</option>
          <option value="SMOKE">Smoke</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
