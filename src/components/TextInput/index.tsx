import { InputLabel, TextField } from '@mui/material'
import type { FC } from 'react'
import React, { memo } from 'react'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
  backgroundColor: '#f7f7f7',
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

interface TextInputProps {
  placeholder: string
  id: string
  label: string
  type: string
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const TextInput: FC<TextInputProps> = (props) => {
  const { placeholder, id, label, type, value, onChange } = props
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
        onChange={onChange}
      />
    </>
  )
}

export default memo(TextInput)
