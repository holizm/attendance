export default ({ attendanceRecord }) => <dl class='status'>
    <dt class='workDate'>{attendanceRecord?.workDate}</dt>
    <dd class='checkInDate'>{attendanceRecord?.checkInDate}</dd>
    <dd class='checkOutDate'>{attendanceRecord?.checkOutDate}</dd>
    <dd class='workedMinutes'>{attendanceRecord?.workedMinutes}</dd>
</dl>
