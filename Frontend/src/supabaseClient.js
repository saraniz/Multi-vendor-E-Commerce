import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sjzpftjttwkrufzzfxuy.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqenBmdGp0dHdrcnVmenpmeHV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MzUxNzUsImV4cCI6MjA0NzMxMTE3NX0.J35t7uNdF3ZJX1emOJ99mz1WCtdAm3GKY4QaIH7AooI"

export const supabase = createClient(supabaseUrl,supabaseKey)