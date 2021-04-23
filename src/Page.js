import React from "react"


export default function Page({c, n = 10}) {
  let prev = c - 1 >= 1 ? c - 1 : null
  let next = c + 1 <= n ? c + 1 : null

  return <nav>
    <ul className="pagination">
      {prev &&
        <li className="page-item">
          <a className="page-link" href={"?p=" + prev}>Previous</a>
        </li>
      }
      {range(n).map(i => {
        let p = i + 1
        return <li className={`page-item ${p == c ? "active" : ""}`} key={i}>
          <a className="page-link" href={"?p=" + p}>{p}</a>
        </li>
      })}
      {next &&
        <li className="page-item">
          <a className="page-link" href={"?p=" + next}>Next</a>
        </li>
      }
    </ul>
  </nav>
}

function range(n) {
  return [...Array(n).keys()]
}
