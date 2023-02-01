cadernos
caderno_id | nome | descricao | data criacao | #pgs
textos
text_id | titulo | texto | data_criacao |ultima modificao | caderno_id

pegar cadernos
pegar textos de caderno
criar novo texto
criar novo caderno
editar texto

create table notebooks (id int primary key auto_increment,
						name varchar(255),
                        created datetime);

create table chapters (id int primary key auto_increment,
					   note_id int,
                       title varchar(255),
					   description varchar(255),
                       created datetime,
                       last_mod datetime);
                       
create table texts (id int primary key,
					text text);

insert into journal.notebooks (name, created) values ('Grammar', now())
insert into journal.notebooks (name, created) values ('Rethoric', now());
insert into journal.notebooks (name, created) values ('Logic', now())
insert into journal.chapters (note_id, title, description, created, last_mod) values (1, "Intro", "This is an intro to the subject of...", now(), now())
