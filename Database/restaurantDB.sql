USE [master]
GO
/****** Object:  Database [restaurant]    Script Date: 13/09/2020 14:51:38 ******/
CREATE DATABASE [restaurant]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'restaurant', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\restaurant.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'restaurant_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\restaurant_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [restaurant] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [restaurant].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [restaurant] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [restaurant] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [restaurant] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [restaurant] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [restaurant] SET ARITHABORT OFF 
GO
ALTER DATABASE [restaurant] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [restaurant] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [restaurant] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [restaurant] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [restaurant] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [restaurant] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [restaurant] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [restaurant] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [restaurant] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [restaurant] SET  DISABLE_BROKER 
GO
ALTER DATABASE [restaurant] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [restaurant] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [restaurant] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [restaurant] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [restaurant] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [restaurant] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [restaurant] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [restaurant] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [restaurant] SET  MULTI_USER 
GO
ALTER DATABASE [restaurant] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [restaurant] SET DB_CHAINING OFF 
GO
ALTER DATABASE [restaurant] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [restaurant] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [restaurant] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [restaurant] SET QUERY_STORE = OFF
GO
USE [restaurant]
GO
/****** Object:  Table [dbo].[Address]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Address](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[City] [varchar](50) NULL,
	[street] [varchar](50) NULL,
	[NumHouse] [int] NULL,
	[NumApartment] [int] NULL,
 CONSTRAINT [PK_Addres] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[nameCategory] [nvarchar](50) NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CurrentEmployee]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CurrentEmployee](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdEmployee] [int] NULL,
	[Date] [datetime] NULL,
 CONSTRAINT [PK_CurrentEmployee] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Employees]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employees](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[Tz] [varchar](50) NULL,
	[Phone] [varchar](50) NULL,
	[address] [varchar](50) NULL,
	[IdEmployeeType] [int] NULL,
	[Password] [varchar](50) NULL,
 CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EmployeesTypes]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeesTypes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Position] [varchar](50) NULL,
 CONSTRAINT [PK_Types_of_employees] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventDetails]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventDetails](
	[IdDose] [int] NOT NULL,
	[IdMenu] [int] NOT NULL,
	[amount] [int] NOT NULL,
 CONSTRAINT [PK_InventDetails_1] PRIMARY KEY CLUSTERED 
(
	[IdDose] ASC,
	[IdMenu] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InventDose]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InventDose](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DateInvent] [datetime] NOT NULL,
	[IdEmployee] [int] NULL,
	[IdStatus] [int] NULL,
	[IdTable] [int] NULL,
	[HourInvention] [time](7) NOT NULL,
	[IdVisiter] [int] NOT NULL,
 CONSTRAINT [PK_InventDose] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Menu]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Menu](
	[Id] [int] NOT NULL,
	[Price] [int] NOT NULL,
	[NameDose] [nvarchar](50) NOT NULL,
	[RateDose] [float] NULL,
	[Category] [int] NOT NULL,
	[Description] [nvarchar](2000) NULL,
	[image] [varchar](max) NULL,
 CONSTRAINT [PK_Menu] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rating]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rating](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NULL,
	[doseId] [int] NULL,
	[rate] [int] NULL,
 CONSTRAINT [PK__Rating__3214EC073CBEDAE8] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StatusDose]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StatusDose](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](50) NULL,
 CONSTRAINT [PK_StatusDose] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tables]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tables](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdServing] [int] NOT NULL,
	[Status] [varchar](50) NOT NULL,
	[PlaceTable] [varchar](50) NOT NULL,
	[CountPeople] [int] NOT NULL,
 CONSTRAINT [PK_Table] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[VipTables]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VipTables](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IdTable] [int] NULL,
	[IdVisiter] [int] NULL,
	[Date] [date] NULL,
	[DateTimeStart] [time](7) NULL,
	[IdServing] [int] NULL,
	[CountPeople] [varchar](50) NULL,
 CONSTRAINT [PK_VipTables] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Visiters]    Script Date: 13/09/2020 14:51:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Visiters](
	[ld] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[Phone] [varchar](50) NULL,
	[Address] [int] NULL,
	[IdTable] [int] NULL,
	[Mail] [varchar](50) NULL,
	[Password] [varchar](50) NULL,
	[NameUser] [varchar](50) NULL,
 CONSTRAINT [PK_Visiters_1] PRIMARY KEY CLUSTERED 
(
	[ld] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CurrentEmployee]  WITH CHECK ADD  CONSTRAINT [FK_CurrentEmployee_Employees] FOREIGN KEY([IdEmployee])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[CurrentEmployee] CHECK CONSTRAINT [FK_CurrentEmployee_Employees]
GO
ALTER TABLE [dbo].[Employees]  WITH CHECK ADD  CONSTRAINT [FK_Employees_EmployeesTypes] FOREIGN KEY([IdEmployeeType])
REFERENCES [dbo].[EmployeesTypes] ([Id])
GO
ALTER TABLE [dbo].[Employees] CHECK CONSTRAINT [FK_Employees_EmployeesTypes]
GO
ALTER TABLE [dbo].[EmployeesTypes]  WITH CHECK ADD  CONSTRAINT [FK_EmployeesTypes_EmployeesTypes] FOREIGN KEY([Id])
REFERENCES [dbo].[EmployeesTypes] ([Id])
GO
ALTER TABLE [dbo].[EmployeesTypes] CHECK CONSTRAINT [FK_EmployeesTypes_EmployeesTypes]
GO
ALTER TABLE [dbo].[InventDetails]  WITH CHECK ADD  CONSTRAINT [FK_InventDetails_InventDose] FOREIGN KEY([IdDose])
REFERENCES [dbo].[InventDose] ([Id])
GO
ALTER TABLE [dbo].[InventDetails] CHECK CONSTRAINT [FK_InventDetails_InventDose]
GO
ALTER TABLE [dbo].[InventDetails]  WITH CHECK ADD  CONSTRAINT [FK_InventDetails_Menu] FOREIGN KEY([IdMenu])
REFERENCES [dbo].[Menu] ([Id])
GO
ALTER TABLE [dbo].[InventDetails] CHECK CONSTRAINT [FK_InventDetails_Menu]
GO
ALTER TABLE [dbo].[InventDose]  WITH CHECK ADD  CONSTRAINT [FK_InventDose_Employees] FOREIGN KEY([IdEmployee])
REFERENCES [dbo].[Employees] ([Id])
GO
ALTER TABLE [dbo].[InventDose] CHECK CONSTRAINT [FK_InventDose_Employees]
GO
ALTER TABLE [dbo].[InventDose]  WITH CHECK ADD  CONSTRAINT [FK_InventDose_StatusDose] FOREIGN KEY([IdStatus])
REFERENCES [dbo].[StatusDose] ([Id])
GO
ALTER TABLE [dbo].[InventDose] CHECK CONSTRAINT [FK_InventDose_StatusDose]
GO
ALTER TABLE [dbo].[InventDose]  WITH CHECK ADD  CONSTRAINT [FK_InventDose_Tables] FOREIGN KEY([IdTable])
REFERENCES [dbo].[Tables] ([Id])
GO
ALTER TABLE [dbo].[InventDose] CHECK CONSTRAINT [FK_InventDose_Tables]
GO
ALTER TABLE [dbo].[InventDose]  WITH CHECK ADD  CONSTRAINT [FK_InventDose_Visiters] FOREIGN KEY([IdVisiter])
REFERENCES [dbo].[Visiters] ([ld])
GO
ALTER TABLE [dbo].[InventDose] CHECK CONSTRAINT [FK_InventDose_Visiters]
GO
ALTER TABLE [dbo].[Menu]  WITH CHECK ADD  CONSTRAINT [FK_Menu_Category] FOREIGN KEY([Category])
REFERENCES [dbo].[Category] ([Id])
GO
ALTER TABLE [dbo].[Menu] CHECK CONSTRAINT [FK_Menu_Category]
GO
ALTER TABLE [dbo].[Rating]  WITH CHECK ADD  CONSTRAINT [FK_Rating_Menu] FOREIGN KEY([doseId])
REFERENCES [dbo].[Menu] ([Id])
GO
ALTER TABLE [dbo].[Rating] CHECK CONSTRAINT [FK_Rating_Menu]
GO
ALTER TABLE [dbo].[VipTables]  WITH CHECK ADD  CONSTRAINT [FK_VipTables_CurrentEmployee] FOREIGN KEY([IdServing])
REFERENCES [dbo].[CurrentEmployee] ([Id])
GO
ALTER TABLE [dbo].[VipTables] CHECK CONSTRAINT [FK_VipTables_CurrentEmployee]
GO
ALTER TABLE [dbo].[VipTables]  WITH CHECK ADD  CONSTRAINT [FK_VipTables_Employees] FOREIGN KEY([IdServing])
REFERENCES [dbo].[CurrentEmployee] ([Id])
GO
ALTER TABLE [dbo].[VipTables] CHECK CONSTRAINT [FK_VipTables_Employees]
GO
ALTER TABLE [dbo].[VipTables]  WITH CHECK ADD  CONSTRAINT [FK_VipTables_Tables] FOREIGN KEY([IdTable])
REFERENCES [dbo].[Tables] ([Id])
GO
ALTER TABLE [dbo].[VipTables] CHECK CONSTRAINT [FK_VipTables_Tables]
GO
ALTER TABLE [dbo].[Visiters]  WITH CHECK ADD  CONSTRAINT [FK_Visiters_Address] FOREIGN KEY([Address])
REFERENCES [dbo].[Address] ([Id])
GO
ALTER TABLE [dbo].[Visiters] CHECK CONSTRAINT [FK_Visiters_Address]
GO
ALTER TABLE [dbo].[Visiters]  WITH CHECK ADD  CONSTRAINT [FK_Visiters_Tables1] FOREIGN KEY([IdTable])
REFERENCES [dbo].[Tables] ([Id])
GO
ALTER TABLE [dbo].[Visiters] CHECK CONSTRAINT [FK_Visiters_Tables1]
GO
USE [master]
GO
ALTER DATABASE [restaurant] SET  READ_WRITE 
GO
