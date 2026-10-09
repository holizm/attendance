import { routeLoader$ } from '@builder.io/qwik-city'
import useAsync from 'useAsync'
import globalizationGetGlobalization from 'globalizationGetGlobalization'
import attendanceGetAttendanceRecords from 'attendanceGetAttendanceRecords'

export default routeLoader$(async props => {
    const [
        attendanceRecords,
        globalization,
    ] = await useAsync([
        attendanceGetAttendanceRecords(props),
        globalizationGetGlobalization(props),
    ])

    const result = {
        attendanceRecords,
        ...globalization,
    }
    return result
})
