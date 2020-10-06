
set identity_insert [Team] on

insert into [Team] ([Id], [Name], [Photo], [Description], [DateCreated]) values (1, 'Team 1', NULL, 'The Best Team', '2020-09-30');
insert into [Team] ([Id], [Name], [Photo], [Description], [DateCreated]) values (2, 'Team 2', NULL, 'The Worst Team', '2020-09-30');

set identity_insert [Team] off

set identity_insert [UserProfile] on

insert into [UserProfile] (Id, FirebaseUserId, FirstName, LastName, Email, JobTitle, AboutMe, TeamId, Photo) values (1, '2YTEuTVQ6ZfS5DQe37OwVCYspi73', 'Eva', 'Sanford', 'eva@eva.com', 'Social Worker', 'I like to better society', 1, null);
insert into [UserProfile] (Id, FirebaseUserId, FirstName, LastName, Email, JobTitle, AboutMe, TeamId, Photo) values (2, 'xLnsaNrKhyRIEiNbCFX5I2CfZMI2', 'Tim', 'Jones', 'tim@tim.com', 'Software Developer', 'I do so many things.', 1, null);
insert into [UserProfile] (Id, FirebaseUserId, FirstName, LastName, Email, JobTitle, AboutMe, TeamId, Photo) values (3, 'mvCoM3hKeOQ0mgWFbRblnYojfiH2', 'Sam', 'Smith', 'sam@sam.com', 'Junior Developer', 'I dont really do much of anything.', 2, null);

set identity_insert [UserProfile] off

set identity_insert [Project] on
insert into [Project] ([Id], [CreatorId], [TeamId], [Name], [Description], [DateCreated], [DueDate]) values (1, 1, 1, 'Preparing For New Management', 'We have a number of things to take care of before new corporate management takes over.', '2020-10-01', NULL);
insert into [Project] ([Id], [CreatorId], [TeamId], [Name], [Description], [DateCreated], [DueDate]) values (2, 2, 2, 'List Application', 'We need to get the list working that shows all the tasks.', '2020-10-01', NULL);

set identity_insert [Project] off

set identity_insert [List] on
insert into [List] ([Id], [CreatorId], [ProjectId], [Name], [Description], [DateCreated], [DueDate]) values (1, 1, 1, 'Clean the Office', 'We need to clean the office in order to get things ready for the new employee.', '2020-10-01', NULL);
insert into [List] ([Id], [CreatorId], [ProjectId], [Name], [Description], [DateCreated], [DueDate]) values (2, 2, 2, 'Get the list working', 'We need to get the list working that shows all the tasks.', '2020-10-01', NULL);

set identity_insert [List] off

set identity_insert [Task] on

insert into [Task] ([Id], [CreatorId], [ListId], [Name], [Description], [DateCreated], [DueDate]) values (1, 1, 1, 'Step 1', 'Do the stuff.', '2020-10-01', NULL);
insert into [Task] ([Id], [CreatorId], [ListId], [Name], [Description], [DateCreated], [DueDate]) values (2, 2, 1, 'Step 2', 'Do the stuff.', '2020-10-01', NULL);
insert into [Task] ([Id], [CreatorId], [ListId], [Name], [Description], [DateCreated], [DueDate]) values (3, 2, 2, 'Step 1', 'Do the stuff.', '2020-10-01', NULL); 
insert into [Task] ([Id], [CreatorId], [ListId], [Name], [Description], [DateCreated], [DueDate]) values (4, 3, 1, 'Step 3', 'Do the stuff.', '2020-10-01', NULL);

set identity_insert [Task] off




