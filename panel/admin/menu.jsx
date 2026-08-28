export default [
    {
        children: [
            {
                path: '/attendance/attendanceRecord/list',
                title: 'attendanceRecords',
            },
            {
                path: '/attendance/leaveRequest/list',
                title: 'attendanceLeaveRequests',
            },
            {
                path: '/attendance/workShift/list',
                title: 'attendanceWorkShifts',
            },
        ],
        icon: 'schedule',
        path: '/attendance',
        title: 'attendanceAttendance',
    },
]
