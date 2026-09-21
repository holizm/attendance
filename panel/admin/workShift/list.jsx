import {
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>attendanceWorkShift</th>
    <th>attendanceCode</th>
    <th>coreStartTime</th>
    <th>coreEndTime</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.startTime}</td>
    <td>{item.endTime}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
