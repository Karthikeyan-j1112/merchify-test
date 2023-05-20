import { Avatar, Card, CardMedia, IconButton, Stack, Box, Typography, Button, Divider, AvatarGroup, Rating, Modal } from "@mui/material"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import quiz from '../quizs/quiz1.json'
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

import { useEffect, useState } from "react";

function Main(props: any) {
    const [saved, setSaved] = useState<boolean>(false)
    const [readMore, setReadMore] = useState<boolean>(false)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    useEffect(() => {
        props.setAnswers({})
    }, [])
    return (
        <Stack spacing={3} paddingBottom='20px' minWidth='300px' >
            <header >
                <Stack spacing={2} direction='row' justifyContent='right' paddingRight='25px'  >
                    <IconButton><SearchRoundedIcon /></IconButton>
                    <Avatar alt="profile pic" src="/static/images/BananaCat.jpg" />
                </Stack>
            </header>
            <Stack spacing={1.5} alignItems='center'  >
                <Card
                    sx={{
                        margin: 'auto',
                        width: {
                            xs: '90%'
                        },
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }
                    }}
                    elevation={0}
                >
                    <CardMedia
                        component='img'
                        sx={{
                            height: {
                                xs: 'auto',                                
                                sm: 300,
                                md: 250
                            },
                            width: {
                                xs: '100%',
                                sm: 600,
                                md: 500
                            }
                        }}
                        image="/static/images/QuizImage.png"
                    />
                    <Stack                        
                        sx={{
                            margin: 'auto',
                            marginTop: {
                                md: '20px'
                            },
                            marginBottom: '10px'
                        }}
                        spacing={2}
                    >
                        <Typography                            
                            variant="h6"
                            fontWeight='600'
                            fontFamily='monospace'
                            component='div'
                            textAlign='left'
                            textOverflow='clip'
                        >
                            {quiz.name}
                        </Typography>
                        <Stack spacing={0} direction='row' divider={<Divider orientation="vertical" flexItem />} >
                            <Stack alignItems='flex-start' width='50%' justifyContent='space-between' >
                                <Button
                                    sx={{
                                        fontSize: {
                                            xs: '10px'
                                        },
                                        fontWeight: 'bold',
                                        color: 'black',
                                        ":hover": {
                                            color: 'purple'
                                        }
                                    }}
                                    variant="text"
                                    startIcon={
                                        <CommentRoundedIcon />
                                    }
                                    style={{ textTransform: 'none' }}
                                >Leave a Comment</Button>
                                <Button
                                    sx={{
                                        fontSize: {
                                            xs: '10px'
                                        },
                                        fontWeight: 'bold',
                                        color: 'black',
                                        ":hover": {
                                            color: 'purple'
                                        }
                                    }}
                                    onClick={() => setSaved(!saved)}
                                    variant="text"
                                    startIcon={
                                        saved ? <BookmarkRoundedIcon
                                            sx={{
                                                color: 'orange'
                                            }}
                                        /> :
                                            <BookmarkBorderRoundedIcon />
                                    }
                                    style={{ textTransform: 'none' }}
                                >Save the Quiz</Button>
                                <Button
                                    sx={{
                                        fontSize: {
                                            xs: '10px'
                                        },
                                        fontWeight: 'bold',
                                        color: 'black',
                                        ":hover": {
                                            color: 'purple'
                                        }
                                    }}
                                    startIcon={
                                        <HandshakeIcon />
                                    }
                                    variant="text"
                                    style={{ textTransform: 'none' }}
                                >
                                    Challenge a Friend
                                </Button>
                            </Stack>
                            <Stack alignItems='flex-end' width='50%' >
                                <Stack alignItems='flex-start' spacing={0.5} justifyContent='space-evenly' height='90%' >
                                    <AvatarGroup max={5} total={100}
                                        sx={{
                                            '& .MuiAvatar-root': { width: 20, height: 20, fontSize: 10 },
                                        }}
                                    >
                                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=male" />
                                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=female" />
                                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=male" />
                                        <Avatar alt="" src="https://xsgames.co/randomusers/avatar.php?g=female" />
                                    </AvatarGroup>
                                    <Typography variant="body1" fontSize='10px' gutterBottom >People enrolled</Typography>
                                    <Rating size="small" name="rating" defaultValue={4.5} precision={0.5} />
                                    <Typography fontSize='10px' > 40 Ratings (4.5) </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Card>
                <Stack width='90%' alignItems='flex-start' textAlign='left'>
                    {
                        readMore ? <>
                            <Box
                                sx={{
                                    paddingRight: '5px'
                                }}
                            >
                                {quiz.description}
                            </Box>
                            <Button sx={{ fontWeight: 'bold' }} color="success" onClick={() => setReadMore(!readMore)}>Show Less</Button></>
                            : <>
                                <Box
                                    sx={{
                                        height: 45,
                                        overflow: 'clip',
                                        paddingRight: '5px'
                                    }}
                                >
                                    {quiz.description}
                                </Box>
                                <Button sx={{ fontWeight: 'bold' }} color="success" onClick={() => setReadMore(!readMore)}>Read more</Button>
                            </>
                    }

                </Stack>
                <Stack alignItems='flex-start' width='90%' >
                    <Typography variant="subtitle1" fontWeight='bold' >This Quiz Includes</Typography>
                    <Button
                        sx={{
                            fontSize: {
                                xs: '15px'
                            },
                            fontWeight: 'bold',
                            color: 'black',
                            cursor: "default"
                        }}
                        variant="text"
                        startIcon={
                            <TextSnippetOutlinedIcon />
                        }
                        disableRipple
                        style={{ textTransform: 'none' }}
                    >
                        {quiz.passPercentage}% Passing Percentage
                    </Button>
                    <Button
                        sx={{
                            fontSize: {
                                xs: '15px'
                            },
                            fontWeight: 'bold',
                            color: 'black',
                            cursor: "default"
                        }}
                        variant="text"
                        startIcon={
                            <HelpOutlineOutlinedIcon />
                        }
                        disableRipple
                        style={{ textTransform: 'none' }}
                    >
                        {quiz.noOfQuestion} questions
                    </Button>
                    <Button
                        sx={{
                            fontSize: {
                                xs: '15px'
                            },
                            fontWeight: 'bold',
                            color: 'black',
                            cursor: "default"
                        }}
                        variant="text"
                        startIcon={
                            <AccessTimeOutlinedIcon />
                        }
                        disableRipple
                        style={{ textTransform: 'none' }}
                    >
                        {quiz.time / 60} mins {quiz.time % 60} secs
                    </Button>
                    <Button
                        sx={{
                            fontSize: {
                                xs: '15px'
                            },
                            fontWeight: 'bold',
                            color: 'black',
                            cursor: "default"
                        }}
                        variant="text"
                        startIcon={
                            <ViewStreamIcon />
                        }
                        disableRipple
                        style={{ textTransform: 'none' }}
                    >
                        1 Attempt daily
                    </Button>
                </Stack>
            </Stack >
            <Stack width="100%" alignItems='center'>
                <Button
                    variant="contained"
                    sx={{ width: '130px', fontWeight: '600' }}
                    style={{ borderRadius: '50px', textTransform: 'none' }}
                    onClick={() => setModalOpen(true)}
                >Take Quiz</Button>
            </Stack>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translate(-50%, -90%)',
                        width: '100%',
                        bgcolor: 'background.paper',
                        borderRadius: '10px',
                        paddingBottom: '70px',
                        paddingTop: '20px'
                    }}
                >
                    <Stack margin='20px' spacing={4} marginBottom='30px'>
                        <Typography fontWeight='bold' variant="h5" component="h2">
                            Quiz Rules
                        </Typography>
                        <Stack direction='row' spacing={1} >
                            <AccessTimeOutlinedIcon fontSize="large" />
                            <Stack >
                                <Typography fontSize='15px' fontWeight='bold' >{quiz.time / 60} mins {quiz.time % 60} secs</Typography>
                                <Typography fontSize='13px' >Keep in mind that it's a time-bound quiz</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={1} >
                            <HelpOutlineOutlinedIcon fontSize="large" />
                            <Stack >
                                <Typography fontSize='15px' fontWeight='bold' >{quiz.noOfQuestion} questions</Typography>
                                <Typography fontSize='13px' >We believe that you will ace it!</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={1} >
                            <CheckCircleOutlineRoundedIcon fontSize="large" />
                            <Stack >
                                <Typography fontSize='15px' fontWeight='bold' >{quiz.passPercentage}% Passing Criteria</Typography>
                                <Typography fontSize='13px' >All the best! See you on the other</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack alignItems='center' >
                        <Button
                            variant="contained"
                            sx={{ width: '130px', fontWeight: '600' }}
                            style={{ borderRadius: '50px', textTransform: 'none' }}
                            onClick={() => props.setPage('quiz')}
                        >
                            Start
                        </Button>
                    </Stack>
                </Box>
            </Modal>

        </Stack >
    )
}

export default Main