export default [
    {
        children: [
            {
                path: '/attendance/attendanceRecord/list',
                title: 'records',
            },
            {
                path: '/attendance/leaveRequest/list',
                title: 'leaveRequests',
            },
            {
                path: '/attendance/workShift/list',
                title: 'workShifts',
            },
        ],
        icon: 'schedule',
        path: '/attendance',
        title: 'attendance',
    },
]
