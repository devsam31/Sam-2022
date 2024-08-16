import express from 'express';
import config from './config/config.js';
import keyRoutes from './routes/keyRoutes.js';

const app = express();
app.use(express.json());

app.use('/store-key', keyRoutes);

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
