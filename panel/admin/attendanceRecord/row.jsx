import { DateTime } from 'list'

export default item => <>
    <td>{item.employee?.title}</td>
    <DateTime value={item.workDate} />
    <DateTime value={item.checkInDate} />
    <DateTime value={item.checkOutDate} />
    <td>{item.workedMinutes}</td>
</>
