[
    { $match: { employee } },
    {
        $group: {
            _id: null,
            leaveMinutes: { $sum: '$leaveMinutes' },
            overtimeMinutes: { $sum: '$overtimeMinutes' },
            scheduledMinutes: { $sum: '$scheduledMinutes' },
            workedMinutes: { $sum: '$workedMinutes' },
        },
    },
]
