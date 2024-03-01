import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import './Pets.css'

export interface PetsProps {
    title: string,
    description: string,
    imgScr: string
}

export const Pets = ({ title, description, imgScr }: PetsProps) => {
    return (
        <>
            <Paper elevation={24} className='petsPost' >
                {/* Title */}
                <div style={{ display: 'flex', flexDirection: 'column'}}>
                    <span style={{ flex: '1'}}>
                        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                            {title}
                        </Typography>
                    </span>
                </div>

                <Divider />
                
                <div style={{ display: 'flex', flexDirection: 'column', padding: '10px'}}>
                    {/* Image */}
                    <span>
                        <img src={imgScr} alt='Pet' style={{ maxWidth: '85%' }}/>
                    </span>
                    
                    {/* Disciption */}
                    <Typography variant="subtitle1" gutterBottom>
                        {description}
                    </Typography>
                </div>

            </Paper>
        </>
        
    )
}