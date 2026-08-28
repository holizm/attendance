[
    { $match: { endDate: { $exists: false } } },
    { $count: 'count' },
]
