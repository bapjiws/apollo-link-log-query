# apollo-link-log-query

# CHECKLIST
- [ ] set up compilation with Babel CLI compilation 7 (compilation)
    - [ ] use [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env/)
    - [ ] use [browserslist](https://babeljs.io/docs/en/babel-preset-env/#browserslist-integration) from [create-react-app](https://github.com/facebook/create-react-app/blob/96ba7bddc1600d6f5dac9da2418ee69793c22eca/packages/react-scripts/package.json#L82-L94) (the latest browsers during development and a larger range of browsers in production)
    - [ ] use `--watch` flag in development
- [ ] set up type checking with TypeScript
    - [ ] see `tsconfig.json` [here](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/#)
- [ ] `main` field in package.json
- [ ] `prepublish(Only)` script
- [ ] `.npmignore`