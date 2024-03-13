use products;

CREATE TABLE UserAccount (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Password VARCHAR(100) NOT NULL,
    FullName VARCHAR(100),
    UserType ENUM('customer', 'admin') DEFAULT 'customer'
);

insert into UserAccount values 
(1, 'tmc@gmail.com', '123', 'tran minh chien', 'admin'),
(2, 'tva@gmail.com', '456', 'tran van a', 'customer'),
(3, 'tvb@gmail.com', '789', 'tran van b', 'admin');

create table clock (
	id int not null primary key auto_increment,
    nameclock nvarchar(255) not null,
    trademark nvarchar(255) not null,
    image nvarchar(255) not null,
    size int not null,
    price decimal not null,
    shape nvarchar(255) not null,
    wire_material nvarchar(255) not null,
    glass_material nvarchar(255) not null,
    style nvarchar(255) not null,
    functions nvarchar(255) not null,
    face_color nvarchar(255) not null,
    origin nvarchar(255) not null
);

CREATE TABLE ProductImage (
    ProductID INT NOT NULL,
    Filename VARCHAR(200),
    ContentType VARCHAR(100),
    Picture LONGBLOB,
    PRIMARY KEY (ProductID)
) ENGINE=InnoDB;


insert into clock values 
(1, 'SEIKO PROSPEX SSC813P1', 'SEIKO', 'https://wscdn.vn/upload/original-image/uploads/images/SSC813P1-2-1669108124924.jpg?size=800x800&fomat=webp', 
39, 11000000, 'Tròn', 'Dây kim loại', 'Kính Sapphire', 'Sang trọng, lịch lãm', 'Lịch ngày, tachymeter, chronograph', 'Mặt trắng', 'Nhật Bản'),
(2, 'SEIKO PRESSAGE SSA357J1', 'SEIKO', 'https://wscdn.vn/upload/original-image/SSA357J1.jpg?size=800x800&fomat=webp', 
41, 6500000, 'Tròn', 'Dây kim loại', 'Kính Sapphire', 'Sang trọng, Hở tim lộ đáy', 'Xem thời gian', 'Mặt đen', 'Nhật Bản'),
(3, 'ORIENT CABALLERO FAG00003W0', 'ORIENT', 'https://donghoduyanh.com/images/products/2020/03/17/large/dong_ho_orient_caballero_fag00003w0_2.jpg.webp', 
43, 5000000, 'Tròn', 'Dây da', 'Kính khoáng', 'Hở tim lộ đáy, sang trọng', 'Xem thời gian', 'Mặt trắng', 'Nhật Bản');
