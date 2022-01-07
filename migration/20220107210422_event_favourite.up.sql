create table if not exists public.event_favourite (
  user_id uuid not null
  , event_id uuid not null

  , constraint event_favourite_pkey primary key (user_id, event_id)

  , constraint user_fkey foreign key (user_id) references
    auth.users (id) on delete cascade
  , constraint event_fkey foreign key (event_id) references
    public.event (id) on delete cascade
);

alter table if exists public.event_favourite enable row level security;

create policy select_policy on public.event_favourite
  for select
    using (auth.uid () = user_id);

create policy insert_policy on public.event_favourite
  for insert
    with check (auth.uid () = user_id);

create policy update_policy on public.event_favourite
  for update
    using (auth.uid () = user_id);

create policy delete_policy on public.event_favourite
  for delete
    using (auth.uid () = user_id);
