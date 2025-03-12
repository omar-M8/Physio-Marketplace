import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://sfrqrzlidnsaxxridjsb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmcnFyemxpZG5zYXh4cmlkanNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0Njk5NzMsImV4cCI6MjA1NzA0NTk3M30.Iz1ZFC9b5aAg0tmsxYYfmHAL-vby-TUJ74KeCqt6PzE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);