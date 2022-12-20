import { InputLabel, TextField } from '@mui/material'
import React, { ReactElement, memo, useState } from 'react'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
  backgroundColor: '#efefef',
  marginBottom: 15,
  '& .MuiInputBase-input': {
    fontSize: 18,
    color: 'black',
    paddingTop: 18,
    paddingBottom: 18
  },
  'label + &': {
    marginTop: 0
  }

})

const TextInput = ({ placeholder, id, label, type }: { placeholder: string, id: string, label: string, type: string }): ReactElement => {
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
        type={type}
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
