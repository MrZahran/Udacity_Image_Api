# The scripts needed to your application

    "build": "npx tsc",
    "nodemon": "nodemon ./src/index.ts",
    "test": "npx tsc && jasmine",
    "start": "npm run build && node build/index.js",
    "lint": "eslint .",
    "prettier": "prettier --write \"src/**/*.ts\""

# How Can Try API

    1. Run script start to build and run index.js file.
    2. Go to "http://localhost:3000/convert" and add the image you want to resize.
    3. Ex: add image info "http://localhost:3000/convert?name={imgName}&width={imgWidth}&height={imgHeight}"
