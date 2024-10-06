import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Route to get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        contact: true,
        availability: true,
        awards: true,
      },
    });
    res.json(doctors);  // Send the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch doctors' });  // Handle errors with status 500
  } finally {
    await prisma.$disconnect();
  }
});

export default router;  // Use export default instead of module.exports
