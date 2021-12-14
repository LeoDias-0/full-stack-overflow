create table "users" (
  id serial primary key not null,
  name text not null,
  class text not null,
  token text not null
);


create table "questions" (
  id serial primary key not null,
  question text not null,
  student text not null,
  class text not null,
  tags text not null,
  answered boolean not null default false,
  submit_at text not null,
  answered_at text,
  answered_by text,
  answer text
);
