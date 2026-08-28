[
    {
        $group: {
            _id: null,
            total: { $sum: '$approvedMinutes' },
        },
    },
]
