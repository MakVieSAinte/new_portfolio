// src/supabase.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://juvonyzgfkhxyidadlzt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dm9ueXpnZmtoeHlpZGFkbHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NTEzNzQsImV4cCI6MjA2NjAyNzM3NH0.JCPPbEkOXQkIXg1aaK5dxYgE1SJqdzbXMmkhEw1Ca1M',
)
