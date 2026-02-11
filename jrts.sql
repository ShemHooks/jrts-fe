-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2026 at 04:52 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jrts`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `Department_Code` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `Department_name` varchar(99) NOT NULL,
  `status` varchar(99) NOT NULL,
  `Department_Head` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` int(11) NOT NULL,
  `Employee_ID` int(11) NOT NULL,
  `Department_Code` int(11) NOT NULL,
  `Fname` varchar(20) NOT NULL,
  `Mname` varchar(20) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `name_ext` varchar(5) NOT NULL,
  `position` varchar(20) NOT NULL,
  `section` varchar(20) NOT NULL,
  `emp_status` varchar(20) NOT NULL,
  `user_status` varchar(20) NOT NULL,
  `category/role` varchar(20) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employeewithid`
--

CREATE TABLE `employeewithid` (
  `Employee_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job request`
--

CREATE TABLE `job request` (
  `ID` int(11) NOT NULL,
  `Job-Order-ID` int(11) NOT NULL,
  `requesting-department-ID` int(11) NOT NULL,
  `requesting-user-ID` int(11) NOT NULL,
  `requesting-user` varchar(20) NOT NULL,
  `date-time` date NOT NULL,
  `request-type` varchar(20) NOT NULL,
  `details` varchar(99) NOT NULL,
  `status` varchar(29) NOT NULL,
  `approved-user-id` int(11) NOT NULL,
  `approved-remarks` varchar(99) NOT NULL,
  `approved-department-id` varchar(20) NOT NULL,
  `completed-user-id` int(20) NOT NULL,
  `completed-remarks` varchar(99) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`Department_Code`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `employeewithid` (`Employee_ID`),
  ADD UNIQUE KEY `Department_Code` (`Department_Code`);

--
-- Indexes for table `employeewithid`
--
ALTER TABLE `employeewithid`
  ADD PRIMARY KEY (`Employee_ID`);

--
-- Indexes for table `job request`
--
ALTER TABLE `job request`
  ADD PRIMARY KEY (`Job-Order-ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `department_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `employee` (`ID`) ON DELETE CASCADE;

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`Employee_ID`) REFERENCES `employeewithid` (`Employee_ID`) ON DELETE CASCADE;

--
-- Constraints for table `job request`
--
ALTER TABLE `job request`
  ADD CONSTRAINT `job request_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `employee` (`ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
