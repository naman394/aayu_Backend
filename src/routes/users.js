import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Route to add a new user
router.post('/', async (req, res) => {
  const { name, email } = req.body; // Extract name and email from the request body
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);  // Respond with the newly created user
  } catch (error) {
    console.error("Error adding user:", error.message || error);
    res.status(500).json({ error: 'Failed to add user' });
  } finally {
    await prisma.$disconnect();
  }
});




export default router;
