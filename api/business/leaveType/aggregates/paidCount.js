[
    { $match: { paid: true } },
    { $count: 'count' },
]
