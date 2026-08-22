import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>attendanceEmployee</th>
    <th>attendanceWorkDate</th>
    <th>attendanceCheckInDate</th>
    <th>attendanceCheckOutDate</th>
    <th>attendanceWorkedMinutes</th>
</>

const row = item => <>
    <td>{item.employee?.title}</td>
    <DateTime value={item.workDate} />
    <DateTime value={item.checkInDate} />
    <DateTime value={item.checkOutDate} />
    <td>{item.workedMinutes}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
