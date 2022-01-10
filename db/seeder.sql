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
  ('true form', 'blue'),
  ('precambrian', 'slate'),
  ('paleozoic', 'gray'),
  ('mesozoic', 'green'),
  ('cenozoic', 'amber');


truncate table public.event cascade;
insert into public.event (id, user_id, title, description) values
  ('76387373-c89b-4aa0-9dc6-a3cb5b9e78ad', '81df0708-0911-38e8-97b4-e36565538222','Trip to Fossil Ravine','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nibh nisi, sed commodo leo placerat id. Mauris finibus tincidunt turpis, ac congue urna cursus eget. Morbi quis nunc eleifend, maximus odio ac, egestas tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer quis fringilla tellus'),
  ('99cfa2b1-5c7b-4eb5-b33c-77311fbc2243', '4626d5a2-5054-3673-8dc7-aea3fcf051e4','Internet Search','Went on Wikipedia to try and add some new entries to this website, I love it!'),
  ('7561e246-d5b7-475e-a440-db04fe9b28a9', '05c83e48-3000-3597-ac26-671895904489','Trip to National History Museum','Collection of pictures from my day at the museum.'),
  ('abb65712-eda7-4bd7-b8b8-3fdb0a8572c0', '05c83e48-3000-3597-ac26-671895904489','A Tour Through Time','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nibh nisi, sed commodo leo placerat id. Mauris finibus tincidunt turpis, ac congue urna cursus eget. Morbi quis nunc eleifend, maximus odio ac, egestas tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer quis fringilla tellus. Nulla feugiat mi condimentum ante rhoncus pharetra. Proin libero libero, accumsan sed gravida a, sodales sed est. Mauris ac augue id nisl commodo molestie et vitae metus. Donec condimentum nisl at ante hendrerit fermentum et ut arcu. Ut tempor eu velit pretium pharetra. Maecenas eget volutpat lectus, id eleifend purus. Nunc urna sem, dapibus sit amet tellus nec, pellentesque interdum orci. Nunc rutrum velit at sem bibendum, eu ultricies ante tristique. Ut auctor eros a iaculis dapibus. In in risus nunc. Curabitur porta lorem dolor, sit amet tincidunt mi fermentum et.');

-- ========================
-- Fossils
-- ========================

