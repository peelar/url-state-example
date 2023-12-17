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

  const categories =
    result?.data?.categories?.edges.map(({ node }) => node) ?? [];

  return [{ slug: "", name: "All", id: "" }, ...categories];
}

export function getSorters() {
  return Object.entries(OrderSortField).map(([key, value]) => ({
    label: key,
    value,
  }));
}

export async function getProducts(
  {
    sortBy,
    categoryId,
  }: {
    sortBy: string | undefined;
    categoryId: string | undefined;
  } = {
    sortBy: ProductOrderField.Name,
    categoryId: undefined,
  }
) {
  const sortField = sortBy ?? ProductOrderField.Name;
  const categories = categoryId ? [categoryId] : undefined;
  const result = await client
    .query<GetProductsQuery>(GetProductsDocument, {
      sortField,
      categories,
    } as GetProductsQueryVariables)
    .toPromise();

  if (result.error) {
    console.error(result.error);
    throw new Error(result.error.message);
  }

  return result?.data?.products?.edges.map(({ node }) => node) ?? [];
}
