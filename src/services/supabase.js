import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ygwybhmbevnlgflczbiu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlnd3liaG1iZXZubGdmbGN6Yml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMzg2NjEsImV4cCI6MjAyMDgxNDY2MX0._k9soCVsTndI1B-ZOtZXwD0hHIed22IxvldRatvZRr8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
