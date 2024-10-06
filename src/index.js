import express from 'express';
import doctorsRoute from './routes/doctors.js';  // Update to ES module import
import medicalHistoryRoute from './routes/medicalHistory.js';  // Update to ES module import
import usersRoute from './routes/users.js';  // Import the new users route

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // For parsing application/json
app.use('/api/doctors', doctorsRoute);  // Use doctors route
app.use('/api/medical-history', medicalHistoryRoute);  // Use medical history route
app.use('/api/users', usersRoute);  // Use the users route

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
