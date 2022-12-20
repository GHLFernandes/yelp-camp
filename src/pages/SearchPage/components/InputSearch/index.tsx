import { InputAdornment, TextField } from '@mui/material'
import React, { ReactElement, memo, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Search } from '@mui/icons-material'

const CssTextField = styled(TextField)({
  backgroundColor: 'white',
  marginTop: 15,
  '& .MuiInputBase-input': {
    fontSize: 18,
    color: 'black',
    paddingTop: 18,
    paddingBottom: 18
  }

})

const InputText = ({ placeholder }: { placeholder: string }): ReactElement => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <CssTextField
      fullWidth
      id="search"
      placeholder={placeholder}
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
