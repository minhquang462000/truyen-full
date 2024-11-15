import { IBook, IFilter } from "@/interfaces";
import axios from "axios";
import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getListBooks(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const search = query.search ? query.search : "";
  const tags = query.tag ? query.tag : "";
  const categories = query.categories ? query.categories : "";
  const author = query.author ? query.author : "";
  const views = query.views ? query.views : 0;
  const contributor = query.contributor ? query.contributor : "";
  const chapter = query.chapter ? query.chapter : "";
  ///---> Params
  const params: any = {
    page,
    limit,
    name: search,
    tags,
    categories,
    authors: author,
    views,
    status: query.status,
    contributor,
    chapter,
  };
  const keys = Object.keys(params) as (keyof IFilter)[];
  keys.forEach((key) => {
    if (
      params[key] === "" ||
      (Array.isArray(params[key]) && params[key].length === 0) ||
      !params[key]
    ) {
      delete params[key];
    }
  });
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/books`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res.data ;
    const total = res.headers["x-total-count"] ;
    return { data, total };
  } catch (e) {
    return null;
  }
}

export async function getListBooksNoTotal(query: IFilter) {
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  const search = query.search ? query.search : "";
  const tags = query.tag ? query.tag : "";
  const categories = query.categories ? query.categories : "";
  const author = query.author ? query.author : "";
  const views = query.views ? query.views : 0;
  const contributor = query.contributor ? query.contributor : "";
  ///---> Params
  const params: any = {
    page,
    limit,
    name: search,
    tags,
    categories,
    authors: author,
    views,
    status: query.status,
    contributor,
  };
  const keys = Object.keys(params) as (keyof IFilter)[];
  keys.forEach((key) => {
    if (
      params[key] === "" ||
      (Array.isArray(params[key]) && params[key].length === 0) ||
      !params[key]
    ) {
      delete params[key];
    }
  });
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/books`, {
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
}

export async function getListBooksByViews(query: IFilter) {
  const keys = query.key || "";
  const page = query.page ? query.page : 1;
  const limit = query.limit ? query.limit : 10;
  try {
    const res = await axios.get(
      `${API_URL}/api/client/books-views?key=${keys}${page}&limit=${limit}`
    );
    return {
      data: res.data,
      total: res.headers["x-total-count"],
    };
  } catch (e) {
    return null;
  }
}
export const getOneBook = async (id: string) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const res = await axios.get(`${API_URL}/api/client/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    return null;
  }
};
