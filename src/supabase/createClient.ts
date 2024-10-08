import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
if (
  !process.env.EXPO_PUBLIC_SUPABASE_URL ||
  !process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
) {
  throw new Error('Supabase environment variables are not defined.');
}
const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
);

export default supabase;
