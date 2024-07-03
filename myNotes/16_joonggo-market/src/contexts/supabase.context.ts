import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://upwqcjdjqkzepwhivlpz.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY as string;
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
