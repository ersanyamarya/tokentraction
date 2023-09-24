import { Box, Card, Typography, Stack, Dialog } from '@mui/material'
import { UsabilityTesting } from '@tokentraction/api-operations'
import { Section } from '..'
import styled from '@emotion/styled'
import { Heart } from 'lucide-react'
import { FormSubmissions } from '../Form'
import { useState } from 'react'

interface CrowdFundedProps {
  usabilityTestingList: Array<UsabilityTesting>
}

const CrowdFundedCard = styled(Card)`
  cursor: pointer;
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
    color: var(--m-3-sys-light-on-primary, #fff);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 120% */
    letter-spacing: 0.03125rem;
  }
  .amount {
    color: var(--m-3-sys-light-on-primary-container, #00174b);
    font-family: Josefin Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03125rem;
  }
  .description {
    padding: 1rem;
    color: var(--m-3-sys-light-on-primary, #fff);
    background: linear-gradient(180deg, #2c57c2 -43.66%, #000 100%);
    font-family: Josefin Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
  }
`
export function UsabilityTestingSection({ usabilityTestingList }: CrowdFundedProps) {
  const [openForm, setOpenForm] = useState(false)
  return (
    <Section
      name="Usability Testing"
      viewAllLink="/dashboard"
      icon={
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40.8547 14.8328L30.5422 4.52031C30.2815 4.26211 29.9294 4.11726 29.5625 4.11726C29.1956 4.11726 28.8435 4.26211 28.5828 4.52031L10.725 22.3953L6.23906 26.8641C4.79404 28.3091 3.98224 30.2689 3.98224 32.3125C3.98224 34.3561 4.79404 36.3159 6.23906 37.7609C7.68407 39.206 9.64393 40.0178 11.6875 40.0178C13.7311 40.0178 15.6909 39.206 17.1359 37.7609L30.525 24.3547L36.4891 18.3906L40.3047 17.1187C40.5278 17.0421 40.7282 16.9107 40.8873 16.7365C41.0465 16.5623 41.1594 16.351 41.2156 16.1219C41.2655 15.8939 41.2587 15.6571 41.1957 15.4324C41.1328 15.2076 41.0157 15.0018 40.8547 14.8328ZM35.3203 15.8813C35.117 15.9524 34.93 16.0634 34.7703 16.2078L28.6516 22.3266C28.2906 22.6016 25.575 24.3203 21.2437 22.1375C19.3531 21.1922 17.6687 20.8313 16.225 20.7797L29.5625 7.44219L37.3312 15.2109L35.3203 15.8813Z"
            fill="url(#paint0_linear_87_57855)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_87_57855"
              x1="22.6154"
              y1="4.11726"
              x2="22.6154"
              y2="40.0178"
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
        {usabilityTestingList.map(crowdfundeddata => {
          return (
            <>
              <Dialog open={openForm} onClose={() => setOpenForm(false)}>
                <FormSubmissions submissions={crowdfundeddata?.submissions || []} />
              </Dialog>
              <CrowdFundedCard key={crowdfundeddata._id} onClick={() => setOpenForm(true)}>
                <Typography variant="h2" component="h2" className="organizationName">
                  {crowdfundeddata.organizationName}
                </Typography>

                <Box className="picture" component="img" src={crowdfundeddata.pictureUrl || ''} />
                <Typography variant="h4" component="h4" className="rewards">
                  Rewards
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" width={'100%'}>
                  <Typography variant="h4" component="h4" className="amount">
                    {crowdfundeddata.amount} coins
                  </Typography>
                  <Heart size={24} />
                </Stack>
                <Typography variant="h4" component="h4" className="description">
                  {crowdfundeddata.description}
                </Typography>
              </CrowdFundedCard>
            </>
          )
        })}
      </Stack>
    </Section>
  )
}
