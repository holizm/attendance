import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        employee
        required
    />
    <DateTime
        required
        workDate
    />
    <DateTime checkInDate />
    <DateTime checkOutDate />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
