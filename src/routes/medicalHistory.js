import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Route to get medical history of a user
router.get('/:userId', async (req, res) => {
  try {
    const medicalHistory = await prisma.medicalHistory.findMany({
      where: { userId: parseInt(req.params.userId) },
    });
    res.json(medicalHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch medical history' });
  } finally {
    await prisma.$disconnect();
  }
});

// Route to add new medical history for a user
router.post('/', async (req, res) => {
  const { userId, diagnosis, treatment, date, doctor } = req.body;
  try {
    const newMedicalHistory = await prisma.medicalHistory.create({
      data: { userId, diagnosis, treatment, date: new Date(date), doctor },
    });
    res.status(201).json(newMedicalHistory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add medical history' });
  } finally {
    await prisma.$disconnect();
  }
});

export default router;
