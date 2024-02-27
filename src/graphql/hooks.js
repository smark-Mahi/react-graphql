import { useQuery } from "@apollo/client";
import { GET_NOTES } from "./queries";

export function useNotes(q, limit, skip) {
  const { data, loading, error } = useQuery(GET_NOTES, {
    variables: { q, limit, skip },
  });
  return { notes: data?.notes, loading, error: Boolean(error) };
}
