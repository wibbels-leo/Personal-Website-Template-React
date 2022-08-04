import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ switchTheme, theme }) => (
  <BrowserRouter>
    <Layout switchTheme={switchTheme} theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
