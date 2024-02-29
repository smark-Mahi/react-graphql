import { useQuery } from "@apollo/client";
import { GET_NOTES } from "./queries";

export function useNotes(q, page) {
  const { data, loading, error } = useQuery(GET_NOTES, {
    variables: { q, page },
  });
  return {
    notes: data?.notes.notes,
    loading,
    error: Boolean(error),
    totalPages: data?.notes.totalPages,
  };
}
