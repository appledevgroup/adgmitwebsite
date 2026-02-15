import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/adg-club'
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))


const feedbackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const Feedback = mongoose.model('Feedback', feedbackSchema)

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Submit Feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      })
    }

    // Create feedback
    const feedback = new Feedback({
      name,
      email,
      subject,
      message,
    })

    await feedback.save()

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: feedback,
    })
  } catch (error) {
    console.error('Error submitting feedback:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    })
  }
})

// Get All Feedback (Optional - for admin purposes)
app.get('/api/feedback', async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 })
    res.json({
      success: true,
      count: feedbacks.length,
      data: feedbacks,
    })
  } catch (error) {
    console.error('Error fetching feedback:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    })
  }
})

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`)
})

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use!`)
    console.log(` Try one of these solutions:`)
    console.log(`   1. Kill the process: lsof -ti:${PORT} | xargs kill -9`)
    console.log(`   2. Use a different port: PORT=5001 npm run dev`)
    console.log(`   3. Change PORT in backend/.env file`)
    process.exit(1)
  } else {
    throw error
  }
})

