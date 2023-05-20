import { Stack, IconButton, Card, CardContent, Typography, Divider, Button } from '@mui/material'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import React, { useEffect, useState } from 'react'
import quiz from '../quizs/quiz1.json'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

function Result(props: any) {
  const { timeTaken, answers } = props

  const [score, setScore] = useState<number>(0)
  const [precent, setPercent] = useState<number>(0)  
  useEffect(() => {    
    if (answers) {
      for (let ques of quiz.questions) {
        const selectedAns = answers[ques.id]
        console.log(selectedAns);
        if (selectedAns === ques.answerId) {
          setScore(prev => prev + 1)
        }
      }
    }
  }, [])

  useEffect(() => {
    setPercent(parseFloat((score * 100 / quiz.noOfQuestion).toFixed(2)))
  }, [score])

  const messages = {
    pass: {
      heading: 'Nice. you have passed the quiz',
      message: "Success is not the end of the journey; it is a testament to the dedication and hard work of the accomplished candidate. It's a reminder that with determination and resilience, one can achieve remarkable heights."
    },
    fail: {
      heading: 'Oh Snap. You can do better!',
      message: "Success is not final. failure is not fatal; It is the courage to continue that counts."
    }
  }

  return (
    <div>
      <Stack component='header' alignItems='flex-start' paddingLeft='15px' >
        <IconButton onClick={() => props.setPage('main')} >
          <ArrowBackRoundedIcon />
        </IconButton >
      </Stack>
      <Stack spacing={3} sx={{ bgcolor: '#f2def9' }} paddingBottom='20px' >
        <Typography
          variant="h6"
          fontWeight='600'
          fontFamily='monospace'
          component='div'
          textAlign='left'
          textOverflow='clip'
          marginTop='20px'
          sx={{
            textAlign: 'center'
          }}
        >
          {quiz.name}
        </Typography>
        <Stack
          direction={{
            xs: 'column',
            md: 'row'
          }}
          alignItems='center'
        >
          <Card
            sx={{
              margin: 'auto', marginTop: '0', borderRadius: '10px', width: {
                xs: '90%',
                md: '45%'
              },
              marginBottom: '10px'
            }}
          >
            <CardContent >
              <Typography variant='subtitle2' gutterBottom color='green' fontWeight='600' > You scored:</Typography>
              <Typography variant='h3' gutterBottom fontWeight='bold' color='purple'>{precent}%</Typography>
              <Typography variant='subtitle1' gutterBottom fontWeight='600' >{precent >= quiz.passPercentage ? messages.pass.heading : messages.fail.heading} </Typography>
              <Typography variant='body2'>{precent >= quiz.passPercentage ? messages.pass.message : messages.fail.message}</Typography>
            </CardContent>
          </Card>
          <Stack color='purple'
            width={{
              xs: '90%',
              md: '45%'
            }}
            alignItems='center'
          >
            <Stack spacing={0} direction='row' width='100%' divider={<Divider orientation="vertical" flexItem />} >
              <Stack alignItems='center' width='50%' >
                <Typography variant='subtitle1' fontWeight='bold' > Your Score </Typography>
                <Typography variant='h3' >{score}/{quiz.noOfQuestion}</Typography>
              </Stack>
              <Stack alignItems='center' width='50%'  >
                <Typography variant='subtitle1' fontWeight='bold' > Time Taken </Typography>
                <Stack direction='row' alignItems='baseline' sx={{ fontWeight: 'bold' }} >
                  <Typography variant='h4' >
                    {String(Math.floor(timeTaken / 60))}:{String(timeTaken % 60).padStart(2, '0')}
                  </Typography>
                  <Typography  >mins</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack marginTop='10px' >
              <Button
                disableRipple
                style={{ textTransform: 'none', color: 'purple' }}
                startIcon={<ShareRoundedIcon />}
              >
                Share with your friends
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

export default Result