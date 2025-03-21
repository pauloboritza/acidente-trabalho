import React from "react";
import { View, TouchableOpacity } from "react-native";
import DatePicker from "react-native-date-picker";
import { TextInput } from "react-native-paper";


const DatePiker = ({label, setFieldValue, fieldValue, ...props}: any) =>{
  const [date, setDate] = React.useState<Date | null>(null);
  const [open, setOpen] = React.useState(false); // Controla a abertura do modal manualmente
  const temp = new Date()

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <TextInput
          editable={false}
          label={date? `${label}: ${date.toLocaleDateString()}` : `${label}: DIA/MES/ANO`}
          style={{ fontSize: 16, fontWeight: '600'}}
          {...props}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date || temp}
        mode="date"
        locale="pt"
        confirmText="OK"
        cancelText="Cancelar"
        title={label}
        onConfirm={(selectedDate) => {
          setDate(selectedDate);
          setFieldValue(fieldValue, selectedDate.toLocaleDateString());
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  )
}
export default DatePiker;