
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ukctpgutqywmhmykntls.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrY3RwZ3V0cXl3bWhteWtudGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxNDE2MjYsImV4cCI6MTk5NzcxNzYyNn0.eMR_rQM3WF5sY1GieJNMlCn_aoKNCfGjtnGkydoXAZ4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase