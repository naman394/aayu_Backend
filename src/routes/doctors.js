import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Route to get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await prisma.doctor.findMany();  // Fetch all doctors
    res.json(doctors);  // Send the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch doctors' });  // Handle errors with status 500
  } finally {
    await prisma.$disconnect();
  }
});

// Route to get a single doctor by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id: Number(id) },  // Find doctor by ID
    });

    if (doctor) {
      res.json(doctor);  // Send the found doctor
    } else {
      res.status(404).json({ error: 'Doctor not found' });  // Handle doctor not found
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch doctor' });
  } finally {
    await prisma.$disconnect();
  }
});

// Route to create a new doctor
router.post('/', async (req, res) => {
  const { name, specialty, rating } = req.body;
  try {
    const newDoctor = await prisma.doctor.create({
      data: {
        name,
        specialty,
        rating,
      },
    });

    

    res.status(201).json({
      message: 'Doctor created successfully',
      doctor: newDoctor,  // Include the created doctor data in the response
    });  // Return the created doctor
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create doctor' });
  } finally {
    await prisma.$disconnect();
  }
});

// Route to update a doctor's details
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, specialty, rating } = req.body;
  try {
    const updatedDoctor = await prisma.doctor.update({
      where: { id: Number(id) },  // Update doctor by ID
      data: {
        name,
        specialty,
        rating,
      },
    });

    res.json(updatedDoctor);  // Send updated doctor details
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update doctor' });
  } finally {
    await prisma.$disconnect();
  }
});

// Route to delete a doctor
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedDoctor = await prisma.doctor.delete({
      where: { id: Number(id) },  // Delete doctor by ID
    });

    res.json({ message: 'Doctor deleted successfully', deletedDoctor });  // Success response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete doctor' });
  } finally {
    await prisma.$disconnect();
  }
});

export default router;  // Export the router
