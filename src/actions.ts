import {
  GetCategoriesDocument,
  GetCategoriesQuery,
  GetCategoriesQueryVariables,
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
  OrderSortField,
  ProductOrderField,
} from "./generated/graphql/graphql";
import { client } from "./graphql";

export async function getCategories() {
  const result = await client
    .query<GetCategoriesQuery>(
      GetCategoriesDocument,
      {} as GetCategoriesQueryVariables
    )
    .toPromise();

  if (result.error) {
    console.error(result.error);
    throw new Error(result.error.message);
  }

  return result?.data?.categories?.edges.map(({ node }) => node) ?? [];
}

export function getSorters() {
  return Object.entries(OrderSortField).map(([key, value]) => ({
    label: key,
    value,
  }));
}

export async function getProducts(
  { sortBy }: { sortBy: ProductOrderField } = {
    sortBy: ProductOrderField.CreatedAt,
  }
) {
  const result = await client
    .query<GetProductsQuery>(GetProductsDocument, {
      sortField: sortBy,
    } as GetProductsQueryVariables)
    .toPromise();

  if (result.error) {
    console.error(result.error);
    throw new Error(result.error.message);
  }

  return result?.data?.products?.edges.map(({ node }) => node) ?? [];
}
