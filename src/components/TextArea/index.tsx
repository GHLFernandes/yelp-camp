import { InputLabel, TextField } from '@mui/material'
import type { FC } from 'react'
import React, { memo } from 'react'
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

interface TextInputProps {
  placeholder: string
  size: number
  id: string
  label: string
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}

const TextInput: FC<TextInputProps> = (props) => {
  const { placeholder, size, id, label, value, onChange } = props

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
