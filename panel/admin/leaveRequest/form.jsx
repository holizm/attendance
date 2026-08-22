import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='attendanceEmployee'
        property='employee'
        required
    />
    <Text
        placeholder='attendanceLeaveType'
        property='leaveType'
        required
    />
    <DateTime
        placeholder='attendanceStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='attendanceEndDate'
        property='endDate'
        required
    />
    <Numeric
        placeholder='attendanceRequestedMinutes'
        property='requestedMinutes'
        required
    />
    <LongText
        placeholder='attendanceReason'
        property='reason'
    />
</>

export default <DialogForm inputs={inputs} />
