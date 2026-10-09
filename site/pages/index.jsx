import { component$ } from '@builder.io/qwik'
import AttendanceAttendance from 'attendanceAttendance'
import attendanceLoadAttendance from 'attendanceLoadAttendance'

export default component$(() => {
    const data = attendanceLoadAttendance().value

    return <AttendanceAttendance {...data} />
})

export { attendanceLoadAttendance as loadAttendance }
