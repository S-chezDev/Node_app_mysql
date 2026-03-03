import express from 'express';
import ping from './routes/index.routes.js';
import employeeRoutes from './routes/employees.routes.js';

const app = express();
app.use(express.json());

app.use('/api', ping);
app.use('/api', employeeRoutes);

export default app;
