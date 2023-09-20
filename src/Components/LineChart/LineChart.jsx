import { LineChart as LChart, Line ,XAxis, YAxis} from 'recharts';
const LineChart = () => {
    const mathMarksData = [
        {
          "student": "Student 1",
          "mathMarks": 85,
          "cseMarks": 75,
          "eeeMarks": 88
        },
        {
          "student": "Student 2",
          "mathMarks": 78,
          "cseMarks": 82,
          "eeeMarks": 76
        },
        {
          "student": "Student 3",
          "mathMarks": 92,
          "cseMarks": 88,
          "eeeMarks": 90
        },
        {
          "student": "Student 4",
          "mathMarks": 88,
          "cseMarks": 78,
          "eeeMarks": 85
        },
        {
          "student": "Student 5",
          "mathMarks": 76,
          "cseMarks": 85,
          "eeeMarks": 80
        },
        {
          "student": "Student 6",
          "mathMarks": 95,
          "cseMarks": 90,
          "eeeMarks": 92
        },
        {
          "student": "Student 7",
          "mathMarks": 89,
          "cseMarks": 84,
          "eeeMarks": 88
        },
        {
          "student": "Student 8",
          "mathMarks": 72,
          "cseMarks": 68,
          "eeeMarks": 75
        },
        {
          "student": "Student 9",
          "mathMarks": 84,
          "cseMarks": 80,
          "eeeMarks": 82
        },
        {
          "student": "Student 10",
          "mathMarks": 91,
          "cseMarks": 88,
          "eeeMarks": 90
        }
      ]
    return (
        <div>
            <LChart width={1000} height={400} data={mathMarksData}>
                <XAxis dataKey="student"></XAxis>                
                <YAxis dataKey=""></YAxis>
                <Line stroke="#FF0000" dataKey="mathMarks"></Line>
                <Line stroke="#FFFF00" dataKey="cseMarks"></Line>
                <Line stroke="#00FF00" dataKey="eeeMarks"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;