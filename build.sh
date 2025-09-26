#!/bin/bash

# Install dependencies
npm install --production=false

# Ensure node_modules/.bin is in PATH
export PATH="$PATH:$(pwd)/node_modules/.bin"

# Run the build
npm run build