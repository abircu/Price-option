import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Barchart = () => {
  const MathMarksData = [
    {
      student: "Student 1",
      mathMarks: 85,
      physicsMarks: 75,
      chemistryMarks: 70,
    },
    {
      student: "Student 2",
      mathMarks: 78,
      physicsMarks: 80,
      chemistryMarks: 85,
    },
    {
      student: "Student 3",
      mathMarks: 92,
      physicsMarks: 88,
      chemistryMarks: 90,
    },
    {
      student: "Student 4",
      mathMarks: 65,
      physicsMarks: 70,
      chemistryMarks: 60,
    },
    {
      student: "Student 5",
      mathMarks: 70,
      physicsMarks: 65,
      chemistryMarks: 75,
    },
    {
      student: "Student 6",
      mathMarks: 88,
      physicsMarks: 92,
      chemistryMarks: 85,
    },
    {
      student: "Student 7",
      mathMarks: 75,
      physicsMarks: 80,
      chemistryMarks: 78,
    },
    {
      student: "Student 8",
      mathMarks: 60,
      physicsMarks: 55,
      chemistryMarks: 50,
    },
    {
      student: "Student 9",
      mathMarks: 95,
      physicsMarks: 90,
      chemistryMarks: 92,
    },
    {
      student: "Student 10",
      mathMarks: 82,
      physicsMarks: 85,
      chemistryMarks: 88,
    },
  ];
  return (
    <div className="lw-[100%]">
      <AreaChart
        width={400}
        height={350}
        data={MathMarksData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="student" />
        <YAxis />
        <Area dataKey="chemistryMarks" stroke="red" fill="blue" />
        <Tooltip />
      </AreaChart>
    </div>
  );
};

export default Barchart;
