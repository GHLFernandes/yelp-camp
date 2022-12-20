import { Box, FormControl, InputAdornment, TextField } from '@mui/material'
import React, { ReactElement, memo, useState } from 'react'
import { Search } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

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

const InputText = (): ReactElement => {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <Box>
      <FormControl
        fullWidth
        variant="standard">
        <CssTextField
          fullWidth
          id="search"
          placeholder='Search for camps'
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
      </FormControl>
    </Box>

  )
}

export default memo(InputText)
