CREARE DABATASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    salary DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employees (name, salary) VALUES ('John Doe', 50000.00); 
INSERT INTO employees (name, salary) VALUES ('Jane Smith', 60000.00);

