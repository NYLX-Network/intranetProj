CREATE DATABASE usrdatabase;

CREATE TABLE students (
    UUID int,
    userpass int,
    user varchar(255),
    email varchar(255),
    firstName varchar(255),
    middleName varchar(255),
    lastName varchar(255),
    birthDate int,
    startCursus int,
    endCursus int,
    intraRole varchar(255) AND int,
    studentStatus int AND varchar(255),
    campusLocation int AND varchar(255),
);

CREATE TABLE staff (
    UUID int,
    userpass int,
    user varchar(255),
    email varchar(255),
    firstName varchar(255),
    middleName varchar(255),
    lastName varchar(255),
    birthDate int,
    staffPosition varchar(255) AND int,
    isBocal int,
    campusLocation int AND varchar(255),
);