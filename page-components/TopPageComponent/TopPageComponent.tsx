import { TopPageProps } from "./TopPageComponent.props";
import cn from "classnames";
import {
  Advantages,
  HhData,
  Htag,
  Product,
  Sort,
  TagDiv,
} from "../../components";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.intarfece";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating }
  );


  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products});
  }, [products]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {" "}
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <TagDiv color="gray" size="m">
            {" "}
            {products.length}
          </TagDiv>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}
      </div>
      <div className={styles.hhTitle}>
        {" "}
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <TagDiv color="red" size="m">
          {" "}
          hh.ru
        </TagDiv>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2"> Преимущества </Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Htag tag="h2"> Получаемые навыки </Htag>
      {page.tags.map((t) => (
        <TagDiv color="primary" key={t}>
          {" "}
          {t}{" "}
        </TagDiv>
      ))}
    </div>
  );
};
