import { InputAdornment, TextField } from '@mui/material'
import type { FC } from 'react'
import React, { memo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Search } from '@mui/icons-material'

const CssTextField = styled(TextField)({
  backgroundColor: 'white',
  marginTop: 15,
  '& .MuiInputBase-input': {
    fontSize: 18,
    color: 'black',
    height: '0.5em'
  }

})

interface InputSearchProps {
  placeholder: string
  className: string
}

const InputText: FC<InputSearchProps> = (props) => {
  const { placeholder, className } = props
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <CssTextField
      fullWidth
      id="search"
      placeholder={placeholder}
      className={className}
      margin="dense"
      value={value}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        )
      }}
    />
  )
}

export default memo(InputText)
