CREATE DATABASE tasksdb;
CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(150),
    description VARCHAR(255),
    task_created_at TIMESTAMP
)