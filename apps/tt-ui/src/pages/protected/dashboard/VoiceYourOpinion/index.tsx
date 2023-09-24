import styled from '@emotion/styled'
import { Card, Dialog, Divider, List, ListItem, Stack, Typography } from '@mui/material'
import { VoiceYourOpinion } from '@tokentraction/api-operations'
import { Heart } from 'lucide-react'
import { Section } from '..'
import { useState } from 'react'
import { FormSubmissions } from '../Form'

interface VoiceYourOpinionProps {
  voiceYourOpinionList: Array<VoiceYourOpinion>
}

const VoiceYourOpinionCard = styled(Card)`
  border-radius: 0.5rem;
  cursor: pointer;
  border: 4px solid var(--Logo-gradient, rgba(3, 251, 191, 0.57));
  width: 25rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  .name {
    color: var(--m-3-sys-light-on-primary-container, #00174b);
    /* M3/headline/medium */
    font-family: Josefin Sans;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.25rem; /* 128.571% */
  }
  .survey {
    color: var(--m-3-sys-light-on-surface, #1b1b1f);
    font-family: Josefin Sans;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem; /* 127.273% */
  }
  .organization {
    color: var(--m-3-sys-light-on-surface-variant, #44474e);

    /* M3/body/large */
    font-family: Josefin Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.03125rem;
  }

  .organizationName {
    color: var(--m-3-sys-light-on-surface, #1b1b1f);

    /* M3/title/medium */
    font-family: Josefin Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 150% */
    letter-spacing: 0.00938rem;
  }
`
export function VoiceYourOpinionSection({ voiceYourOpinionList }: VoiceYourOpinionProps) {
  const [openForm, setOpenForm] = useState(false)
  return (
    <Section
      name="Voice Your Opinions"
      viewAllLink="/dashboard"
      icon={
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34.375 5.50003H28.1359C27.3652 4.63438 26.42 3.94161 25.3625 3.46724C24.305 2.99286 23.159 2.74762 22 2.74762C20.841 2.74762 19.695 2.99286 18.6375 3.46724C17.58 3.94161 16.6348 4.63438 15.8641 5.50003H9.625C8.89565 5.50003 8.19618 5.78976 7.68046 6.30548C7.16473 6.82121 6.875 7.52068 6.875 8.25003V37.125C6.875 37.8544 7.16473 38.5538 7.68046 39.0696C8.19618 39.5853 8.89565 39.875 9.625 39.875H34.375C35.1043 39.875 35.8038 39.5853 36.3195 39.0696C36.8353 38.5538 37.125 37.8544 37.125 37.125V8.25003C37.125 7.52068 36.8353 6.82121 36.3195 6.30548C35.8038 5.78976 35.1043 5.50003 34.375 5.50003ZM22 5.50003C23.4573 5.50456 24.8536 6.08548 25.8841 7.11595C26.9145 8.14642 27.4955 9.54273 27.5 11H16.5C16.5045 9.54273 17.0855 8.14642 18.1159 7.11595C19.1464 6.08548 20.5427 5.50456 22 5.50003ZM27.5 27.5H16.5C16.1353 27.5 15.7856 27.3552 15.5277 27.0973C15.2699 26.8394 15.125 26.4897 15.125 26.125C15.125 25.7604 15.2699 25.4106 15.5277 25.1528C15.7856 24.8949 16.1353 24.75 16.5 24.75H27.5C27.8647 24.75 28.2144 24.8949 28.4723 25.1528C28.7301 25.4106 28.875 25.7604 28.875 26.125C28.875 26.4897 28.7301 26.8394 28.4723 27.0973C28.2144 27.3552 27.8647 27.5 27.5 27.5ZM27.5 22H16.5C16.1353 22 15.7856 21.8552 15.5277 21.5973C15.2699 21.3394 15.125 20.9897 15.125 20.625C15.125 20.2604 15.2699 19.9106 15.5277 19.6528C15.7856 19.3949 16.1353 19.25 16.5 19.25H27.5C27.8647 19.25 28.2144 19.3949 28.4723 19.6528C28.7301 19.9106 28.875 20.2604 28.875 20.625C28.875 20.9897 28.7301 21.3394 28.4723 21.5973C28.2144 21.8552 27.8647 22 27.5 22Z"
            fill="url(#paint0_linear_128_64670)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_128_64670"
              x1="22"
              y1="2.74762"
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
        {voiceYourOpinionList.map(voiceYourOpinion => {
          return (
            <>
              <Dialog open={openForm} onClose={() => setOpenForm(false)}>
                <FormSubmissions submissions={voiceYourOpinion?.submissions || []} />
              </Dialog>
              <VoiceYourOpinionCard key={voiceYourOpinion._id} onClick={() => setOpenForm(true)}>
                <Typography variant="h3" component="h3" className="name">
                  {voiceYourOpinion.name}
                </Typography>
                <Typography variant="h4" component="h2" className="survey">
                  Survey Topics:
                </Typography>
                <List>
                  {voiceYourOpinion?.surveyTopics?.map(surveyTopic => {
                    return <ListItem className="survey-topics">{`👉 ${surveyTopic}`}</ListItem>
                  })}
                </List>
                <Typography variant="h4" component="h4" className="rewards">
                  Rewards
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" width={'100%'}>
                  <Typography variant="h4" component="h4" className="amount">
                    {voiceYourOpinion.amount} coins
                  </Typography>
                  <Heart size={24} />
                </Stack>
                <Divider />
                <Typography variant="h4" component="h4" className="organization">
                  Organization
                </Typography>
                <Typography variant="h4" component="h4" className="organizationName">
                  {voiceYourOpinion.organizationName}
                </Typography>
              </VoiceYourOpinionCard>
            </>
          )
        })}
      </Stack>
    </Section>
  )
}
