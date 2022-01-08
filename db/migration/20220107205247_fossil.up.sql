create type fossil_period as enum (
  'paleogene'
  , 'cretaceous'
  , 'jurassic'
  , 'triassic'
  , 'permian'
  , 'carboniferous'
  , 'devonian'
  , 'silurian'
  , 'ordovician'
  , 'cambrian'
);

create table if not exists public.fossil (
  id uuid default uuid_generate_v4 ()
  , name text not null
  , lifetime decimal not null
  , img_src text not null
  , period fossil_period not null
  , reference_url text not null

  , user_id uuid not null
  , tag_id uuid not null
  , event_id uuid not null

  , constraint fossil_pkey primary key (id)

  , constraint user_fkey foreign key (user_id) references
    auth.users (id) on delete cascade
  , constraint tag_fkey foreign key (tag_id) references
    public.tag (id) on delete cascade
  , constraint event_fkey foreign key (event_id) references
    public.event (id) on delete cascade
);

alter table if exists public.link enable row level security;

create policy select_policy on public.fossil
  for select
    using (true);

create policy insert_policy on public.fossil
  for insert
    with check (auth.uid () = user_id);

create policy update_policy on public.fossil
  for update
    using (auth.uid () = user_id);

create policy delete_policy on public.fossil
  for delete
    using (auth.uid () = user_id);
