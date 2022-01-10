-- create an event trigger function
create or replace function public.pgrst_watch() returns event_trigger
  language plpgsql
  as $$
begin
  notify pgrst, 'reload schema';
end;
$$;

-- this event trigger will fire after every ddl_command_end event
create event trigger pgrst_watch
  on ddl_command_end
  execute procedure public.pgrst_watch();
