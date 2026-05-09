import { supabase } from '../supabase/config'

/**
 * Fire-and-forget CTA click tracker. Never blocks navigation; failures are
 * swallowed so that analytics outages don't break the site.
 *
 * @param {string} ctaId - stable identifier for the CTA (e.g. 'leadership_assessment')
 * @param {object} [extra] - optional extra fields merged into the row
 */
export function trackCtaClick(ctaId, extra = {}) {
  if (!supabase || typeof window === 'undefined') return
  try {
    const payload = {
      cta_id: ctaId,
      page_path: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent || null,
      ...extra,
    }
    // Don't await — let the click proceed immediately.
    supabase.from('cta_clicks').insert(payload).then(({ error }) => {
      if (error) console.warn('[trackCtaClick] insert failed', error.message)
    })
  } catch (e) {
    console.warn('[trackCtaClick] threw', e)
  }
}
