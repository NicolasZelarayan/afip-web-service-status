import express from 'express';
import cors from 'cors';
import statusRouter from './routes/status.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/status', statusRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});