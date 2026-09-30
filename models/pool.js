import { Pool } from 'pg';

const pool = new Pool({
	connectionString: `postgresql://${{ PGUSER }}:${{ POSTGRES_PASSWORD }}@${{ RAILWAY_PRIVATE_DOMAIN }}:${PGPORT}/${{ PGDATABASE }}`,
});

export { pool };
