export default ({ attendanceRecord }) => <dl class='attendanceStatus'>
    <dt class='workDate'>{attendanceRecord.workDate}</dt>
    <dd class='checkInDate'>{attendanceRecord.checkInDate}</dd>
    <dd class='checkOutDate'>{attendanceRecord.checkOutDate}</dd>
    <dd class='workedMinutes'>{attendanceRecord.workedMinutes}</dd>
</dl>
