CREATE DATABASE gaming_news;

USE gaming_news;

CREATE TABLE news (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO news (title, content) VALUES ('أخبار الألعاب اليوم', 'تفاصيل الخبر...');
