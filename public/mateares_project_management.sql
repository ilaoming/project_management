

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` float NOT NULL,
  `price` float NOT NULL,
  `total` float NOT NULL,
  `order_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `service_order` (
  `id` varchar(255) NOT NULL,
  `entity_name` varchar(255) NOT NULL,
  `s_date` date NOT NULL,
  `e_date` date NOT NULL,
  `e_days` int(11) NOT NULL,
  `p_days` int(11) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `delivery_address` varchar(510) NOT NULL,
  `assignee_name` varchar(255) NOT NULL,
  `state_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `service_state` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_order_id` (`order_id`);

ALTER TABLE `service_order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `state_id` (`state_id`);


ALTER TABLE `service_state`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `service_state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


ALTER TABLE `product`
  ADD CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `service_order` (`id`) ON UPDATE CASCADE;


ALTER TABLE `service_order`
  ADD CONSTRAINT `fk_state_id` FOREIGN KEY (`state_id`) REFERENCES `service_state` (`id`) ON UPDATE CASCADE;
COMMIT;

