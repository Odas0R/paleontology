create table if not exists public.user_profile (
  id uuid not null
  , name text
  , avatar_url text 

  , constraint user_profile_pkey primary key (id)
  , constraint user_fkey foreign key (id) references
    auth.users (id) on delete cascade
);

select * from public.user_profile;

alter table if exists public.user_profile enable row level security;

create policy select_policy on public.user_profile
  for select
    using (true);

create policy update_policy on public.user_profile
  for update
    using (auth.uid () = id);

create function public.handle_new_user() returns trigger as $$
begin
  insert into public.user_profile (id, name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'picture');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
