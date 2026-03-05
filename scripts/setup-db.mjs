import pg from 'pg'
const { Client } = pg

const client = new Client({
  connectionString: 'postgresql://postgres:Tltgowtham1234@db.aibqiqyhnyertokazube.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false }
})

async function setup() {
  await client.connect()
  console.log('Connected to Supabase Postgres')

  // Create tables
  await client.query(`
    CREATE TABLE IF NOT EXISTS content (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL DEFAULT '{}'::jsonb
    );
  `)
  console.log('Created content table')

  await client.query(`
    CREATE TABLE IF NOT EXISTS collections (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL DEFAULT '{}'::jsonb
    );
  `)
  console.log('Created collections table')

  // Enable RLS
  await client.query(`ALTER TABLE content ENABLE ROW LEVEL SECURITY;`)
  await client.query(`ALTER TABLE collections ENABLE ROW LEVEL SECURITY;`)
  console.log('Enabled RLS')

  // Drop existing policies if any (idempotent)
  const policies = [
    `DROP POLICY IF EXISTS "Public read content" ON content`,
    `DROP POLICY IF EXISTS "Auth write content" ON content`,
    `DROP POLICY IF EXISTS "Public read collections" ON collections`,
    `DROP POLICY IF EXISTS "Auth write collections" ON collections`,
  ]
  for (const p of policies) await client.query(p)

  // Create RLS policies
  await client.query(`
    CREATE POLICY "Public read content" ON content
      FOR SELECT USING (true);
  `)
  await client.query(`
    CREATE POLICY "Auth write content" ON content
      FOR ALL USING (auth.role() = 'authenticated');
  `)
  await client.query(`
    CREATE POLICY "Public read collections" ON collections
      FOR SELECT USING (true);
  `)
  await client.query(`
    CREATE POLICY "Auth write collections" ON collections
      FOR ALL USING (auth.role() = 'authenticated');
  `)
  console.log('Created RLS policies')

  await client.end()
  console.log('Done! Tables and policies are set up.')
}

setup().catch(err => {
  console.error('Setup failed:', err.message)
  process.exit(1)
})
