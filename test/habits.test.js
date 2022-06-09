
const mockingoose = require('mockingoose');
const HabitModel = require('../models/habits');
const {getHabit, createHabit, updateHabit} = require('../controllers/habits');
const config = require('./config');
const userData = {  username: "test",
habits: {
  water: {
    max: 10,
    current: 0,
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
    max: false,
    current: 0,
  },
  outdoors: {
    max: false,
    current: 0,
  },
  code: {
    max: false,
    current: 0,
  },
  projects: {
    max: false,

    current: 0,
  },
},
};

const db = require('./config')


beforeAll(async () => await db.connect());
// beforeEach(async () => await db.clear());
// afterAll(async () => await db.close());

it('create & save user successfully', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.username).toBe(userData.username);

});

it('checks habits for water exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.habits.water.max).toBe(userData.habits.water.max);
  expect(savedUser.habits.water.active).toBe(userData.habits.water.active);
  expect(savedUser.habits.water.current).toBe(userData.habits.water.current);

});


it('checks habits for outdoors exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.habits.outdoors.max).toBe(userData.habits.outdoors.max);
  expect(savedUser.habits.outdoors.active).toBe(userData.habits.outdoors.active);
  expect(savedUser.habits.outdoors.current).toBe(userData.habits.outdoors.current);


});




it('checks habits for code exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.habits.code.max).toBe(userData.habits.code.max);
  expect(savedUser.habits.code.current).toBe(userData.habits.code.current);
  expect(savedUser.habits.code.active).toBe(userData.habits.code.active);


});


it('checks habits for projects exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.habits.projects.max).toBe(userData.habits.projects.max);
  expect(savedUser.habits.projects.current).toBe(userData.habits.projects.current);
  expect(savedUser.habits.projects.active).toBe(userData.habits.projects.active);


});




it('checks streaks for water exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.streaks.water.max).toBe(userData.streaks.water.max);
  expect(savedUser.streaks.water.current).toBe(userData.streaks.water.current);

});


it('checks streaks for outdoors exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.streaks.outdoors.max).toBe(userData.streaks.outdoors.max);
  expect(savedUser.streaks.outdoors.current).toBe(userData.streaks.outdoors.current);

});




it('checks streaks for code exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.streaks.code.max).toBe(userData.streaks.code.max);
  expect(savedUser.streaks.code.current).toBe(userData.streaks.code.current);

});



it('checks streaks for projects exists', async () => {
  const validUser = new HabitModel(userData);
  const savedUser = await validUser.save();

  expect(savedUser.streaks.projects.max).toBe(userData.streaks.projects.max);
  expect(savedUser.streaks.projects.current).toBe(userData.streaks.projects.current);


});








// describe('Habits service', () => {
//   describe('getHabit', () => {
//     it ('should return the list of habits', async () => {
//       mockingoose(habitsModel).toReturn([
//         {
//           username: 'testname',
          
//           habits: {
//             water: {
//               max: 6,
//               current: 2,
//               active: false,
//             },
//             outdoors: {
//               max: 0,
//               current: 0,
//               active: false,
//             },
//             code: {
//               max: 0,
//               current: 0,
//               active: false,
//             },
//             projects: {
//               max: 0,
//               current: 0,
//               active: false,
//             },
//           },
        
//           streaks: {
//             water: {
//               max: 0,
//               current: 0,
//             },
//             outdoors: {
//               max: 0,
//               current: 0,
//             },
//             coding: {
//               max: 0,
//               current: 0,
//             },
//             projects: {
//               max: 0,
//               current: 0,
//             },
//           },
//         }
//       ], 'find');
//       const results = await getHabit();
//       expect(results[0].username).toBe('testname');
//     });
//   });
// });
