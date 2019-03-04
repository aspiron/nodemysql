CREATE TABLE `people` (
`id` INT(11) NOT NULL AUTO_INCREMENT,
`name` VARCHAR(50) NULL DEFAULT NULL,
`address` VARCHAR(50) NULL DEFAULT NULL,
`phone` VARCHAR(15) NULL DEFAULT NULL,
`created_at` TIMESTAMP NULL DEFAULT NULL,
`updated_at` TIMESTAMP NULL DEFAULT NULL,
PRIMARY KEY (`id`))
ENGINE=InnoDB;

INSERT INTO `people` (`name`, `address`, `phone`, `created_at`, `updated_at`) 
     VALUES
        ('John', 'Urganch', '+998932883124', '2019-02-25 10:33:36', '2019-02-25 10:33:36'),
        ('Doe', 'Toshkent', '+998905597797', '2019-02-25 10:33:36', '2019-02-25 10:33:36');