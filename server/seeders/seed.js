const db = require('../config/connection');
const { User, Transaction } = require('../models');
const userSeeds = require('./userSeeds.json');
const transactionSeeds = require('./transactionSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Transaction', 'transactions');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < transactionSeeds.length; i++) {
      const { _id, transactionAuthor } = await Transaction.create(transactionSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: transactionAuthor },
        {
          $addToSet: {
            transactions: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
