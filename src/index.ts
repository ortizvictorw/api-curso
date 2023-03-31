import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

/* Router */
const router = express.Router();
app.use(router)

app.listen(process.env.PORT, () =>console.log(`server running on port ${process.env.PORT}`));

