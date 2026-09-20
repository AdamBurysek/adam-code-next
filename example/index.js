import concurrently from 'concurrently';

concurrently([
   {
      name: 'backend',
      command: 'bash -c ". \"$NVM_DIR/nvm.sh\" && nvm use 20 && npm run develop" ',
      cwd: 'packages/backend',
      prefixColor: 'cyan',
   },
   {
      name: 'frontend',
      command: 'npm run dev',
      cwd: 'packages/frontend',
      prefixColor: 'green',
   },
]);