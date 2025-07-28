const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const defineProfile = require('./models/profile');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'profiles.sqlite'
});
const Profile = defineProfile(sequelize);

sequelize.sync();

// POST API to save profile data
app.post('/api/profiles', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET API to fetch all profiles
app.get('/api/profiles', async (req, res) => {
  try {
    const profiles = await Profile.findAll();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE API to remove all profiles
app.delete('/api/profiles', async (req, res) => {
  try {
    await Profile.destroy({ where: {} });
    res.json({ message: 'All profiles deleted.' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));