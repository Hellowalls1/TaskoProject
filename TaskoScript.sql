USE [master]
GO
IF db_id('Tasko') IS NULL
  CREATE DATABASE [Tasko]
GO
USE [Tasko]
GO

DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Team];
DROP TABLE IF EXISTS [Project];
DROP TABLE IF EXISTS [List];
DROP TABLE IF EXISTS [Task];

CREATE TABLE [UserProfile] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [FirebaseUserId] nvarchar(50) NOT NULL,
  [FirstName] nvarchar(50) NOT NULL,
  [LastName] nvarchar(50),
  [Email] nvarchar(75) NOT NULL,
  [JobTitle] nvarchar(250) NOT NULL,
  [AboutMe] nvarchar(1000) NOT NULL,
  [TeamId] integer NOT NULL,
  [Photo] nvarchar(250) Null,

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
GO

CREATE TABLE [Team] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [Name] nvarchar(255) NOT NULL,
  [Photo] nvarchar(255)  NULL,
  [Description] nvarchar(500) NOT NULL,
  [DateCreated] datetime NOT NULL,
)
GO

CREATE TABLE [Project] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [UserProfileId] integer NOT NULL,
  [TeamId] integer  NULL,
  [Name] nvarchar (150) NOT NULL,
  [Description] nvarchar(2000) NOT NULL,
  [DateCreated] datetime NOT NULL,
  [DueDate] datetime NULL,

  
  CONSTRAINT [FK_PROJECT_USERPROFILE] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_PROJECT_TEAM] FOREIGN KEY ([TeamId]) REFERENCES [Team] ([Id])

)
GO

CREATE TABLE [List] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [UserProfileId] integer NOT NULL,
  [ProjectId] integer NOT NULL,
  [Name] nvarchar (150) NOT NULL,
  [Description] nvarchar(2000) NOT NULL,
  [DateCreated] datetime NOT NULL,
  [DueDate] datetime NULL,

  CONSTRAINT [FK_LIST_USERPROFILE] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_LIST_PROJECT] FOREIGN KEY ([ProjectId]) REFERENCES [Project] ([Id])
)
GO

CREATE TABLE [Task] (
  [Id] integer PRIMARY KEY identity NOT NULL,
  [UserProfileId] integer NOT NULL,
  [ListId] integer NOT NULL,
  [Name] nvarchar (150) NOT NULL,
  [Description] nvarchar(2000) NOT NULL,
  [DateCreated] datetime NOT NULL,
  [DueDate] datetime NULL,

  CONSTRAINT [FK_TASK_USERPROFILE] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_TASK_LIST] FOREIGN KEY ([ListId]) REFERENCES [List] ([Id])
)
GO

