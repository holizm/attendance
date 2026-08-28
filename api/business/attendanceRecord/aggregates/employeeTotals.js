[
    { $match: { employee } },
    {
        $group: {
            _id: null,
            earlyDepartureMinutes: { $sum: '$earlyDepartureMinutes' },
            lateMinutes: { $sum: '$lateMinutes' },
            workedMinutes: { $sum: '$workedMinutes' },
        },
    },
]
