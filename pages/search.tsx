import React from "react";
import { withLayout } from "../layout/layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.intarface";
import { GetStaticProps } from "next";

export function Search(): JSX.Element {

  return (
    <> 
    Search

    </>
  );
}
 
export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number;
}