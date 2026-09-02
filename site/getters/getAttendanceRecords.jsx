import { getWithAuthentication } from 'core'

export default props => getWithAuthentication('/attendance/attendanceRecord/list', props)
