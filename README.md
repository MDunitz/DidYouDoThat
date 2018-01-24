# DidYouDoThat

###Getting Started###
- After cloning in project folder run
```
	> npm install
	> npm start
```
###Run tests
```
>npm run test
```

###Run tests automatically with easch file change
```
>npm run test:watch
```


- Create Database (from command line)

```
createdb bullet
```

- Load Schema (from command line)

```
psql bullet < SQL_server/db/schema.sql
```

- Load MockDataSet (from command line)

```
psql bullet < SQL_server/db/mockData.sql
```
