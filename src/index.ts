import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import router from './routes/round.routes';
import { swaggerSpec } from './swagger';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON
app.use(express.json());

// Sample route with round.router.ts
app.use('/round', router);


// Serve Swagger docs at /api-docs
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Example of error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/swagger`);
});

