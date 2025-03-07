import React from "react";
import { View, TouchableOpacity } from "react-native";
import TimePicker from "react-native-date-picker";
import { TextInput } from "react-native-paper";

const TimePiker = ({label, setFieldValue, fieldValue, ...props}: any) =>{
  const [date, setDate] = React.useState<Date | null>(null);
  const [open, setOpen] = React.useState(false); // Controla a abertura do modal manualmente
  const temp = new Date()

  return (
    <View>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <TextInput
          editable={false}
          label={date? `${label}: ${date.toLocaleTimeString()}` : `${label}: 00:00`}
          style={{ fontSize: 16, fontWeight: '600'}}
          {...props}
        />
      </TouchableOpacity>
      <TimePicker
        modal
        open={open}
        date={date || temp}
        mode="time"
        locale="pt"
        confirmText="OK"
        cancelText="Cancelar"
        title={label}
        onConfirm={(selectedDate) => {
          setDate(selectedDate);
          setFieldValue(fieldValue, selectedDate.toLocaleTimeString());
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />
    </View>
  )
}
export default TimePiker;