import { Box, Card, Typography, Stack } from '@mui/material'
import { CrowdFundedData } from '@tokentraction/api-operations'
import { Section } from '..'
import styled from '@emotion/styled'
import { Heart } from 'lucide-react'

interface CrowdFundedProps {
  crowdfundeddataList: Array<CrowdFundedData>
}

const CrowdFundedCard = styled(Card)`
  border-radius: 0.5rem;
  background: linear-gradient(181deg, #2c57c2 -1.72%, #000 43.23%, #71f8e0 95.59%);
  width: 25rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  .organizationName {
    color: var(--m-3-sys-light-on-primary, #fff);
    font-family: Josefin Sans;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.25rem;
  }
  .name {
    color: var(--m-3-sys-light-on-primary, #fff);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
  }
  .picture {
    border-radius: 0.25rem;
    background: url(<path-to-image>), lightgray 50% / cover no-repeat, #dbe1ff;
    box-shadow: -2px -2px 4px 0px rgba(113, 248, 224, 0.25), 2px 2px 4px 0px rgba(113, 248, 224, 0.25);
    height: 17.75rem;
    width: 100%;
  }
  .rewards {
    color: var(--m-3-sys-light-on-primary, #FFF);
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
line-height: 1.5rem; /* 120% */
letter-spacing: 0.03125rem;
  }
  .amount {
    color: var(--m-3-sys-light-on-primary-container, #00174B);
font-family: Josefin Sans;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: 1.5rem; /* 150% */
letter-spacing: 0.03125rem;
  }
  .description {
    color: var(--m-3-sys-light-on-primary-container, #00174B);
/* M3/title/medium */
font-family: Josefin Sans;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: 1.5rem; /* 150% */
letter-spacing: 0.00938rem;
  }
`
export function CrowdFunded({ crowdfundeddataList }: CrowdFundedProps) {
  return (
    <Section
      name="Crowd Funded Data"
      viewAllLink="/dashboard"
      icon={
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 4.125C12.7531 4.125 5.5 8.35313 5.5 13.75V30.25C5.5 35.6469 12.7531 39.875 22 39.875C31.2469 39.875 38.5 35.6469 38.5 30.25V13.75C38.5 8.35313 31.2469 4.125 22 4.125ZM35.75 22C35.75 23.65 34.3922 25.3344 32.0375 26.6234C29.3734 28.0844 25.8156 28.875 22 28.875C18.1844 28.875 14.6266 28.0844 11.9625 26.6234C9.60781 25.3344 8.25 23.65 8.25 22V19.1469C11.1891 21.7078 16.1906 23.375 22 23.375C27.8094 23.375 32.8109 21.7078 35.75 19.1469V22ZM32.0375 34.8734C29.3734 36.3344 25.8156 37.125 22 37.125C18.1844 37.125 14.6266 36.3344 11.9625 34.8734C9.60781 33.5844 8.25 31.9 8.25 30.25V27.3969C11.1891 29.9578 16.1906 31.625 22 31.625C27.8094 31.625 32.8109 29.9578 35.75 27.3969V30.25C35.75 31.9 34.3922 33.5844 32.0375 34.8734Z"
            fill="url(#paint0_linear_87_57931)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_87_57931"
              x1="22"
              y1="4.125"
              x2="22"
              y2="39.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#03FBBF" stopOpacity="0.57" />
              <stop offset="1" stopColor="#2D46C8" stopOpacity="0.98" />
            </linearGradient>
          </defs>
        </svg>
      }
    >
      <Stack direction="row" alignItems="center" justifyContent="unset" width={'100%'} gap={2}>
        {crowdfundeddataList.map(crowdfundeddata => {
          return (
            <CrowdFundedCard key={crowdfundeddata._id}>
              <Typography variant="h2" component="h2" className="organizationName">
                {crowdfundeddata.organizationName}
              </Typography>
              <Typography variant="h3" component="h3" className="name">
                {crowdfundeddata.name}
              </Typography>
              <Box className="picture" component="img" src={crowdfundeddata.pictureUrl} />
              <Typography variant="h4" component="h4" className="rewards">
               Rewards
              </Typography>
              <Stack direction="row" alignItems="center" justifyContent="space-between" width={'100%'} >
                <Typography variant="h4" component="h4" className="amount">
                  {crowdfundeddata.amount} coins
                </Typography>
                <Heart size={24} />
              </Stack>
              <Typography variant="h4" component="h4" className="description">
                {crowdfundeddata.description}
              </Typography>
            </CrowdFundedCard>
          )
        })}
      </Stack>
    </Section>
  )
}
