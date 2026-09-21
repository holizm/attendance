import {
    DialogForm,
    Numeric,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='attendanceCode'
        property='code'
        required
    />
    <Text
        placeholder='coreStartTime'
        property='startTime'
        required
    />
    <Text
        placeholder='coreEndTime'
        property='endTime'
        required
    />
    <Numeric
        placeholder='attendanceBreakMinutes'
        property='breakMinutes'
    />
    <Numeric
        placeholder='attendanceLateToleranceMinutes'
        property='lateToleranceMinutes'
    />
</>

export default <DialogForm inputs={inputs} />
