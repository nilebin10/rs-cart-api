create type status_enum;

create type status_enum as enum('OPEN','ORDERED');

create table users(
    id uuid not null default gen_random_uuid() primary key,
    name text not null,
    email text not null,
    password text not null
)

create table carts(
    id uuid not null default gen_random_uuid() primary key,
    user_id uuid not null references users(id),
    "created_at" date not null,
    updated_at date not null,
    status status_enum not null,
    items array uuid[] 
);

create table carts_items(
    id uuid not null default gen_random_uuid() primary key,
    product_id uuid not null,
    count int not null
);

create table orders(
    id uuid not null default gen_random_uuid() primary key,
    user_id uuid not null references users(id),
    cart_id uuid not null references carts(id), 
    payment json not null,
    delivery json not null,
    comments text not null,
    status status_enum not null,
    total int not null
);	