import { component$ } from '@builder.io/qwik'
import {
    Attendance,
    loadAttendance,
} from 'attendance'

export default component$(() => {
    const data = loadAttendance().value

    return <Attendance {...data} />
})

export { loadAttendance }
