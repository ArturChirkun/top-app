import React, { useState } from "react";
import { Button, Htag, Input, P, Rating, TagDiv, TextArea } from "../components";
import { withLayout } from "../layout/layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.intarface";
import { GetStaticProps } from "next";
import { API } from "../helpers/api";

export function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary" className="sdsds" arrow="right">
        {" "}
        Кнопка
      </Button>
      <Button appearence="ghost"> Кнопка</Button>
      <P>
        {" "}
        Напишу сразу в двух курсах, так как проходил оба. Java будет многим
        непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего
        положения языка как самого популярного в программировании. Выбор мой пал
        на эту профессию еще и потому, что Java-разработчики получают самую
        большую зарплату.
      </P>
      <TagDiv> Мал </TagDiv>
      <TagDiv color="primary"> Мал </TagDiv>
      <TagDiv color="red"> Мал </TagDiv>
      <TagDiv color="green"> Мал </TagDiv>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="test"/> 
      <TextArea placeholder="test"/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    API.topPage.find,
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
