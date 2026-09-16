import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>attendanceEmployee</th>
    <th>attendanceLeaveType</th>
    <th>attendanceStartDate</th>
    <th>attendanceEndDate</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.employee?.title}</td>
    <td>{item.leaveType?.title}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
