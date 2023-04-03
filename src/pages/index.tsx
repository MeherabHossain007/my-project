import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/layout/NavBar";
import Dashboard from "./dashboard";
import Header from "@/components/Header";
import Login from "./login";


export default function Home() {
  return (
    <>
      <main>
        <Login/>
      </main>
    </>
  );
}
