import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const years = ['2024', '2025', '2026'];

interface DayData {
  date: number;
  time?: string;
  status?: string;
  isCurrentMonth: boolean;
}

const Attendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [selectedYear, setSelectedYear] = useState('2025');

  const calendarData: DayData[] = [
    { date: 30, isCurrentMonth: false },
    { date: 31, isCurrentMonth: false },
    { date: 1, status: 'Absent', isCurrentMonth: true },
    { date: 2, time: '11:59 am', status: 'Half Day', isCurrentMonth: true },
    { date: 3, status: 'Absent', isCurrentMonth: true },
    { date: 4, isCurrentMonth: true },
    { date: 5, isCurrentMonth: true },
    { date: 6, time: '09:33 am', status: 'Short Leave', isCurrentMonth: true },
    { date: 7, time: '09:30 am', status: 'Short Leave', isCurrentMonth: true },
    { date: 8, time: '09:47 am', status: 'Short Leave', isCurrentMonth: true },
    { date: 9, time: '09:34 am', status: 'Short Leave', isCurrentMonth: true },
    { date: 10, time: '10:27 am', status: 'Short Leave', isCurrentMonth: true },
  ];

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'Absent':
        return 'bg-red-50';
      case 'Half Day':
        return 'bg-yellow-50';
      case 'Short Leave':
        return 'bg-blue-50';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Calendar className="h-6 w-6" />
                Attendance
              </h1>
              {/* <div className="flex gap-4">
                <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map((month) => (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div> */}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
              {/* Days of Week */}
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <div
                  key={day}
                  className="bg-gray-800 text-white p-4 text-center font-medium"
                >
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {calendarData.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[120px] p-4 ${
                    getStatusColor(day.status)
                  } ${
                    !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' : 'text-gray-900'
                  }`}
                >
                  <div className="font-medium mb-2">{day.date}</div>
                  {day.time && (
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      <Clock className="h-4 w-4" />
                      {day.time}
                    </div>
                  )}
                  {day.status && (
                    <div className={`text-sm ${
                      day.status === 'Absent' ? 'text-red-600' :
                      day.status === 'Half Day' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`}>
                      {day.status}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
