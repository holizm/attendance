[
    {
        $group: {
            _id: null,
            total: { $sum: '$requestedMinutes' },
        },
    },
]
