import { networkFetch } from "./network";

export async function getPreloadedQuery({ params }, variables) {
  console.log({ params });
  const response = await networkFetch(params.id, variables);
  return {
    params,
    variables,
    response,
  };
}
