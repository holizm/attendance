import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='employee'
        property='employee'
        required
    />
    <Text
        placeholder='leaveType'
        property='leaveType'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
        required
    />
    <Numeric
        placeholder='requestedMinutes'
        property='requestedMinutes'
        required
    />
    <LongText
        placeholder='reason'
        property='reason'
    />
</>

export default <DialogForm inputs={inputs} />
