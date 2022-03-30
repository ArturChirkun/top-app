import {
  TopLevelCategory,
  TopPageModel,
} from "../../interfaces/page.intarfece";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
