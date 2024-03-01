import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useLocation} from 'react-router'



export default function NavTabs() {
    const navigate = useNavigate()
    const location = useLocation()
    const [value, setValue] = React.useState(0);

    const paths = ['/', '/pets'];

    React.useEffect(() => {
        const currentPath = location.pathname;
        const currentIndex = paths.findIndex(path => path === currentPath);
        setValue(currentIndex >= 0 ? currentIndex : 0);
    }, [location.pathname]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate(paths[newValue])
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
                <Tab label='About Me'/>
                <Tab label='Pets'/>
            </Tabs>
        </Box>
    );
}