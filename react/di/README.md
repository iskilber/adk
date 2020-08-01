# @adk/react-di

React context based dependency injection proposal




## Development

### Nrwl parent git repo integration

**nx.json**
```json
    "adk.react.di": {
      "tags": ["scope:web"]
    }
```

**workspace.json**
```json
    "adk.react.di": {
      "root": "libs/adk/react/di",
      "sourceRoot": "libs/adk/react/di/src",
      "projectType": "library",
      "schematics": {},
      "architect": {
        "lint": {
          "builder": "@nrwl/linter:lint",
          "options": {
            "linter": "eslint",
            "config": "libs/adk/react/di/.eslintrc",
            "tsConfig": [
              "libs/adk/react/di/tsconfig.lib.json",
              "libs/adk/react/di/tsconfig.spec.json"
            ],
            "exclude": ["**/node_modules/**", "!libs/adk/react/di/**"]
          }
        },
        "test": {
          "builder": "@nrwl/jest:jest",
          "options": {
            "jestConfig": "libs/adk/react/di/jest.config.js",
            "tsConfig": "libs/adk/react/di/tsconfig.spec.json",
            "passWithNoTests": true
          }
        }
      }
    }
  },
```

**tsconfig.json**
```json
  "paths": {
    "@adk/react/di": ["libs/adk/react/di/src/index.ts"]
  }
```