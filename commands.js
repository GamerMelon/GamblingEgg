import 'dotenv/config';
import { getRPSChoices } from './game.js';
import { capitalize, InstallGlobalCommands } from './utils.js';



// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

// Command containing options
const COIN_FLIP_COMMAND = {
  name: 'Coin Flip',
  description: 'Flips a coin',
  options: [
    {
      type: 2
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
};

const ALL_COMMANDS = [TEST_COMMAND, COIN_FLIP_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
