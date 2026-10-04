import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        employee
        required
    />
    <Text
        leaveType
        required
    />
    <DateTime
        required
        startDate
    />
    <DateTime
        endDate
        required
    />
    <Numeric
        requestedMinutes
        required
    />
    <LongText reason />
</>

export default <DialogForm inputs={inputs} />
