--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4 (Homebrew)
-- Dumped by pg_dump version 15.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: moralesfamily
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


ALTER TABLE public.migrations OWNER TO moralesfamily;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: moralesfamily
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO moralesfamily;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: moralesfamily
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: moralesfamily
--

CREATE TABLE public.students (
    id integer NOT NULL,
    lastname character varying(255),
    firstname character varying(255)
);


ALTER TABLE public.students OWNER TO moralesfamily;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: moralesfamily
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.students_id_seq OWNER TO moralesfamily;

--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: moralesfamily
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: moralesfamily
--

CREATE TABLE public.users (
    id integer NOT NULL,
    lastname character varying(255),
    firstname character varying(255),
    email character varying(255),
    sub character varying(255)
);


ALTER TABLE public.users OWNER TO moralesfamily;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: moralesfamily
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO moralesfamily;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: moralesfamily
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: moralesfamily
--

COPY public.migrations (id, name, run_on) FROM stdin;
1	/20221113192843-initial	2022-11-13 11:55:53.414
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: moralesfamily
--

COPY public.students (id, lastname, firstname) FROM stdin;
1	Gomez	Andrea
2	Lee	Becca
3	Smith	Will
4	Pond	Kate
5	Lasso	Jamie
7	Rodriguez	Arepa
8	Smith	Crush
9	Fonca	Billy
10	Gomez	Teresa
11	Tres	Prueba
12	Cuatro	Prueba
13	Cinco	Prueba
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: moralesfamily
--

COPY public.users (id, lastname, firstname, email, sub) FROM stdin;
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: moralesfamily
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, true);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: moralesfamily
--

SELECT pg_catalog.setval('public.students_id_seq', 16, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: moralesfamily
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
-----------------------------------------------------------------------------------
--
-- Name: child; Type: TABLE; Schema: public; Owner: moralesfamily
--

CREATE TABLE public.child (
    child_id integer NOT NULL,
    birthday date,
    gender character varying(255),
    primary_language character varying(255),
    assessment_score integer,
    parent_id integer,
    assessment_message text,
    number_of_children integer,
    user_id integer
);

ALTER TABLE public.child OWNER TO moralesfamily;

--
-- Name: child_id_seq; Type: SEQUENCE; Schema: public; Owner: moralesfamily
--

CREATE SEQUENCE public.child_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE public.child_id_seq OWNER TO moralesfamily;

--
-- Name: child_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: moralesfamily
--

ALTER SEQUENCE public.child_id_seq OWNED BY public.child.child_id;

--
-- Name: child id; Type: DEFAULT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.child ALTER COLUMN child_id SET DEFAULT nextval('public.child_id_seq'::regclass);

--
-- Name: child_id_seq; Type: SEQUENCE SET; Schema: public; Owner: moralesfamily
--

SELECT pg_catalog.setval('public.child_id_seq', 1, true);

--
-- Name: child child_pkey; Type: CONSTRAINT; Schema: public; Owner: moralesfamily
--

ALTER TABLE ONLY public.child
    ADD CONSTRAINT child_pkey PRIMARY KEY (child_id);
