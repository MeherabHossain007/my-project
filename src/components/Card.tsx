import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="block max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
        {children}
    </a>
  );
}
