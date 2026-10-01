import { DateTime } from 'list'

export default item => <>
    <td>{item.employee?.title}</td>
    <td>{item.leaveType?.title}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
    <td>{item.state?.title}</td>
</>
