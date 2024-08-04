import express from 'express';
import cors from 'cors';
import UserRouter from './router/userRouter'
const app = express();
const port = 3001;
import bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/api/v1",UserRouter);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


