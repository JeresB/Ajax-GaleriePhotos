#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: photos
#------------------------------------------------------------

CREATE TABLE photos(
        id     int (11) Auto_increment  NOT NULL ,
        title  Varchar (255) ,
        url    Varchar (255) NOT NULL ,
        bigUrl Varchar (255) ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: commentaire
#------------------------------------------------------------

CREATE TABLE commentaire(
        id          int (11) Auto_increment  NOT NULL ,
        commentaire Varchar (255) ,
        id_image    Integer ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


