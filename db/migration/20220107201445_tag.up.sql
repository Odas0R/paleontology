create table if not exists public.tag (
  value text not null
  , color text not null

  , constraint tag_pkey primary key (value)
);

alter table if exists public.tag enable row level security;

create policy select_policy on public.tag
  for select
    using (true);
