import pg from 'pg'
const { Client } = pg

const client = new Client({
  connectionString: 'postgresql://postgres:Tltgowtham1234@db.aibqiqyhnyertokazube.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false }
})

async function setup() {
  await client.connect()

  // Create public media bucket
  await client.query(`
    INSERT INTO storage.buckets (id, name, public)
    VALUES ('media', 'media', true)
    ON CONFLICT (id) DO UPDATE SET public = true;
  `)
  console.log('Created media storage bucket (public)')

  // Allow public read access to media bucket
  await client.query(`
    DROP POLICY IF EXISTS "Public read media" ON storage.objects;
  `)
  await client.query(`
    CREATE POLICY "Public read media" ON storage.objects
      FOR SELECT USING (bucket_id = 'media');
  `)
  console.log('Created public read policy for media')

  // Allow authenticated users to upload
  await client.query(`
    DROP POLICY IF EXISTS "Auth upload media" ON storage.objects;
  `)
  await client.query(`
    CREATE POLICY "Auth upload media" ON storage.objects
      FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
  `)
  console.log('Created auth upload policy for media')

  // Allow authenticated users to update (for upsert)
  await client.query(`
    DROP POLICY IF EXISTS "Auth update media" ON storage.objects;
  `)
  await client.query(`
    CREATE POLICY "Auth update media" ON storage.objects
      FOR UPDATE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
  `)
  console.log('Created auth update policy for media')

  await client.end()
  console.log('Done!')
}

setup().catch(err => {
  console.error('Failed:', err.message)
  process.exit(1)
})
