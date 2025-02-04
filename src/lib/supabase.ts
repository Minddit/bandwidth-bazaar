import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fnjqzfctvuzxzxxjohdf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuanF6ZmN0dnV6eHp4eGpvaGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2ODk5MzQsImV4cCI6MjA1NDI2NTkzNH0.xL998pqyhKtlKOVG6_GKl3sKJXr4xqB8lsDQ_sAHtDI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
