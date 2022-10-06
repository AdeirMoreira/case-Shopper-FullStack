#!/bin/bash

npm i
npm run migration:run
npm run populate
npm run dev

# tail -f /dev/null