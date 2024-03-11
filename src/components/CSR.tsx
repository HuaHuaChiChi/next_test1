"use client";
import { Cat } from "@/apis/api";
import React, { useEffect, useState } from "react";

const CSR = () => {
  const [cat, setCat] = useState<Cat>({ fact: "로딩중", length: 123 });

  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      setCat(result);
    };
    fetchCat();
  }, []);
  console.log(cat);
  return <div>{cat.fact}</div>;
};

export default CSR;
