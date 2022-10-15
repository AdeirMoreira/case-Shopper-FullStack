#!/bin/bash

export TERM=xterm-256color
npm i
npm run migration:run
npm run unpopulate
npm run populate
npm run dev