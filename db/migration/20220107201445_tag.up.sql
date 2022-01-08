create table if not exists public.tag (
  id uuid default uuid_generate_v4 ()
  , value text not null
  , color text not null

  , constraint tag_pkey primary key (id)
);

alter table if exists public.tag enable row level security;

create policy select_policy on public.tag
  for select
    using (true);
