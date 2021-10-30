-- CreateTable
CREATE TABLE `article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(128) NOT NULL,
    `private` BOOLEAN NOT NULL DEFAULT true,
    `published` BOOLEAN NOT NULL DEFAULT true,
    `body` BLOB NOT NULL,
    `snippet` VARCHAR(128) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
