import { Box, Stack, Typography } from '@mui/material'
import { User } from '@tokentraction/api-operations'

export function FirstRow(persona: User) {
  return (
    <Stack direction="row" gap="2rem">
      <Stack
        direction="row"
        gap="2rem"
        style={{
          padding: 24,
          borderRadius: 8,
          border: '2px #03FBBF solid',
          flex: 1,
        }}
      >
        <Box
          style={{
            height: 156,
            width: 156,
            boxShadow: '0px 26px 54.16666793823242px rgba(113, 248, 224, 0.12)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4.33px #2C57C2 solid',
          }}
          component="img"
          src={persona.pictureUrl || ''}
          alt={persona.displayName}
        />
        <Stack direction="column" justifyContent="flex-start" gap="0.5rem">
          <Typography variant="h4">{persona.displayName}</Typography>
          <Typography variant="h5">
            {persona.location?.city}, {persona.location?.state}, {persona.location?.country}
          </Typography>
          <Typography variant="h5">
            {persona.gender}, {persona.maritalStatus}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        gap="2rem"
        style={{
          padding: 24,
          borderRadius: 8,
          border: '2px #03FBBF solid',
          flex: 1,
        }}
      >
        <Typography variant="h5">Wallet Address: {persona.walletAddress}</Typography>
      </Stack>
    </Stack>
  )
}
