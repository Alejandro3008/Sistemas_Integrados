SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `employees` (
    `employee_id` int(11) NOT NULL,
    `employee_name` varchar(50) NOT NULL,
    `employee_lastnames` varchar(50) NOT NULL,
    `employee_phone` varchar(10) NOT NULL,
    `employee_email` varchar(50) NOT NULL,
    `employee_password` varchar(50) NOT NULL,
    `employee_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `admin` (
    `admin_id` int(11) NOT NULL,
    `admin_name` varchar(50) NOT NULL,
    `admin_mail` varchar(50) NOT NULL,
    `admin_password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `projects` (
    `pro_id` int(11) NOT NULL,
    `pro_title` varchar(300) NOT NULL,
    `pro_description` varchar(300) NOT NULL,
    `pro_employee_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `employees` (`employee_id`, `employee_name`, `employee_lastnames`, `employee_phone`, `employee_email`, `employee_password`,  `employee_admin`) VALUES
(1, 'Ernesto Adan', 'Zurbia', '4423456789', 'neto844@outlook.com', 'zurbianeto844',  1),
(2, 'Adrian', 'Morales', '4427981346', 'chiniman1@outlook.com', 'pollos1',  1);
(3, 'Roberto', 'Cruz Lozano', '4426504780', 'tank3-tk3@outlook.com', 'dovakhin1',  1);

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_mail`, `admin_password`) VALUES
(1, 'Sebastian Manzo Iniestra', 'sebas_092100@outlook.com', '123');

ALTER TABLE `employees`
    ADD PRIMARY KEY (`employee_id`);

ALTER TABLE `admin`
    ADD PRIMARY KEY (`admin_id`);

ALTER TABLE `employees`
    MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `admin`
    MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `projects`
    MODIFY `pro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

COMMIT;