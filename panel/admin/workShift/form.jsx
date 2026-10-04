import {
    DialogForm,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='code'
        property='code'
        required
    />
    <Text
        placeholder='startTime'
        property='startTime'
        required
    />
    <Text
        placeholder='endTime'
        property='endTime'
        required
    />
    <Numeric
        placeholder='breakMinutes'
        property='breakMinutes'
    />
    <Numeric
        placeholder='lateToleranceMinutes'
        property='lateToleranceMinutes'
    />
</>

export default <DialogForm inputs={inputs} />
