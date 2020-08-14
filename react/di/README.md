# @adk/react-di

React context based dependency injection proposal. 

The idea is to create an `Injector` container as `React.context` value available
in all children of a `provider component`. The `Injector` container can hold
any number of `values`, `singltons`, `factories` under custom tokens. So those
stored types can be accessed anywhere in child component tree.

If another `InjectorProvider` component appears inside that child component tree,
new `Injector` is spawned with previous one as parent.

`Injector` contained types can be accessed by hook `useInject`. And new types
can be dynamically provided into existing injector at any time by `useProvide`.
But the best moment to declare dependecy types is, when creating new custom 
`InjectorProvider` component.

### Custom InjectorProvider component

```tsx
export const ProductsProvider: React.FC<ProductsProviderProps> = (props) => {
  const providers = [
    { provide: ProductListFilters, useValue: new BehaviorSubject({}) },
    ProductListDao,
    { provide: PRODUCTS_BASE_URL, useValue: props.productBaseUrl },
    ProductsClient
  ];

  return (
    <InjectorProvider providers={providers}>
      {props.children}
    </InjectorProvider>
  );
}

```

### Use inside of component:
```tsx
export const ProductList: React.FC<ProductListProps> = (props) => {
  const productListDao = useInject<ProductListDao>(ProductListDao);
  const [ loading ] = useState$(productListDao.fetching, productListDao.fetching$);
  const [ productList ] = useState$(productListDao.data, productLsitDao.data$);

  return (
    <ProductListView productList={productList} loadong={loading}>
  )
}
```

### Decorators (Inject, Injectable)

#### Injectable
```tsx

@Injectable()
export class MyCustomService {}
```
#### Inject
```tsx

export class MyCustomService {

  constructor(
    @Inject(CUSTOM_TOKEN)
    myCustomValue: MyCustomType
  ) {}
}
```

## Usage




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