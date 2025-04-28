// Setup type definitions for built-in Supabase Runtime APIs
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

console.info('server started');
Deno.serve(async req => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(
      JSON.stringify({
        error: 'Supabase environment variables not set',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
  const supabase = createClient(supabaseUrl, supabaseServiceKey);
  console.log(Deno.env.get('SUPABASE_URL')); // → https://xxxxx.supabase.co

  console.log(supabaseUrl, supabaseServiceKey);

  const { data, error } = await supabase.from('state_resources').select('*');
  if (error) console.error('Supabase error →', error);
  else console.log('Rows →', data);
  console.log(data);

  const { name } = await req.json();
  const returnData = {
    message: `Hello ${name}!`,
    tableData: data,
  };
  return new Response(JSON.stringify(returnData), {
    headers: {
      'Content-Type': 'application/json',
      Connection: 'keep-alive',
    },
  });
});
