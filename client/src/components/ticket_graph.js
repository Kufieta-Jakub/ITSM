import '../css/callGraph.css';
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CallGraph() {
  const [chartData, setChartData] = useState([
    { name: 'Ogólnie', phones: 0 },
    { name: 'Rozwiązane', phones: 0 },
    { name: 'Nowe', phones: 0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:3100/api/numTicketsSummary")
      .then(res => res.json())
      .then(data => {
        setChartData([
          { name: 'Ogólnie', phones: data.total },
          { name: 'Rozwiązane', phones: data.resolved },
          { name: 'Nowe', phones: data.new },
        ]);
      })
      .catch(err => console.error(err));
  }, []);
  
  return (
    <div className="callGraph">
      <h2 className="text-xl font-semibold mb-4">Tickety w tym miesiącu</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="phones" fill="#3b82f6" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
