import React from "react";
import Layout from "../ui/Layout";
import { products } from "../../utils/data";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const TopSelling = () => {
  return (
    <Layout className="bg-[#1B2316]">
      <div>
        <SectionHeading label={"Our Top Selling"} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center px-4">
          {products.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TopSelling;
