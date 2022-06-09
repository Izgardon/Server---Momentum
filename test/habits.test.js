const mockingoose = require('mockingoose');
const habitsModel = require('../models/habits');
const {getHabit, createHabit, updateHabit} = require('../controllers/habits');

describe('Habits service', () => {
  describe('getHabit', () => {
    it ('should return the list of habits', async () => {
      mockingoose(habitsModel).toReturn([
        {
          username: 'testname',
          
          habits: {
            water: {
              max: 6,
              current: 2,
              active: false,
            },
            outdoors: {
              max: 0,
              current: 0,
              active: false,
            },
            code: {
              max: 0,
              current: 0,
              active: false,
            },
            projects: {
              max: 0,
              current: 0,
              active: false,
            },
          },
        
          streaks: {
            water: {
              max: 0,
              current: 0,
            },
            outdoors: {
              max: 0,
              current: 0,
            },
            coding: {
              max: 0,
              current: 0,
            },
            projects: {
              max: 0,
              current: 0,
            },
          },
        }
      ], 'find');
      const results = await getHabit();
      expect(results[0].username).toBe('testname');
    });
  });
});
