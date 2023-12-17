import {
  GetCategoriesDocument,
  GetCategoriesQuery,
  GetCategoriesQueryVariables,
  GetProductsDocument,
  GetProductsQuery,
  GetProductsQueryVariables,
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
  return Object.entries(ProductOrderField).map(([key, value]) => ({
    label: key,
    value,
  }));
}

export async function getProducts(
  {
    sortBy,
    categoryId,
    search,
  }: {
    sortBy: string | undefined;
    categoryId: string | undefined;
    search: string | undefined;
  } = {
    sortBy: ProductOrderField.Name,
    categoryId: undefined,
    search: undefined,
  }
) {
  const sortField = sortBy?.toUpperCase() ?? ProductOrderField.Name;
  const categories = categoryId ? [categoryId] : undefined;

  const result = await client
    .query<GetProductsQuery>(GetProductsDocument, {
      sortField,
      categories,
      search,
    } as GetProductsQueryVariables)
    .toPromise();

  if (result.error) {
    console.error(result.error);
    throw new Error(result.error.message);
  }

  return result?.data?.products?.edges.map(({ node }) => node) ?? [];
}
