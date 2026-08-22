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
        placeholder='attendanceStartTime'
        property='startTime'
        required
    />
    <Text
        placeholder='attendanceEndTime'
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
