import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://stmfzevkywzgpdwgiclh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0bWZ6ZXZreXd6Z3Bkd2dpY2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5OTY4ODYsImV4cCI6MjA3NDU3Mjg4Nn0.0fqrcPlvlq2fPqCcLIRQW5qxqZiuuVjnga0opsHrTJw',
)
