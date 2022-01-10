create table if not exists public.event (
  id uuid default uuid_generate_v4 ()
  , user_id uuid not null
  , title text not null
  , description text not null

  , constraint event_pkey primary key (id)

  , constraint user_fkey foreign key (user_id) references
    public.user_profile (id) on delete cascade
);

alter table if exists public.event enable row level security;

create policy select_policy on public.event
  for select
    using (true);

create policy insert_policy on public.event
  for insert
    with check (auth.uid () = user_id);

create policy update_policy on public.event
  for update
    using (auth.uid () = user_id);

create policy delete_policy on public.event
  for delete
    using (auth.uid () = user_id);
