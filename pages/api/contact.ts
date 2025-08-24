import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' })
    }

    const client = await clientPromise
    const db = client.db('atq_website')
    const collection = db.collection('contacts')

    const contactEntry = {
      name,
      email,
      company: company || '',
      message,
      submittedAt: new Date(),
      ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
      userAgent: req.headers['user-agent']
    }

    await collection.insertOne(contactEntry)

    res.status(200).json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
