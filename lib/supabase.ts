import type {
  PostgrestResponse,
  PostgrestSingleResponse,
  SupabaseClient,
} from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

export function getData<T>(
  response: PostgrestResponse<T> | PostgrestSingleResponse<T>,
) {
  const { data, error } = response;

  if (error) {
    throw error;
  }

  return data;
}

export type SupabaseClientWithHelpers = SupabaseClient & {
  getData: <T>(
    response: PostgrestResponse<T> | PostgrestSingleResponse<T>,
  ) => T | T[] | null;
};

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!,
) as SupabaseClientWithHelpers;

supabase.getData = getData;
