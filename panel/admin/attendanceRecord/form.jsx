import {
    DateTime,
    DialogForm,
    LongText,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='employee'
        property='employee'
        required
    />
    <DateTime
        placeholder='workDate'
        property='workDate'
        required
    />
    <DateTime
        placeholder='checkInDate'
        property='checkInDate'
    />
    <DateTime
        placeholder='checkOutDate'
        property='checkOutDate'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
