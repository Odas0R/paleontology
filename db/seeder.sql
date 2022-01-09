\set user_0 '81df0708-0911-38e8-97b4-e36565538222'
\set user_1 '4626d5a2-5054-3673-8dc7-aea3fcf051e4'
\set user_2 '54360d69-4d27-3021-b8e4-757a5a00159d'
\set user_3 '05c83e48-3000-3597-ac26-671895904489'

-- ========================
-- Users
-- ========================

truncate table auth.users cascade;
insert into auth.users (id, email, raw_user_meta_data) values
(:'user_0', 'terry.gorczany@gmail.com', '{"name":"Guilherme Rosado","picture":"https://lh3.googleusercontent.com/a-/AOh14GgCgcu-0Onz8sr8AGxexg1Q5Qxwl5lZ4zE5oPgSGQ=s96-c"}'),
(:'user_1', 'camille93@boyle.biz', '{"name":"Mary Rosado","picture":"https://lh3.googleusercontent.com/a-/AOh14GgCgcu-0Onz8sr8AGxexg1Q5Qxwl5lZ4zE5oPgSGQ=s96-c"}'),
(:'user_2', 'shanel97@russel.com', '{"name":"Lets Rosado","picture":"https://lh3.googleusercontent.com/a-/AOh14GgCgcu-0Onz8sr8AGxexg1Q5Qxwl5lZ4zE5oPgSGQ=s96-c"}'),
(:'user_3', 'tgleason@yahoo.com', '{"name":"Something Lol","picture":"https://lh3.googleusercontent.com/a-/AOh14GgCgcu-0Onz8sr8AGxexg1Q5Qxwl5lZ4zE5oPgSGQ=s96-c"}');


-- ========================
-- Tags
-- ========================

truncate table public.tag cascade;
insert into public.tag (value, color) values
  ('index', 'yellow'),
  ('trace', 'teal'),
  ('transitional', 'cyan'),
  ('microfossil', 'green'),
  ('resin', 'rose'),
  ('derived', 'orange'),
  ('wood', 'purple'),
  ('precambrian', 'slate'),
  ('paleozoic', 'gray'),
  ('mesozoic', 'green'),
  ('cenozoic', 'amber');

-- ========================
-- Users
-- ========================



