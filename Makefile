migrate-up:
	@migrate -path db/migration -database "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable" -verbose up
	@echo "Migrate UP database"

migrate-up1:
	@migrate -path db/migration -database "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable" -verbose up 1
	@echo "Migrate UP 1 database"

migrate-down:
	@migrate -path db/migration -database "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable" -verbose down -all
	@echo "Migrate DOWN database"

migrate-down1:
	@migrate -path db/migration -database "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable" -verbose down 1
	@echo "Migrate DOWN 1 database"

migrate-create:
	@read -p "Enter the migration name: " filename; \
	migrate create -dir db/migration -ext "sql" $$filename

undirty:
	@psql "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable" -c "update schema_migrations set dirty = false;"

seeder:
	@psql "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable" -c "\i ./db/seeder.sql"

reset: undirty migrate-down migrate-up seeder

test-sql:
	@pg_prove --host localhost --dbname postgres --username postgres --port 5432 -v db/tests/*.sql

watch-sql:
	@fswatch -o db/tests | xargs -n1 -I{} pg_prove --host localhost --dbname postgres --username postgres --port 5432 -v db/tests/*.sql

psql:
	@psql "postgres://postgres:postgres@localhost:5432/postgres?sslmode=disable"

.PHONY: migrate-up migrate-up1 migrate-down migrate-down1 migrate-create psql reset undirty test-sql seeder
