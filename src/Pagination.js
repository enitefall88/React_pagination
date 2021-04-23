import React from "react";
import Page from "./Page"

export default function Pagination() {
  let query = (new URL(document.location)).searchParams;
  let p = Number(query.get("p")) || 1
  return <div className="p-3">
    <Page c={p} n={10}/>
    </div>
}
