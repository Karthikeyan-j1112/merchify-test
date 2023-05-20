
import { Stack, Box, Typography, Button, FormControl, FormControlLabel, RadioGroup, Radio, Modal } from "@mui/material"
import data from '../quizs/quiz1.json'
import { useState, useEffect } from 'react'

function Quiz(props: any) {
    const { questions } = data
    const [currentQuesNo, setCurrentQuesNo] = useState<number>(1)
    const [currentAns, setCurrentAns] = useState<string>('')
    const [modalOpen1, setModalOpen1] = useState<boolean>(false)
    const [modalOpen2, setModalOpen2] = useState<boolean>(false)
    const { setAnswers, setTimeTaken } = props

    const [time, setTime] = useState<number>(data.time)

    useEffect(() => {        
        const interval = setInterval(() => {
            setTime(prev => {
                if (prev <= 0) {
                    clearInterval(interval)
                    setTimeTaken(prev)
                    setModalOpen1(true)
                    return prev
                }
                return prev - 1
            })
        }, 1000)
    }, [])
    const handleNext = () => {
        setAnswers((prev: object) => {
            const quesId = questions[currentQuesNo - 1].id
            return { ...prev, [quesId] : currentAns }
        })
        if (currentQuesNo === data.noOfQuestion) {
            setModalOpen2(true)
        }
        else {
            setCurrentQuesNo(prev => prev + 1)
        }
    }

    return (
        <div>
            <Stack spacing={3} height='100vh' >
                <header  >
                    <Stack spacing={2} direction='row' justifyContent='space-between' margin='5px' paddingLeft='10px' paddingRight='10px' >
                        <Button
                            variant="contained"
                            sx={{ width: '100px', fontSize: '12px' }}
                            style={{ borderRadius: '50px', textTransform: 'none' }}
                            onClick={() => props.setPage('quiz')}
                        >
                            {String(currentQuesNo).padStart(2, '0')} / {String(data.noOfQuestion).padStart(2, '0')}
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ width: '100px', fontSize: '12px' }}
                            style={{ borderRadius: '50px', textTransform: 'none' }}
                            onClick={() => props.setPage('quiz')}
                        >
                            {String(Math.floor(time / 60)).padStart(2, '0')} : {String(time % 60).padStart(2, '0')}
                        </Button>
                    </Stack>
                </header>
                <table
                    style={{
                        height: '100%',
                        width: '100%',
                        borderCollapse: 'collapse'
                    }}
                >
                    <tr><td valign="top">
                        <Box
                            sx={{
                                paddingRight: '5px',
                            }}
                            textAlign='left'
                            paddingLeft='20px'
                        >
                            <Typography>{questions[currentQuesNo - 1].question}</Typography>

                        </Box>
                    </td> </tr>
                    <tr><td valign="bottom">
                        <Stack width='100%' spacing={2} alignItems='center'
                            sx={{
                                width: '100%',
                                marginBottom: '20px'
                            }}
                        >
                            <FormControl
                                sx={{
                                    width: '90%'
                                }}
                            >

                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    onChange={(e) => setCurrentAns(e.target.value)}
                                >
                                    <Stack spacing={1} >
                                        <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', textTransform: 'none' }} style={{ textAlign: 'left' }} >
                                            <FormControlLabel sx={{ width: '100%' }} control={<Radio />} value={questions[currentQuesNo - 1].options[0].id} label={questions[currentQuesNo - 1].options[0].value} />
                                        </Button>
                                        <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', textTransform: 'none' }} >
                                            <FormControlLabel sx={{ width: '100%' }} control={<Radio />} value={questions[currentQuesNo - 1].options[1].id} label={questions[currentQuesNo - 1].options[1].value} />
                                        </Button>
                                        <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', textTransform: 'none' }} >
                                            <FormControlLabel sx={{ width: '100%' }} control={<Radio />} value={questions[currentQuesNo - 1].options[2].id} label={questions[currentQuesNo - 1].options[2].value} />
                                        </Button>
                                        <Button variant="contained" sx={{ bgcolor: 'white', color: 'black', textTransform: 'none' }} >
                                            <FormControlLabel sx={{ width: '100%' }} control={<Radio />} value={questions[currentQuesNo - 1].options[3].id} label={questions[currentQuesNo - 1].options[3].value} />
                                        </Button>
                                    </Stack>
                                </RadioGroup>
                                <Stack spacing={1} marginTop={2} width='100%' alignItems='center' >
                                    <Button
                                        onClick={handleNext}
                                        variant="contained"
                                        sx={{ width: '130px', fontWeight: '600' }}
                                        style={{ borderRadius: '50px', textTransform: 'none' }}
                                    >
                                        {(currentQuesNo !== data.noOfQuestion) ? 'Next' : 'Submit'}
                                    </Button>
                                </Stack>
                            </FormControl>
                        </Stack>
                    </td></tr>
                </table>
            </Stack>
            <Modal
                open={modalOpen1}
                onClose={() => { }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    bgcolor: 'background.paper',
                    padding: '20px'
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Time Up
                    </Typography>
                    <Typography gutterBottom id="modal-modal-description" sx={{ mt: 2 }}>
                        You are out of time
                    </Typography>
                    <Button variant="contained" onClick={() => props.setPage('result')} >Submit</Button>
                </Box>
            </Modal>
            <Modal
                open={modalOpen2}
                onClose={() => { setModalOpen2(false) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '85%',
                    bgcolor: 'background.paper',
                    padding: '20px'
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Congrats
                    </Typography>
                    <Typography gutterBottom id="modal-modal-description" sx={{ mt: 2 }}>
                        You have successfully submitted the quiz
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setTimeTaken(time)
                            props.setPage('result')
                        }} > Check Result </Button>
                </Box>
            </Modal>
        </div >
    )
}

export default Quiz