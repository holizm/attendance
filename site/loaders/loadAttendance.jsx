import { routeLoader$ } from '@builder.io/qwik-city'
import { useAsync } from 'core'
import { getGlobalization } from 'globalization'
import { getAttendanceRecords } from 'attendance'

export default routeLoader$(async props => {
    const [
        attendanceRecords,
        globalization,
    ] = await useAsync([
        getAttendanceRecords(props),
        getGlobalization(props),
    ])

    const result = {
        attendanceRecords,
        ...globalization,
    }
    return result
})
