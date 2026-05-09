-- Run this once in your Supabase SQL editor to enable CTA click tracking.

create table if not exists public.cta_clicks (
  id uuid primary key default gen_random_uuid(),
  cta_id text not null,
  page_path text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists cta_clicks_cta_id_created_at_idx
  on public.cta_clicks (cta_id, created_at desc);

alter table public.cta_clicks enable row level security;

-- Allow anyone (anon + authenticated) to record a click. No SELECT policy is
-- granted to anon, so click data is not publicly readable.
drop policy if exists "Anyone can insert cta clicks" on public.cta_clicks;
create policy "Anyone can insert cta clicks"
  on public.cta_clicks
  for insert
  to anon, authenticated
  with check (true);

-- Authenticated admins can read their own analytics.
drop policy if exists "Authenticated can read cta clicks" on public.cta_clicks;
create policy "Authenticated can read cta clicks"
  on public.cta_clicks
  for select
  to authenticated
  using (true);
