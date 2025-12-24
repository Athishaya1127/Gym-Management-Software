import { attendanceHistory } from '@/data/mockData';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function TraineeAttendance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">Attendance History</h1>
        <p className="text-muted-foreground">Your gym visit records</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-primary">{attendanceHistory.length}</p>
          <p className="text-sm text-muted-foreground">Total Check-ins</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-green-400">{attendanceHistory.length}</p>
          <p className="text-sm text-muted-foreground">Days Present</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-secondary">85%</p>
          <p className="text-sm text-muted-foreground">Attendance Rate</p>
        </div>
      </div>
      
      <div className="glass-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Check Out</TableHead>
              <TableHead>Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendanceHistory.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    {record.date}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {record.checkIn}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {record.checkOut || '-'}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-green-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>{record.duration || '-'}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
