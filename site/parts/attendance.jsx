import Item from 'item'
import List from 'list'
import { AttendanceStatus } from 'attendance'

export default ({
    attendanceRecords,
    translations,
}) => <main class='attendance'>
    <h1 class='title'>
        {translations?.attendanceAttendance}
    </h1>
    <List class='items'>
        {
            attendanceRecords?.data?.map(attendanceRecord => <Item
                inList
                key={attendanceRecord.id}
            >
                <AttendanceStatus
                    attendanceRecord={attendanceRecord}
                    key={attendanceRecord.id}
                />
            </Item>)
        }
    </List>
</main>
