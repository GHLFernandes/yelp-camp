import { InputLabel, TextField } from '@mui/material'
import React, { ReactElement, memo, useState } from 'react'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
  backgroundColor: '#f7f7f7',
  marginTop: 15,
  '& .MuiInputBase-input': {
    fontSize: 18,
    color: 'black'
  },
  'label + &': {
    marginTop: 0
  }

})

const TextInput = ({ placeholder, id, label, size }: { placeholder: string, id: string, label: string, size: number }): ReactElement => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <>
      <InputLabel style={{ fontSize: 25 }} shrink htmlFor={id}>
        {label}
      </InputLabel>
      <CssTextField
        multiline
        rows={size}
        fullWidth
        id={id}
        placeholder={placeholder}
        margin="dense"
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default memo(TextInput)
