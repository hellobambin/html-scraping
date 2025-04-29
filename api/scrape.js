// /api/scrape.js
import axios from 'axios';

export default async function handler(req, res) {
  const targetUrl = req.query.url;

  if (!targetUrl) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  try {
    const response = await axios.get(targetUrl);
    res.status(200).json({ html: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch HTML', details: error.message });
  }
}