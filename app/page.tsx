"use client";
import React, { useEffect } from "react";
import Subscription from "@/components/Subscription";
import type { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import { getLatestNews } from "@/redux/features/latestNewsSlice";
import { getBusinessNews } from "@/redux/features/businesNewsSlice";
import Recommended from "@/components/Recommended";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  // Dispatch Business News and Latest News on page load
  useEffect(() => {
    dispatch(getLatestNews(''));
  }, [dispatch])

  useEffect(() => {
    dispatch(getBusinessNews())
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Latest title="Latest Posts" />
      <Recommended />
      <Subscription />
    </>
  );
};

export default Home;
