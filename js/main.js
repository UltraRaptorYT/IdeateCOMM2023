const BACKEND_URL =
  window.location.href.indexOf("https://ultraraptoryt.github.io/") == -1
    ? "http://localhost:5001"
    : "https://silverlink-backend.onrender.com";

const SUPABASE_URL = "https://yltebnrrtqbclovmdwuu.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsdGVibnJydHFiY2xvdm1kd3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0MDYzMDksImV4cCI6MjAxMDk4MjMwOX0.K5HM2s7RyapzCTTWDQK3ZWQOwPGDuK_GrQjUOdQezK4";

const SUPABASE_CLIENT = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
