# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install depdencies, then start the gulp process with the following:

```
	> git clone git@github.com:StephenGrider/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

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