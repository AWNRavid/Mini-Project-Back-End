create database merchant;

use merchant;

create table merchant(
	id varchar(36) not null primary key,
    password varchar(100) not null,
    name varchar(100) not null,
    address varchar(100) not null,
    join_date datetime DEFAULT CURRENT_TIMESTAMP,
    phone_number int not null
);

select * from merchant;

drop table merchant;

describe merchant;

create table product_info(
	id varchar(36) not null primary key,
    name varchar(100) not null,
    quantity int not null default 0,
    price int not null,
    merchant_id varchar(36) not null,
    foreign key (merchant_id) references merchant(id)
);

drop table product_info;

describe product_info;