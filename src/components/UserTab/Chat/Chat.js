import * as React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const clients = [
  { name: 'Client A', icon: 'A' },
  { name: 'Client B', icon: 'B' },
  { name: 'Client C', icon: 'C' },
];

function Chat() {
  const [selectedClient, setSelectedClient] = React.useState(null);
  const [message, setMessage] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState({});

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleSendMessage = () => {
    if (selectedClient && message.trim()) {
      const newChatHistory = { ...chatHistory };
      if (!newChatHistory[selectedClient.name]) {
        newChatHistory[selectedClient.name] = [];
      }
      newChatHistory[selectedClient.name].push({ text: message, sent: true });
      setChatHistory(newChatHistory);
      setMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '85vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <Box sx={{ width: '30%', borderRight: 1, borderColor: 'divider', overflowY: 'auto', bgcolor: 'background.default' }}>
        <List>
          {clients.map((client) => (
            <ListItem button key={client.name} onClick={() => handleClientClick(client)} sx={{ '&:hover': { bgcolor: 'primary.main', color: 'background.default' } }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'secondary.main', color: 'background.default' }}>{client.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={client.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
        <Box sx={{ flexGrow: 1, p: 2, overflowY: 'auto', borderBottom: 1, borderColor: 'divider', bgcolor: 'background.default' }}>
          {selectedClient ? (
            chatHistory[selectedClient.name]?.map((msg, index) => (
              <Box key={index} sx={{ mb: 2, display: 'flex', flexDirection: msg.sent ? 'row-reverse' : 'row' }}>
                <Box
                  sx={{
                    maxWidth: '70%',
                    p: 2,
                    borderRadius: '20px',
                    bgcolor: msg.sent ? 'primary.main' : 'secondary.main',
                    color: 'background.default',
                    alignSelf: msg.sent ? 'flex-end' : 'flex-start',
                    boxShadow: 1,
                  }}
                >
                  <Typography variant="body1">{msg.text}</Typography>
                </Box>
              </Box>
            ))
          ) : (
            <Typography variant="body1" sx={{ color: 'text.primary' }}>Select a client to view the chat history</Typography>
          )}
        </Box>
        {selectedClient && (
          <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', bgcolor: 'background.default' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                  e.preventDefault();
                }
              }}
              sx={{ bgcolor: 'background.default', color: 'text.primary', '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'secondary.main' } } }}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Chat;
