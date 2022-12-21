import { InputLabel, TextField } from '@mui/material'
import React, { ReactElement, memo, useState } from 'react'
import { styled } from '@mui/material/styles'

interface Props {
  placeholder: string
  id: string
  label: string
  type: string
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

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

const TextInput = ({ placeholder, id, label, type, value, onChange }: Props): ReactElement => {
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
