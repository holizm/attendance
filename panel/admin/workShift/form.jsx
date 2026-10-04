import {
    DialogForm,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        code
        required
    />
    <Text
        required
        startTime
    />
    <Text
        endTime
        required
    />
    <Numeric breakMinutes />
    <Numeric lateToleranceMinutes />
</>

export default <DialogForm inputs={inputs} />
