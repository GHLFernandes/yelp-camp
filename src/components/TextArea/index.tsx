import { InputLabel, TextField } from '@mui/material'
import React, { ReactElement, memo, useState } from 'react'
import { styled } from '@mui/material/styles'

interface Props {
  placeholder: string
  size: number
  id: string
  label: string
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

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

const TextInput = ({ placeholder, id, label, size, value, onChange }: Props): ReactElement => {
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
        onChange={onChange}
      />
    </>
  )
}

export default memo(TextInput)
