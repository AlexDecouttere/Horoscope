const express = require('express');
const horoscope = require('horoscope');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const app = express();

// Security middlewares
app.use(helmet());
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // Limit each IP to 10 requests per windowMs
});

app.use(limiter);

// Route to get zodiac sign
app.get('/horoscope', (req, res) => {
  const { birthdate } = req.query;

  // Regex to validate birthdate format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdate || !dateRegex.test(birthdate)) {
    return res.status(400).json({ error: 'Invalid or missing birthdate. Format should be YYYY-MM-DD' });
  }

  // Parse birthdate
  const date = new Date(birthdate);
  const month = date.getUTCMonth() + 1; // JavaScript months are zero-indexed, so we add 1
  const day = date.getUTCDate();

  // Get zodiac sign
  const sign = horoscope.getSign({ month, day });

  // Check if the sign was returned correctly
  if (!sign) {
    return res.status(500).json({ error: 'Unable to determine zodiac sign' });
  }
  // Return the corresponding zodiac sign
    res.json({ sign });

    /* Return the birthdate as well if you want
    res.json({ birthdate, sign });*/
});

module.exports = app;