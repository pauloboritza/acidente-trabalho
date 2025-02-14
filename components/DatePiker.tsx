import React from "react";
import { DatePickerInput, registerTranslation, pt } from 'react-native-paper-dates';
registerTranslation('pt', pt);
const DatePiker = ({label, setFieldValue, fieldValue, ...props}: any) =>{
  const [date, setDate] = React.useState(undefined)

  return (
    <DatePickerInput
      locale='pt'
      label={label}
      value={date}
      onChange={(d: any)=>{
          setFieldValue(fieldValue, d);
          setDate(d)}}
      inputMode='start'
      style={{marginBottom: 15}}
      {...props}
    />  
  )
}
export default DatePiker;