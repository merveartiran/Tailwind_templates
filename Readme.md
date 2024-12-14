## #Miuul Course Tailwind

[Tailwind Github](https://github.com/merveartiran/Tailwind_templates)
##install

```sh
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

##tailwind.config.js

```sh

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

##public/input.css

````sh
---
##watch

```sh

npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

npm run watch

```
---
##Template output css
```sh
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

```

@tailwind base;
@tailwind components;
@tailwind utilities;

```


---
##CDN

```sh
[Font awesome]
(<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
      integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />)
```
````
