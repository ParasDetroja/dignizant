-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2022 at 07:36 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dignizant`
--

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `form_json` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `form`
--

INSERT INTO `form` (`id`, `form_json`, `created_at`, `updated_at`) VALUES
(1, '[{\"title\":\"Demo Form\"},{\"title\":\"First Question\",\"options\":[],\"answers\":[],\"type\":\"paragraph\",\"required\":true},{\"title\":\"Second Que\",\"options\":[\"Option 1\",\"Option 2\"],\"answers\":[],\"type\":\"radio\",\"required\":true},{\"title\":\"Third Que\",\"options\":[\"Checkbox 1\",\"Checkbox 2\"],\"answers\":[],\"type\":\"checkbox\",\"required\":true},{\"title\":\"Forth Que\",\"options\":[\"test\",\"test2\"],\"answers\":[],\"type\":\"dropdown\",\"required\":true},{\"title\":\"Fifth Que\",\"options\":[],\"answers\":[],\"type\":\"paragraph\",\"required\":false},{\"title\":\"Six\",\"options\":[\"123\",\"1233\"],\"answers\":[],\"type\":\"radio\",\"required\":false,\"err\":\"Please Enter Option...\"}]', '2022-02-26 05:59:16', '2022-02-26 05:59:16'),
(2, '[{\"title\":\"test\"},{\"title\":\"zczx\",\"options\":[],\"answers\":[],\"type\":\"paragraph\",\"required\":true},{\"title\":\"xcvxcv\",\"options\":[],\"answers\":[],\"type\":\"paragraph\",\"required\":false},{\"title\":\"xvxcvxcv\",\"options\":[\"xcvxcv\",\"xcvxc\"],\"answers\":[],\"type\":\"radio\",\"required\":true},{\"title\":\"sdds\",\"options\":[\"xcvxcv\",\"xcvcxv\"],\"answers\":[],\"type\":\"checkbox\",\"required\":true},{\"title\":\"xcvxcvxc\",\"options\":[\"cxvxcv\",\"xvcxcvxc\"],\"answers\":[],\"type\":\"dropdown\",\"required\":false},{\"title\":\"xcvxcvxcvxc\",\"options\":[\"xcvxc\",\"vxcvxcv\"],\"answers\":[],\"type\":\"radio\",\"required\":false},{\"title\":\"xcvxcvxcvxc\",\"options\":[\"xcvxcvxcvx\",\"vcxvxcvcxv\"],\"answers\":[],\"type\":\"checkbox\",\"required\":false},{\"title\":\"xcvxcvxcv\",\"options\":[\"xcvxc\",\"vxcxvxcv\"],\"answers\":[],\"type\":\"dropdown\",\"required\":false}]', '2022-02-26 06:19:11', '2022-02-26 06:19:11'),
(3, '[{\"title\":\"cvxcvxc\"},{\"title\":\"sdds\",\"options\":[\"xcvxc\",\"vxcvxc\"],\"answers\":[],\"type\":\"dropdown\",\"required\":true},{\"title\":\"xcvxcvxcv\",\"options\":[],\"answers\":[],\"type\":\"dropdown\",\"required\":true},{\"title\":\"xcvxcvxvxc\",\"options\":[],\"answers\":[],\"type\":\"dropdown\",\"required\":false}]', '2022-02-26 06:19:50', '2022-02-26 06:19:50');

-- --------------------------------------------------------

--
-- Table structure for table `userresponse`
--

CREATE TABLE `userresponse` (
  `id` int(11) NOT NULL,
  `form_json` text NOT NULL,
  `form_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userresponse`
--

INSERT INTO `userresponse` (`id`, `form_json`, `form_id`, `created_at`, `updated_at`) VALUES
(1, '[{\"title\":\"Demo Form\",\"full_name\":\"Paras\",\"email\":\"Paras@gmail.com\"},{\"title\":\"First Question\",\"options\":[],\"answers\":\"Paras\",\"type\":\"paragraph\",\"required\":true,\"error\":\"\"},{\"title\":\"Second Que\",\"options\":[\"Option 1\",\"Option 2\"],\"answers\":\"Option 1\",\"type\":\"radio\",\"required\":true,\"error\":\"\"},{\"title\":\"Third Que\",\"options\":[\"Checkbox 1\",\"Checkbox 2\"],\"answers\":[\"Checkbox 2\"],\"type\":\"checkbox\",\"required\":true,\"error\":\"\"},{\"title\":\"Forth Que\",\"options\":[\"test\",\"test2\"],\"answers\":\"test2\",\"type\":\"dropdown\",\"required\":true,\"error\":\"\"},{\"title\":\"Fifth Que\",\"options\":[],\"answers\":[],\"type\":\"paragraph\",\"required\":false},{\"title\":\"Six\",\"options\":[\"123\",\"1233\"],\"answers\":[],\"type\":\"radio\",\"required\":false,\"err\":\"Please Enter Option...\"}]', 1, '2022-02-26 05:59:55', '2022-02-26 05:59:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userresponse`
--
ALTER TABLE `userresponse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userresponse`
--
ALTER TABLE `userresponse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
