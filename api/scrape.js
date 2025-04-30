const axios = require('axios');

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing URL param' });
  }

  try {
    const response = await axios.get(url, {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36',
        'Accept-Language': 'fr-FR,fr;q=0.9'
      }
    });

    res.status(200).json({ html: response.data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch HTML', details: err.message });
  }
};