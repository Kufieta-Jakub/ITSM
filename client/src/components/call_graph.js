import '../css/callGraph.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Styczeń', phones: 20 },
  { name: 'Luty', phones: 73 },
  { name: 'Marzec', phones: 67 },
  { name: 'Kwiecień', phones: 21 },
  { name: 'Maj', phones: 43 },
  { name: 'Czerwiec', phones: 79 },
  { name: 'Lipiec', phones: 11 },
  { name: 'Sierpień', phones: 29 },
];

export default function callGraph(){
  return(
    <div className="callGraph">
        <h2 className="text-xl font-semibold mb-4">Liczba Telefonów</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="phones" fill="#3b82f6" radius={[10, 10, 0, 0]} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}