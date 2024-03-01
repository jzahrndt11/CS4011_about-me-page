import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { NavBar } from '../navBar/NavBar';

import jeremySrc from './jeremy.jpg'

export const AboutMe = () => {
    return (
        <>
            <NavBar />

            <Paper elevation={10} className='petsPost' style={{ textAlign: 'center', backgroundColor: 'lightblue'}}>
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <span style={{ flex: '1'}}>
                        <Typography variant="h3" gutterBottom>
                            About Me Page
                        </Typography>
                    </span>
                </div>
                <Divider />
                
                <div style={{ display: 'flex', flexDirection: 'column', padding: '10px'}}>
                    <span style={{ padding: '10px' }}>
                        <img src={jeremySrc} alt='Jeremy'/>
                    </span>
                    
                    <Typography variant="body1" gutterBottom>
                        Hello Everyone, My name is Jeremy Zahrndt this will be my last semester at UMSL been here for the last 3 years 
                        pursuing a Computer Science Degree. I chose this class because I would like to get into full-stack programming and 
                        I enjoyed 3010 so thought this class would be a perfect fit for me. I chose Computer Science for my major because I was 
                        always good at math and enjoyed a visual basic class back in high school, so I just continued from there now I am a semester 
                        away from graduating. Some fun facts about me are that I love snowboarding, and haven't taken many trips in the last couple 
                        of years but throughout high school and community college, I went 5-8 times a year mostly in Colorado. 
                        Also, have a dog, a German Shepard named Bear. 
                    </Typography>
                </div>
            </Paper>
        </>
        
    )
}