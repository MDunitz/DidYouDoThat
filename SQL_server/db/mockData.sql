/*
  #########
  # USERS #
  #########
*/

INSERT INTO users(UserName, hashedPass, email, token) Values ('dunitzm@gmail.com', 'pppp', 'dunitzm@gmail.com', 'sfdsfds');
INSERT INTO users(UserName, hashedPass, email, token) Values ('madison@gmail.com', 'sdfdsfds', 'dff@gmail.com', 'fdsgfds');

/*
  #########
  # Tasks #
  #########
*/

INSERT INTO tasks(TaskName, userID, timesPerWeek) VALUES ('run', 1, 6);
INSERT INTO tasks(TaskName, userID, timesPerWeek) VALUES ('swim', 1, 2);
INSERT INTO tasks(TaskName, userID, timesPerWeek) VALUES ('read', 1, 1);


INSERT INTO tasks(TaskName, userID, timesPerWeek) VALUES ('dance', 2, 3);
INSERT INTO tasks(TaskName, userID, timesPerWeek) VALUES ('mma', 2, 4);
INSERT INTO tasks(TaskName, userID, timesPerWeek) VALUES ('sleep', 2, 7);


/*
  #########
  # taskData #
  #########
*/

INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (1, 1, '2016-03-08', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (1, 1, '2016-03-09', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (1, 1, '2016-03-10', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (1, 1, '2016-03-11', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (1, 1, '2016-03-12', 't', 'wordswords');

INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (2, 1, '2016-03-08', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (2, 1, '2016-03-09', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (2, 1, '2016-03-10', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (2, 1, '2016-03-11', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (2, 1, '2016-03-12', 't', 'wordswords');

INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (3, 1, '2016-03-08', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (3, 1, '2016-03-09', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (3, 1, '2016-03-10', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (3, 1, '2016-03-11', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (3, 1, '2016-03-12', 't', 'wordswords');

INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (4, 2, '2016-03-08', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (4, 2, '2016-03-09', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (4, 2, '2016-03-10', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (4, 2, '2016-03-11', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (4, 2, '2016-03-12', 'f', 'wordswords');

INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (5, 2, '2016-03-08', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (5, 2, '2016-03-09', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (5, 2, '2016-03-10', 'f', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (5, 2, '2016-03-11', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (5, 2, '2016-03-12', 't', 'wordswords');

INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (6, 2, '2016-03-08', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (6, 2, '2016-03-09', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (6, 2, '2016-03-10', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (6, 2, '2016-03-11', 't', 'wordswords');
INSERT INTO taskData(taskID, userID, currDate, Done, otherInfo) VALUES (6, 2, '2016-03-12', 't', 'wordswords');

