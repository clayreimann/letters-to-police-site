const fs = require("fs");
const path = require("path");
const prettier = require("typescript-formatter");

const files = fs
  .readdirSync("public/docs")
  .filter((f) => !f.startsWith("."))
  .reduce((all, f) => {
    const [city, state, type] = path.basename(f, ".docx").split("_");
    if (!all[state]) {
      all[state] = {};
    }
    if (!all[state][city]) {
      all[state][city] = {};
    }
    all[state][city][type] = f;
    return all;
  }, {});

const states = Object.keys(files);
states.sort();
const nodes = states.map((state) => {
  const cities = Object.keys(files[state]);
  cities.sort();
  return `<h2>${state}</h2>
  <ul>
    ${cities
      .map((c) => {
        const f = files[state][c];
        return `<li>
        <span className="city">${c}</span>
        <a href="/docs/${f.Mayor}" className="link" data-no-snap>Mayor</a>
        <a href="/docs/${f.Police}" className="link" data-no-snap>Police</a>
        </li>`;
      })
      .join("\n")}
  </ul>
  `;
});

const fmt = prettier.processString(
  "./src/pages/letters/Letters.tsx",
  `import React from "react";
import "./Letters.scss";

function Letters() {
  return (
    <div className="page-letters">
    <p>Cities and states are listed alphabetically, click on each link to download the letter.</p>
    ${nodes.join("\n")}
    </div>
  );
}

export default Letters;
`,
  { tsconfig: true, tsconfigFile: "./tsconfig.json", tsfmt: true, vscode: true }
);

fmt.then(
  (res) => {
    const { dest } = res;
    fs.writeFileSync("./src/pages/letters/Letters.tsx", dest);
  },
  (err) => console.error(err)
);
