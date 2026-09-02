import { AttendanceStatus } from 'attendance'

export default ({
    attendanceRecords,
    translations,
}) => <main class='attendance'>
    <h1 class='title'>
        {translations?.attendanceAttendance}
    </h1>
    <div class='items'>
        {
            attendanceRecords?.data?.map(attendanceRecord => <AttendanceStatus
                attendanceRecord={attendanceRecord}
                key={attendanceRecord.id}
            />)
        }
    </div>
</main>
