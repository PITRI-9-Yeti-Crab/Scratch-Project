CREATE TABLE public.users (
	"email" varchar(255) NOT NULL,
	"id" serial NOT NULL,
	"googleId" varchar(255),
	"password" VARCHAR(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.friends (
	"user_id" serial NOT NULL,
	"friend_id" serial NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.films_in_lists (
	"film_id" integer NOT NULL,
	"film_list_id" integer NOT NULL,
	"id" serial NOT NULL,
	"comment" TEXT,
	CONSTRAINT "films_in_lists_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.films (
	"id" serial NOT NULL,
	"api_id" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"image" text NOT NULL,
	"genre" varchar(255),
	"year" varchar(255),
	"language" varchar(255),
	"country" varchar(255),
	"director" varchar(255),
	"actors" varchar(255),
	CONSTRAINT "films_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.film_lists (
	"id" serial NOT NULL,
	"creator_id" serial NOT NULL,
	"film_list_name" varchar(255) NOT NULL,
	CONSTRAINT "film_lists_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.shared_film_lists (
	"user_id" integer NOT NULL,
	"film_list_id" integer NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE public.films_in_lists ADD CONSTRAINT "films_in_lists_fk0" FOREIGN KEY ("film_id") REFERENCES public.films("id");
ALTER TABLE public.films_in_lists ADD CONSTRAINT "films_in_lists_fk1" FOREIGN KEY ("film_list_id") REFERENCES public.film_lists("id");


ALTER TABLE public.film_lists ADD CONSTRAINT "film_lists_fk0" FOREIGN KEY ("creator_id") REFERENCES public.users("id");

ALTER TABLE public.shared_film_lists ADD CONSTRAINT "shared_film_lists_fk0" FOREIGN KEY ("user_id") REFERENCES public.users("id");
ALTER TABLE public.shared_film_lists ADD CONSTRAINT "shared_film_lists_fk1" FOREIGN KEY ("film_list_id") REFERENCES public.film_lists("id");






