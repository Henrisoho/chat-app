import { Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import Chats from './Chats'

const GeneralApp = () => {
  const theme = useTheme()
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Chats />
    </Stack>
  )
}

export default GeneralApp
