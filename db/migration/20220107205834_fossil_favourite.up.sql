create table if not exists public.fossil_favourite (
  user_id uuid not null
  , fossil_id uuid not null

  , constraint fossil_favourite_pkey primary key (user_id, fossil_id)

  , constraint user_fkey foreign key (user_id) references
    auth.users (id) on delete cascade
  , constraint fossil_fkey foreign key (fossil_id) references
    public.fossil (id) on delete cascade
);

alter table if exists public.fossil_favourite enable row level security;

create policy select_policy on public.fossil_favourite
  for select
    using (auth.uid () = user_id);

create policy insert_policy on public.fossil_favourite
  for insert
    with check (auth.uid () = user_id);

create policy update_policy on public.fossil_favourite
  for update
    using (auth.uid () = user_id);

create policy delete_policy on public.fossil_favourite
  for delete
    using (auth.uid () = user_id);
