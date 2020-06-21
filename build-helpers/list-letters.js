const fs = require("fs");
const path = require("path");
const prettier = require("typescript-formatter");

const letterEvt = (city, state, type) =>
  `
  () => event('letter download ${type}', '${state} ${city}')
  `.trim();
const cityTemplate = (city, state, mayorDocName, policeDocName) =>
  `
  <li>
    <span className="city">${city}</span>
    <a href="/docs/${mayorDocName}" className="link" onClick={${letterEvt(
    city,
    state,
    "mayor"
  )}} data-no-snap>Mayor</a>
    <a href="/docs/${policeDocName}" className="link" onClick={${letterEvt(
    city,
    state,
    "police chief"
  )}} data-no-snap>Police Chief</a>
  </li>
  `.trim();
const files = fs
  .readdirSync("public/docs")
  .filter((f) => !(f.startsWith(".") || f.startsWith("Template")))
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
        return cityTemplate(c, state, f.Mayor, f.Police);
      })
      .join("\n")}
  </ul>
  `;
});

const fmt = prettier.processString(
  "./src/pages/letters/Letters.tsx",
  `import React, { useState } from 'react';

import "./Letters.scss";
import { pageView, event } from '../../helpers';

const search = (term: string, city: string) => event('search ' + term, city.replace(',', ''))

interface SearchLinkProps {
  city: string;
  term: string;
}
function SearchLink({ city = "City, State", term }: SearchLinkProps) {
  const href = 'https://google.com/search?q=' + encodeURIComponent(city + ' ' + term);
  return (
    <a href={href} target="_blank" rel="noreferrer noopener"
      onClick={() => search(term, city)}
      data-no-snap
    >
      Search
    </a>
  );
}

function Letters() {
  const [city, setCity] = useState('');
  pageView('/letters');

  return (
    <div className="page-letters py-4">
    <p>Cities and states are listed alphabetically, click on each link to download the letter.
    If you don't see a letter for your city, download the blank templates at the bottom of this page.
    </p>
    <p className="pt-4">Thank you for your help in this effort.</p>

    ${nodes.join("\n")}

    <h2>Blank Templates</h2>
    <ul className="pb-4">
      ${cityTemplate(
        "Blank Letters",
        "",
        "Template_Blank_Mayor.docx",
        "Tempalte_Blank_Police.docx"
      )}
    </ul>
    <p>
      In order to fill out these template you will need a few pieces of information,
      some are easy to find and others may require a little more digging. If you type your city in the box below
      we will do our best to help customize searches to find the data.
    </p>
    <div className="location py-4">
        City, State:
        <input placeholder="City, State" value={city} onChange={(e) => setCity(e.target.value)} className="ml-4" />
      </div>
    <p>You will need:</p>
    <ul className="list-disc pl-5 py-2">
      <li>
        The name of your mayor
        (<SearchLink city={city} term="mayor's name" />)
      </li>
      <li>
        The address of your mayor
        (<SearchLink city={city} term="mayor's address" />)
      </li>
      <li>
        The name of your police chief
        (<SearchLink city={city} term="police chief's name" />)
      </li>
      <li>
        The address of your police chief
        (<SearchLink city={city} term="police chief's address" />)
      </li>
      <li>
        The number of police involved deaths in your city
        (<a href="https://connorrothschild.github.io/police-killings/" target="_blank" rel="noopener noreferrer"
          onClick={() => search('police killings', city)}>Search your department</a>)
      </li>
      <li>
        Which of the 8 Can't Wait policies have been implemented in your city
        (
          <a href="https://8cantwait.org/compare/" target="_blank" rel="noopener noreferrer"
            onClick={() => search('use of force', city)}>See if your city is listed here</a>{" "}
          or <SearchLink city={city} term="use of force policies" />
        )
      </li>
    </ul>
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
