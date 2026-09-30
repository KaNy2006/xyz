CREATE DATABASE IF NOT EXISTS computer_component_store CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE computer_component_store;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin','customer') NOT NULL DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(180) NOT NULL UNIQUE,
  category VARCHAR(60) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  price DECIMAL(12,0) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  image VARCHAR(255) DEFAULT '/uploads/component.svg',
  featured TINYINT(1) NOT NULL DEFAULT 0,
  performance INT NOT NULL DEFAULT 70,
  specs JSON NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  customer_name VARCHAR(100) NOT NULL,
  total DECIMAL(12,0) NOT NULL,
  status ENUM('Chờ duyệt','Đang giao','Hoàn tất','Đã hủy') NOT NULL DEFAULT 'Chờ duyệt',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NULL,
  product_name VARCHAR(180) NOT NULL,
  price DECIMAL(12,0) NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS pc_builds (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  order_id INT NULL,
  name VARCHAR(120) NOT NULL DEFAULT 'PC của tôi',
  status ENUM('planned','owned','assembled') NOT NULL DEFAULT 'planned',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS pc_build_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  build_id INT NOT NULL,
  product_id INT NOT NULL,
  category VARCHAR(60) NOT NULL,
  FOREIGN KEY (build_id) REFERENCES pc_builds(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE RESTRICT
);

INSERT INTO users(name,email,password,role) VALUES
('Admin','admin@store.test','admin123','admin'),
('Khách hàng','user@store.test','user123','customer')
ON DUPLICATE KEY UPDATE name=VALUES(name);
