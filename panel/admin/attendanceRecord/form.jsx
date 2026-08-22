import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='attendanceEmployee'
        property='employee'
        required
    />
    <DateTime
        placeholder='attendanceWorkDate'
        property='workDate'
        required
    />
    <DateTime
        placeholder='attendanceCheckInDate'
        property='checkInDate'
    />
    <DateTime
        placeholder='attendanceCheckOutDate'
        property='checkOutDate'
    />
    <LongText
        placeholder='attendanceDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
