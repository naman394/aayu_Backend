import express from 'express';
import doctorsRoute from './routes/doctors.js';  // Import doctors route

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // For parsing application/json
app.use('/api/doctors', doctorsRoute);  // Use doctors route

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