truncate table public.fossil cascade;
insert into public.fossil (name, lifetime, img_src, period, reference_url, user_id, tag) values
  ('Trilobite', '521', 'https://upload.wikimedia.org/wikipedia/commons/2/21/Paradoxides_sp.jpg', 'cambrian', 'https://en.wikipedia.org/wiki/Trilobite', '81df0708-0911-38e8-97b4-e36565538222', 'index'),
  ('Inoceramidae', '299', 'https://upload.wikimedia.org/wikipedia/commons/9/99/InoceramusCretaceousSouthDakota.jpg', 'permian', 'https://en.wikipedia.org/wiki/Inoceramidae', '81df0708-0911-38e8-97b4-e36565538222', 'index'),
  ('Ammonite', '409', 'https://upload.wikimedia.org/wikipedia/commons/0/00/Pleuroceras_solare%2C_Little_Switzerland%2C_Bavaria%2C_Germany.jpg', 'devonian', 'https://en.wikipedia.org/wiki/Ammonoidea', '81df0708-0911-38e8-97b4-e36565538222', 'index'),
  ('Graptolites', '510', 'https://upload.wikimedia.org/wikipedia/commons/f/fa/ROM28084_Cryptograptus_%281%29.jpg', 'cambrian', 'https://en.wikipedia.org/wiki/Graptolithina', '81df0708-0911-38e8-97b4-e36565538222', 'index'),
  ('Archaeocyatha', '525', 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Branching_archaeocyath.jpg', 'cambrian', 'https://en.wikipedia.org/wiki/Archaeocyatha', '81df0708-0911-38e8-97b4-e36565538222', 'index'),
  ('Coprolite', '70', 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Coprolite.jpg', 'cretaceous', 'https://en.wikipedia.org/wiki/Coprolite', '4626d5a2-5054-3673-8dc7-aea3fcf051e4', 'trace'),
  ('Stromatolite', '3400', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Stromatolites_hoyt_mcr1.JPG', 'precambrian', 'https://en.wikipedia.org/wiki/Stromatolite', '4626d5a2-5054-3673-8dc7-aea3fcf051e4', 'index'),
  ('Conodont', '520', 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Manticolepis_subrecta.jpg', 'cambrian', 'https://en.wikipedia.org/wiki/Conodont', '4626d5a2-5054-3673-8dc7-aea3fcf051e4', 'microfossil'),
  ('Chitinozoa', '489', 'https://upload.wikimedia.org/wikipedia/commons/2/25/Whole_chitinozoan_cropped.jpg', 'ordovician', 'https://en.wikipedia.org/wiki/Chitinozoan', '4626d5a2-5054-3673-8dc7-aea3fcf051e4', 'microfossil'),
  ('Acritarch', '1800', 'https://upload.wikimedia.org/wikipedia/en/4/46/Doushantou_Embryo_Yinetal2007.jpg', 'precambrian', 'https://en.wikipedia.org/wiki/Acritarch', '4626d5a2-5054-3673-8dc7-aea3fcf051e4', 'microfossil'),
  ('Palaeoperca', '48', 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Palaeoperca_proxima.jpg', 'paleogene', 'https://en.wikipedia.org/wiki/Palaeoperca', '54360d69-4d27-3021-b8e4-757a5a00159d', 'transitional'),
  ('Cyclobatis', '99', 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cyclobatis_major_1.JPG', 'cretaceous', 'https://en.wikipedia.org/wiki/Cyclobatis', '54360d69-4d27-3021-b8e4-757a5a00159d', 'transitional'),
  ('Electrorana', '99', 'https://upload.wikimedia.org/wikipedia/commons/4/41/Fossil_frog_in_amber.png', 'cretaceous', 'https://en.wikipedia.org/wiki/Electrorana', '54360d69-4d27-3021-b8e4-757a5a00159d', 'resin'),
  ('Plesiosauria', '203', 'https://upload.wikimedia.org/wikipedia/commons/5/57/CentrumSideView.jpg', 'triassic', 'https://en.wikipedia.org/wiki/Plesiosauria', '54360d69-4d27-3021-b8e4-757a5a00159d', 'derived'),
  ('Plesiosauria', '203', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Peloneustes_philarchus_Tubingen.JPG', 'triassic', 'https://en.wikipedia.org/wiki/Plesiosauria', '54360d69-4d27-3021-b8e4-757a5a00159d', 'true form'),
  ('Araucarioxylon arizonicum', '298', 'https://upload.wikimedia.org/wikipedia/commons/5/55/Araucarioxylon_arizonicum_%28petrified_wood%29_-_National_Museum_of_Natural_History%2C_United_States_-_DSC08540.JPG', 'permian', 'https://en.wikipedia.org/wiki/Araucarioxylon_arizonicum', '05c83e48-3000-3597-ac26-671895904489', 'wood'),
  ('Araucaria cone', '200', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Petrified_Araucaria_cone_from_patagonia-Edit3.jpg', 'jurassic', 'https://en.wikipedia.org/wiki/Araucaria', '05c83e48-3000-3597-ac26-671895904489', 'wood'),
  ('Palmoxylon', '85', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Petrified-Forest-Chemnitz4.JPG', 'cretaceous', 'https://en.wikipedia.org/wiki/Palmoxylon', '05c83e48-3000-3597-ac26-671895904489', 'wood'),
  ('Triceratops', '68', 'https://upload.wikimedia.org/wikipedia/commons/e/ec/LA-Triceratops_mount-2.jpg', 'cretaceous', 'https://en.wikipedia.org/wiki/Triceratops', '05c83e48-3000-3597-ac26-671895904489', 'true form'),
  ('Velociraptor', '75', 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Velociraptor_fruita_2.jpg', 'cretaceous', 'https://en.wikipedia.org/wiki/Velociraptor', '05c83e48-3000-3597-ac26-671895904489', 'true form'),
  ('Pterodactyl', '150', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Bsp_as_i_739_modified.png', 'jurassic', 'https://en.wikipedia.org/wiki/Pterodactylus', '05c83e48-3000-3597-ac26-671895904489', 'true form'),
  ('Brachiosaurus', '154', 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Brachiosaurus_mount.jpg', 'jurassic', 'https://en.wikipedia.org/wiki/Brachiosaurus', '05c83e48-3000-3597-ac26-671895904489', 'true form'),
  ('Brontosaurus', '156', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Brontosaurus_Yale_Peabody_cropped.jpg', 'jurassic', 'https://en.wikipedia.org/wiki/Brontosaurus', '05c83e48-3000-3597-ac26-671895904489', 'true form');


update public.fossil
set event_id = '76387373-c89b-4aa0-9dc6-a3cb5b9e78ad'
where name = 'Trilobite';

update public.fossil
set event_id = '76387373-c89b-4aa0-9dc6-a3cb5b9e78ad'
where name = 'Inoceramidae';

update public.fossil
set event_id = '99cfa2b1-5c7b-4eb5-b33c-77311fbc2243'
where name = 'Stromatolite';

update public.fossil
set event_id = '7561e246-d5b7-475e-a440-db04fe9b28a9'
where name = 'Brontosaurus';

update public.fossil
set event_id = '7561e246-d5b7-475e-a440-db04fe9b28a9'
where name = 'Brachiosaurus';

update public.fossil
set event_id = '7561e246-d5b7-475e-a440-db04fe9b28a9'
where name = 'Pterodactyl';

update public.fossil
set event_id = '7561e246-d5b7-475e-a440-db04fe9b28a9'
where name = 'Velociraptor';

update public.fossil
set event_id = '7561e246-d5b7-475e-a440-db04fe9b28a9'
where name = 'Triceratops';

update public.fossil
set event_id = 'abb65712-eda7-4bd7-b8b8-3fdb0a8572c0'
where name = 'Palmoxylon';

update public.fossil
set event_id = 'abb65712-eda7-4bd7-b8b8-3fdb0a8572c0'
where name = 'Araucaria cone';

update public.fossil
set event_id = 'abb65712-eda7-4bd7-b8b8-3fdb0a8572c0'
where name = 'Araucarioxylon arizonicum';

