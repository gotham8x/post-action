const { spawn } = require('node:child_process');

spawn('bash', ['-c', process.env.INPUT_CMD], { stdio: 'inherit' });
