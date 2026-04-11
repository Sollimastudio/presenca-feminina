import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://rkkpbmzrucaghrojujvb.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJra3BibXpydWNhZ2hyb2p1anZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDY2OTUsImV4cCI6MjA4NTEyMjY5NX0.Ewlca9nzVE6bDdTmlbmQO-c0ovirMDiXlphRtdGlH-M'
);

export async function track(event: 'quiz_started' | 'quiz_completed' | 'sales_viewed', result?: string) {
  try {
    await supabase.from('quiz_events').insert({
      app: 'feminino',
      event,
      result: result ?? null,
    });
  } catch {
    // silencioso — tracking nunca quebra o app
  }
}
