import express from 'express';
import cors from 'cors';
import routes from './main/routes';

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());
app.use('/api', routes);

app.listen(port, () => console.log(`🚀 success!!! server run in port ${port}.`))
