import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const weightData = [
  { date: '2023-01-01', weight: 185 },
  { date: '2023-01-08', weight: 183 },
  { date: '2023-01-15', weight: 181 },
  { date: '2023-01-22', weight: 180 },
  { date: '2023-01-29', weight: 178 },
  { date: '2023-02-05', weight: 177 },
];

const workoutData = [
  { date: '2023-01-01', workouts: 3 },
  { date: '2023-01-08', workouts: 4 },
  { date: '2023-01-15', workouts: 2 },
  { date: '2023-01-22', workouts: 5 },
  { date: '2023-01-29', workouts: 3 },
  { date: '2023-02-05', workouts: 4 },
];

const goalData = [
  { goal: 'Lose 15 lbs', progress: 80 },
  { goal: 'Run 5k', progress: 60 },
  { goal: 'Bench Press 200 lbs', progress: 90 },
];

const Progress: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Progress Visualization</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Weight Progress</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="weight" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Workout Frequency</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="workouts" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Goal Progress</h2>
            <div className="space-y-4">
              {goalData.map((goal, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{goal.goal}</span>
                      <span className="text-sm font-medium text-gray-700">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Progress;