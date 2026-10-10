import getWithAuthentication from 'getWithAuthentication'

export default props => getWithAuthentication('/attendance/attendanceRecord/list', props)
