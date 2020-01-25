# clean-code-typescript
 Clean Code concepts adapted for TypeScript.
 Please checkout [https://github.com/labs42io/clean-code-typescript]clean-code-typescript.
    Inspired from [https://github.com/ryanmcdermott/clean-code-javascript]clean-code-javascript.
    
## Setup Eslint with Airbnb Style Guide
    Eslint is a linting utility for JavaScript and JSX, with some nice rules and plugins. Anyone can write rules for Eslint. An example rule could be “avoid using console.log()“

    Luckily Airbnb has written a Style Guide for JavaScript which covers most of the best practices they use. It’s basically a collection of different rules. You can read it here – Airbnb JavaScript Style Guide

        > Step 1  – Install necessary packages by ```npm i -D eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-promise```

        > Step 2 – Create a new file .eslintrc at the root directory of your project and paste the following
```
    {
        "env": {
        "node": true
    },
        "extends": "airbnb-base",
        "plugins": ["promise"]
    }
```

        > Step 3 – Add a new command to lint in package.json – "lint": "eslint 'src/**/*.js' --fix"

    Now you should be able to able lint your code by running npm run lint. It will try to fix errors that are fixable. Otherwise will throw errors/warnings

## Setup Formatting with Prettier
    While Eslint is for Linting and finding errors in the code, Prettier is purely for formatting. Besides JavaScript Prettier also supports formatting json, HTML, CSS, markdown, sql, yaml, etc. Using both Eslint and Prettier is highly recommended.

        > Step 1 – Install Prettier CLI package by ```npm i -D prettier-eslint-cli```

        > Step 2 – Add a new command to format in package.json – "format": "prettier-eslint 'server/**/*.{js,json}' --write"

    Just like we did earlier you should now able to run npm run format to format the code using Prettier!

    Auto Lint & Format on Git Commit
    Even though we’ve built commands to run lint and formatting, most of the time developers forget to run it and commit to git. You can set up npm run lint to your CI/CD so that whenever there are some errors it will fail. However, it will be really nice if we would do these checks every time when someone commits.

## Husky and Lint-staged to rescue
    Husky allows you to add commands to run before committing. It takes advantage of the git hooks.

    Lint-staged – “Run linters against staged git files”. Running Eslint and Prettier on all files on every commit will be very time-consuming. With lint-staged you can run those only on the staged files.

    Install husky and lint-staged by ```npm i -D husky lint-staged```

    You’ll need to edit the package.json to configure it. Here is the full file:
```
{
  "scripts": {
    "lint": "eslint 'src/**/*.js' --fix",
    "format": "prettier-eslint 'server/**/*.{js,json}' --write"
  },
  "lint-staged": {
    "**/*.js": [
      "eslint --fix",
      "prettier-eslint --write",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "devDependencies": {
    "eslint": "^5.13.0",
    "eslint-config-airbnb-base": "^13.1.0",
    "eslint-plugin-import": "^2.16.0",
    "eslint-plugin-promise": "^4.0.1",
    "husky": "^1.3.1",
    "lint-staged": "^8.1.3",
    "prettier-eslint-cli": "^4.7.1"
  }
}
```

    We tell husky to run lint-staged on every commit. Lint-staged will run eslint, prettier, and ‘git add’ on staged files. The last ‘git add’ is to add the changed filed back to commit since it might be changed formatting.