import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Profile from '../../components/UserTab/Profile/Profile';
import Chat from '../../components/UserTab/Chat/Chat';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'; 
import Membership from '../../components/UserTab/Membership/Membership';
import Payment from '../../components/UserTab/Payment/Payment';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TrainerAdmin() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', bgcolor: 'background.default', color: 'text.primary' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="trainer admin tabs">
            <Tab label="Profile" {...a11yProps(0)} />
            <Tab label="Chat" {...a11yProps(1)} />
            <Tab label="Memberships" {...a11yProps(2)} />
            <Tab label="Payments" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} style={{ minHeight: '85vh' }}>
          <Profile />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} style={{ minHeight: '85vh' }}>
          <Chat />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} style={{minHeight:"85vh"}}>
        < Membership/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} style={{minHeight:"85vh"}}>
        <Payment />
      </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
}
