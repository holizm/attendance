[
    { $match: { attendanceRecord } },
    {
        $group: {
            _id: null,
            total: { $sum: '$durationMinutes' },
        },
    },
]
