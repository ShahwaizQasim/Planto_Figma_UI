import React from "react";
import Layout from "../ui/Layout";
import SectionHeading from "../ui/SectionHeading";
import { CustomerReview as customerReviews } from "../../utils/data";
import Card from "../ui/Card";

const CustomerReview = () => {
  const reviewCards = customerReviews.map((item) => ({
    ...item,
    image: item.image,
    title: item.text,
    buttonText: item.buttonText || "Read More",
  }));

  return (
    <Layout className="bg-[#1B2316] pb-10">
      <SectionHeading label={"Customer Review"} />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8 px-8">
        {reviewCards.map((item) => (
          <Card key={item.id} data={item} isData={true} />
        ))}
      </div>
    </Layout>
  );
};

export default CustomerReview;
