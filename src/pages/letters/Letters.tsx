import React, { useState } from 'react';

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
      Search{city && city !== "City, State" ? " " + city : ""}
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

      <h2>AZ</h2>
      <ul className="state">
        <li>
          <span className="city">Mesa</span>
          <a href="/docs/Mesa_AZ_Mayor_Giles.docx" className="link"
            onClick={() => event('letter download mayor', 'AZ Mesa')} data-no-snap
          >Mayor</a>
          <a href="/docs/Mesa_AZ_Police_Cost.docx" className="link"
            onClick={() => event('letter download police chief', 'AZ Mesa')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Phoenix</span>
          <a href="/docs/Phoenix_AZ_Mayor_Gallego.docx" className="link"
            onClick={() => event('letter download mayor', 'AZ Phoenix')} data-no-snap
          >Mayor</a>
          <a href="/docs/Phoenix_AZ_Police_Williams.docx" className="link"
            onClick={() => event('letter download police chief', 'AZ Phoenix')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Scottsdale</span>
          <a href="/docs/Scottsdale_AZ_Mayor_Lane.docx" className="link"
            onClick={() => event('letter download mayor', 'AZ Scottsdale')} data-no-snap
          >Mayor</a>
          <a href="/docs/Scottsdale_AZ_Police_Rodbell.docx" className="link"
            onClick={() => event('letter download police chief', 'AZ Scottsdale')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Tuscon</span>
          <a href="/docs/Tuscon_AZ_Mayor_Romero.docx" className="link"
            onClick={() => event('letter download mayor', 'AZ Tuscon')} data-no-snap
          >Mayor</a>
          <a href="/docs/Tuscon_AZ_Police_Magnus.docx" className="link"
            onClick={() => event('letter download police chief', 'AZ Tuscon')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>CA</h2>
      <ul className="state">
        <li>
          <span className="city">Anaheim</span>
          <a href="/docs/Anaheim_CA_Mayor_Sidhu.docx" className="link"
            onClick={() => event('letter download mayor', 'CA Anaheim')} data-no-snap
          >Mayor</a>
          <a href="/docs/Anaheim_CA_Police_Cisneros.docx" className="link"
            onClick={() => event('letter download police chief', 'CA Anaheim')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Fresno</span>
          <a href="/docs/Fresno_CA_Mayor_Brand.docx" className="link"
            onClick={() => event('letter download mayor', 'CA Fresno')} data-no-snap
          >Mayor</a>
          <a href="/docs/Fresno_CA_Police_Hall.docx" className="link"
            onClick={() => event('letter download police chief', 'CA Fresno')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Long Beach</span>
          <a href="/docs/Long Beach_CA_Mayor_Garcia.docx" className="link"
            onClick={() => event('letter download mayor', 'CA Long Beach')} data-no-snap
          >Mayor</a>
          <a href="/docs/Long Beach_CA_Police_Luna.docx" className="link"
            onClick={() => event('letter download police chief', 'CA Long Beach')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Los Angeles</span>
          <a href="/docs/Los Angeles_CA_Mayor_Garcetti.docx" className="link"
            onClick={() => event('letter download mayor', 'CA Los Angeles')} data-no-snap
          >Mayor</a>
          <a href="/docs/Los Angeles_CA_Police_Moore.docx" className="link"
            onClick={() => event('letter download police chief', 'CA Los Angeles')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Oakland</span>
          <a href="/docs/Oakland_CA_Mayor_Schaff.docx" className="link"
            onClick={() => event('letter download mayor', 'CA Oakland')} data-no-snap
          >Mayor</a>
          <a href="/docs/Oakland_CA_Police_Manheimer.docx" className="link"
            onClick={() => event('letter download police chief', 'CA Oakland')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Sacramento</span>
          <a href="/docs/Sacramento_CA_Mayor_Steinberg.docx" className="link"
            onClick={() => event('letter download mayor', 'CA Sacramento')} data-no-snap
          >Mayor</a>
          <a href="/docs/Sacramento_CA_Police_Hahn.docx" className="link"
            onClick={() => event('letter download police chief', 'CA Sacramento')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">San Diego</span>
          <a href="/docs/San Diego_CA_Mayor_Faulconer.docx" className="link"
            onClick={() => event('letter download mayor', 'CA San Diego')} data-no-snap
          >Mayor</a>
          <a href="/docs/San Diego_CA_Police_Nisleit.docx" className="link"
            onClick={() => event('letter download police chief', 'CA San Diego')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">San Francisico</span>
          <a href="/docs/San Francisico_CA_Mayor_Breed.docx" className="link"
            onClick={() => event('letter download mayor', 'CA San Francisico')} data-no-snap
          >Mayor</a>
          <a href="/docs/San Francisico_CA_Police_Scott.docx" className="link"
            onClick={() => event('letter download police chief', 'CA San Francisico')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">San Jose</span>
          <a href="/docs/San Jose_CA_Mayor_Liccardo.docx" className="link"
            onClick={() => event('letter download mayor', 'CA San Jose')} data-no-snap
          >Mayor</a>
          <a href="/docs/San Jose_CA_Police_Garcia.docx" className="link"
            onClick={() => event('letter download police chief', 'CA San Jose')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Santa Ana</span>
          <a href="/docs/Santa Ana_CA_Mayor_Pulido.docx" className="link"
            onClick={() => event('letter download mayor', 'CA Santa Ana')} data-no-snap
          >Mayor</a>
          <a href="/docs/Santa Ana_CA_Police_ Valentin.docx" className="link"
            onClick={() => event('letter download police chief', 'CA Santa Ana')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>CO</h2>
      <ul className="state">
        <li>
          <span className="city">Colorado Springs</span>
          <a href="/docs/Colorado Springs_CO_Mayor_Suthers.docx" className="link"
            onClick={() => event('letter download mayor', 'CO Colorado Springs')} data-no-snap
          >Mayor</a>
          <a href="/docs/Colorado Springs_CO_Police_Niski.docx" className="link"
            onClick={() => event('letter download police chief', 'CO Colorado Springs')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Denver</span>
          <a href="/docs/Denver_CO_Mayor_Hancock.docx" className="link"
            onClick={() => event('letter download mayor', 'CO Denver')} data-no-snap
          >Mayor</a>
          <a href="/docs/Denver_CO_Police_Pazen.docx" className="link"
            onClick={() => event('letter download police chief', 'CO Denver')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>CT</h2>
      <ul className="state">
        <li>
          <span className="city">Hartford</span>
          <a href="/docs/Hartford_CT_Mayor_Bronin.docx" className="link"
            onClick={() => event('letter download mayor', 'CT Hartford')} data-no-snap
          >Mayor</a>
          <a href="/docs/Hartford_CT_Police_Thody.docx" className="link"
            onClick={() => event('letter download police chief', 'CT Hartford')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>DC</h2>
      <ul className="state">
        <li>
          <span className="city">Washington</span>
          <a href="/docs/Washington_DC_Mayor_Bowser.docx" className="link"
            onClick={() => event('letter download mayor', 'DC Washington')} data-no-snap
          >Mayor</a>
          <a href="/docs/Washington_DC_Police_Newsham.docx" className="link"
            onClick={() => event('letter download police chief', 'DC Washington')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>FL</h2>
      <ul className="state">
        <li>
          <span className="city">Hialeah</span>
          <a href="/docs/Hialeah_FL_Mayor_Hernandez.docx" className="link"
            onClick={() => event('letter download mayor', 'FL Hialeah')} data-no-snap
          >Mayor</a>
          <a href="/docs/Hialeah_FL_Police_Velazquez.docx" className="link"
            onClick={() => event('letter download police chief', 'FL Hialeah')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Jacksonville</span>
          <a href="/docs/Jacksonville_FL_Mayor_Curry.docx" className="link"
            onClick={() => event('letter download mayor', 'FL Jacksonville')} data-no-snap
          >Mayor</a>
          <a href="/docs/Jacksonville_FL_Police_Williams.docx" className="link"
            onClick={() => event('letter download police chief', 'FL Jacksonville')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Miami</span>
          <a href="/docs/Miami_FL_Mayor_Suarez.docx" className="link"
            onClick={() => event('letter download mayor', 'FL Miami')} data-no-snap
          >Mayor</a>
          <a href="/docs/Miami_FL_Police_Colina.docx" className="link"
            onClick={() => event('letter download police chief', 'FL Miami')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Tampa</span>
          <a href="/docs/Tampa_FL_Mayor_Castor.docx" className="link"
            onClick={() => event('letter download mayor', 'FL Tampa')} data-no-snap
          >Mayor</a>
          <a href="/docs/Tampa_FL_Police_Dugan.docx" className="link"
            onClick={() => event('letter download police chief', 'FL Tampa')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>GA</h2>
      <ul className="state">
        <li>
          <span className="city">Atlanta</span>
          <a href="/docs/Atlanta_GA_Mayor_Lance Bottoms.docx" className="link"
            onClick={() => event('letter download mayor', 'GA Atlanta')} data-no-snap
          >Mayor</a>
          <a href="/docs/Atlanta_GA_Police_Bryant.docx" className="link"
            onClick={() => event('letter download police chief', 'GA Atlanta')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>IL</h2>
      <ul className="state">
        <li>
          <span className="city">Chicago</span>
          <a href="/docs/Chicago_IL_Mayor_Lightfoot.docx" className="link"
            onClick={() => event('letter download mayor', 'IL Chicago')} data-no-snap
          >Mayor</a>
          <a href="/docs/Chicago_IL_Police_Brown.docx" className="link"
            onClick={() => event('letter download police chief', 'IL Chicago')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>IN</h2>
      <ul className="state">
        <li>
          <span className="city">Indianapolis</span>
          <a href="/docs/Indianapolis_IN_Mayor_Hogsett.docx" className="link"
            onClick={() => event('letter download mayor', 'IN Indianapolis')} data-no-snap
          >Mayor</a>
          <a href="/docs/Indianapolis_IN_Police_Taylor.docx" className="link"
            onClick={() => event('letter download police chief', 'IN Indianapolis')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>KS</h2>
      <ul className="state">
        <li>
          <span className="city">Wichita</span>
          <a href="/docs/Wichita_KS_Mayor_Whipple.docx" className="link"
            onClick={() => event('letter download mayor', 'KS Wichita')} data-no-snap
          >Mayor</a>
          <a href="/docs/Wichita_KS_Police_Ramsay.docx" className="link"
            onClick={() => event('letter download police chief', 'KS Wichita')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>KY</h2>
      <ul className="state">
        <li>
          <span className="city">Louisville</span>
          <a href="/docs/Louisville_KY_Mayor_Fischer.docx" className="link"
            onClick={() => event('letter download mayor', 'KY Louisville')} data-no-snap
          >Mayor</a>
          <a href="/docs/Louisville_KY_Police_Schroeder.docx" className="link"
            onClick={() => event('letter download police chief', 'KY Louisville')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>LA</h2>
      <ul className="state">
        <li>
          <span className="city">New Orleans</span>
          <a href="/docs/New Orleans_LA_Mayor_Cantrell.docx" className="link"
            onClick={() => event('letter download mayor', 'LA New Orleans')} data-no-snap
          >Mayor</a>
          <a href="/docs/New Orleans_LA_Police_Ferguson.docx" className="link"
            onClick={() => event('letter download police chief', 'LA New Orleans')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>MA</h2>
      <ul className="state">
        <li>
          <span className="city">Boston</span>
          <a href="/docs/Boston_MA_Mayor_Walsh.docx" className="link"
            onClick={() => event('letter download mayor', 'MA Boston')} data-no-snap
          >Mayor</a>
          <a href="/docs/Boston_MA_Police_Gross.docx" className="link"
            onClick={() => event('letter download police chief', 'MA Boston')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>MD</h2>
      <ul className="state">
        <li>
          <span className="city">Baltimore</span>
          <a href="/docs/Baltimore_MD_Mayor_Young.docx" className="link"
            onClick={() => event('letter download mayor', 'MD Baltimore')} data-no-snap
          >Mayor</a>
          <a href="/docs/Baltimore_MD_Police_Harrison.docx" className="link"
            onClick={() => event('letter download police chief', 'MD Baltimore')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>MI</h2>
      <ul className="state">
        <li>
          <span className="city">Detroit</span>
          <a href="/docs/Detroit_MI_Mayor_Duggan.docx" className="link"
            onClick={() => event('letter download mayor', 'MI Detroit')} data-no-snap
          >Mayor</a>
          <a href="/docs/Detroit_MI_Police_Craig.docx" className="link"
            onClick={() => event('letter download police chief', 'MI Detroit')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>MN</h2>
      <ul className="state">
        <li>
          <span className="city">Minneapolis</span>
          <a href="/docs/Minneapolis_MN_Mayor_Frey.docx" className="link"
            onClick={() => event('letter download mayor', 'MN Minneapolis')} data-no-snap
          >Mayor</a>
          <a href="/docs/Minneapolis_MN_Police_Arradondo.docx" className="link"
            onClick={() => event('letter download police chief', 'MN Minneapolis')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>MO</h2>
      <ul className="state">
        <li>
          <span className="city">Kansas City</span>
          <a href="/docs/Kansas City_MO_Mayor_Lucas.docx" className="link"
            onClick={() => event('letter download mayor', 'MO Kansas City')} data-no-snap
          >Mayor</a>
          <a href="/docs/Kansas City_MO_Police_Wagner.docx" className="link"
            onClick={() => event('letter download police chief', 'MO Kansas City')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">St Louis</span>
          <a href="/docs/St Louis_MO_Mayor_Krewson.docx" className="link"
            onClick={() => event('letter download mayor', 'MO St Louis')} data-no-snap
          >Mayor</a>
          <a href="/docs/St Louis_MO_Police_Hayden.docx" className="link"
            onClick={() => event('letter download police chief', 'MO St Louis')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>NC</h2>
      <ul className="state">
        <li>
          <span className="city">Charlotte</span>
          <a href="/docs/Charlotte_NC_Mayor_Lyles.docx" className="link"
            onClick={() => event('letter download mayor', 'NC Charlotte')} data-no-snap
          >Mayor</a>
          <a href="/docs/Charlotte_NC_Police_Putney.docx" className="link"
            onClick={() => event('letter download police chief', 'NC Charlotte')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Raleigh</span>
          <a href="/docs/Raleigh_NC_Mayor_Baldwin.docx" className="link"
            onClick={() => event('letter download mayor', 'NC Raleigh')} data-no-snap
          >Mayor</a>
          <a href="/docs/Raleigh_NC_Police_Deck-Brown.docx" className="link"
            onClick={() => event('letter download police chief', 'NC Raleigh')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>NE</h2>
      <ul className="state">
        <li>
          <span className="city">Omaha</span>
          <a href="/docs/Omaha_NE_Mayor_Stothert.docx" className="link"
            onClick={() => event('letter download mayor', 'NE Omaha')} data-no-snap
          >Mayor</a>
          <a href="/docs/Omaha_NE_Police_Schmaderer.docx" className="link"
            onClick={() => event('letter download police chief', 'NE Omaha')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>NM</h2>
      <ul className="state">
        <li>
          <span className="city">Albuquerque</span>
          <a href="/docs/Albuquerque_NM_Mayor_Keller.docx" className="link"
            onClick={() => event('letter download mayor', 'NM Albuquerque')} data-no-snap
          >Mayor</a>
          <a href="/docs/Albuquerque_NM_Police_Geier.docx" className="link"
            onClick={() => event('letter download police chief', 'NM Albuquerque')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>NV</h2>
      <ul className="state">
        <li>
          <span className="city">Las Vegas</span>
          <a href="/docs/Las Vegas_NV_Mayor_Goodman.docx" className="link"
            onClick={() => event('letter download mayor', 'NV Las Vegas')} data-no-snap
          >Mayor</a>
          <a href="/docs/Las Vegas_NV_Police_Lombardo.docx" className="link"
            onClick={() => event('letter download police chief', 'NV Las Vegas')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Reno</span>
          <a href="/docs/Reno_NV_Mayor_Schieve.docx" className="link"
            onClick={() => event('letter download mayor', 'NV Reno')} data-no-snap
          >Mayor</a>
          <a href="/docs/Reno_NV_Police_Soto.docx" className="link"
            onClick={() => event('letter download police chief', 'NV Reno')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>NY</h2>
      <ul className="state">
        <li>
          <span className="city">New York</span>
          <a href="/docs/New York_NY_Mayor_deBlasio.docx" className="link"
            onClick={() => event('letter download mayor', 'NY New York')} data-no-snap
          >Mayor</a>
          <a href="/docs/New York_NY_Police_Shea.docx" className="link"
            onClick={() => event('letter download police chief', 'NY New York')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>OH</h2>
      <ul className="state">
        <li>
          <span className="city">Columbus</span>
          <a href="/docs/Columbus_OH_Mayor_Ginther.docx" className="link"
            onClick={() => event('letter download mayor', 'OH Columbus')} data-no-snap
          >Mayor</a>
          <a href="/docs/Columbus_OH_Police_Quinlan.docx" className="link"
            onClick={() => event('letter download police chief', 'OH Columbus')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>OK</h2>
      <ul className="state">
        <li>
          <span className="city">Oklahoma City</span>
          <a href="/docs/Oklahoma City_OK_Mayor_Holt.docx" className="link"
            onClick={() => event('letter download mayor', 'OK Oklahoma City')} data-no-snap
          >Mayor</a>
          <a href="/docs/Oklahoma City_OK_Police_Gourley.docx" className="link"
            onClick={() => event('letter download police chief', 'OK Oklahoma City')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Tulsa</span>
          <a href="/docs/Tulsa_OK_Mayor_Bynum.docx" className="link"
            onClick={() => event('letter download mayor', 'OK Tulsa')} data-no-snap
          >Mayor</a>
          <a href="/docs/Tulsa_OK_Police_Franklin.docx" className="link"
            onClick={() => event('letter download police chief', 'OK Tulsa')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>OR</h2>
      <ul className="state">
        <li>
          <span className="city">Portland</span>
          <a href="/docs/Portland_OR_Mayor_Wheeler.docx" className="link"
            onClick={() => event('letter download mayor', 'OR Portland')} data-no-snap
          >Mayor</a>
          <a href="/docs/Portland_OR_Police_Lovell.docx" className="link"
            onClick={() => event('letter download police chief', 'OR Portland')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>PA</h2>
      <ul className="state">
        <li>
          <span className="city">Philadelphia</span>
          <a href="/docs/Philadelphia_PA_Mayor_Kenney.docx" className="link"
            onClick={() => event('letter download mayor', 'PA Philadelphia')} data-no-snap
          >Mayor</a>
          <a href="/docs/Philadelphia_PA_Police_Outlaw.docx" className="link"
            onClick={() => event('letter download police chief', 'PA Philadelphia')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>TN</h2>
      <ul className="state">
        <li>
          <span className="city">Memphis</span>
          <a href="/docs/Memphis_TN_Mayor_Strickland.docx" className="link"
            onClick={() => event('letter download mayor', 'TN Memphis')} data-no-snap
          >Mayor</a>
          <a href="/docs/Memphis_TN_Police_Rallings.docx" className="link"
            onClick={() => event('letter download police chief', 'TN Memphis')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Nashville</span>
          <a href="/docs/Nashville_TN_Mayor_Cooper.docx" className="link"
            onClick={() => event('letter download mayor', 'TN Nashville')} data-no-snap
          >Mayor</a>
          <a href="/docs/Nashville_TN_Police_Anderson.docx" className="link"
            onClick={() => event('letter download police chief', 'TN Nashville')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>TX</h2>
      <ul className="state">
        <li>
          <span className="city">Arlington</span>
          <a href="/docs/Arlington_TX_Mayor_Williams.docx" className="link"
            onClick={() => event('letter download mayor', 'TX Arlington')} data-no-snap
          >Mayor</a>
          <a href="/docs/Arlington_TX_Police_Ayala.docx" className="link"
            onClick={() => event('letter download police chief', 'TX Arlington')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Austin</span>
          <a href="/docs/Austin_TX_Mayor_Adler.docx" className="link"
            onClick={() => event('letter download mayor', 'TX Austin')} data-no-snap
          >Mayor</a>
          <a href="/docs/Austin_TX_Police_Manley.docx" className="link"
            onClick={() => event('letter download police chief', 'TX Austin')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Dallas</span>
          <a href="/docs/Dallas_TX_Mayor_Johnson.docx" className="link"
            onClick={() => event('letter download mayor', 'TX Dallas')} data-no-snap
          >Mayor</a>
          <a href="/docs/Dallas_TX_Police_Hall.docx" className="link"
            onClick={() => event('letter download police chief', 'TX Dallas')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">El Paso</span>
          <a href="/docs/El Paso_TX_Mayor_Margo.docx" className="link"
            onClick={() => event('letter download mayor', 'TX El Paso')} data-no-snap
          >Mayor</a>
          <a href="/docs/El Paso_TX_Police_Allen.docx" className="link"
            onClick={() => event('letter download police chief', 'TX El Paso')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Forney</span>
          <a href="/docs/Forney_TX_Mayor_Penn.docx" className="link"
            onClick={() => event('letter download mayor', 'TX Forney')} data-no-snap
          >Mayor</a>
          <a href="/docs/Forney_TX_Police_Lunt.docx" className="link"
            onClick={() => event('letter download police chief', 'TX Forney')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Fort Worth</span>
          <a href="/docs/Fort Worth_TX_Mayor_Price.docx" className="link"
            onClick={() => event('letter download mayor', 'TX Fort Worth')} data-no-snap
          >Mayor</a>
          <a href="/docs/Fort Worth_TX_Police_Kraus.docx" className="link"
            onClick={() => event('letter download police chief', 'TX Fort Worth')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Houston</span>
          <a href="/docs/Houston_TX_Mayor_Turner.docx" className="link"
            onClick={() => event('letter download mayor', 'TX Houston')} data-no-snap
          >Mayor</a>
          <a href="/docs/Houston_TX_Police_Avecedo.docx" className="link"
            onClick={() => event('letter download police chief', 'TX Houston')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">San Antonio</span>
          <a href="/docs/San Antonio_TX_Mayor_Nirenberg.docx" className="link"
            onClick={() => event('letter download mayor', 'TX San Antonio')} data-no-snap
          >Mayor</a>
          <a href="/docs/San Antonio_TX_Police_McManus.docx" className="link"
            onClick={() => event('letter download police chief', 'TX San Antonio')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>VA</h2>
      <ul className="state">
        <li>
          <span className="city">Virginia Beach</span>
          <a href="/docs/Virginia Beach_VA_Mayor_Dyer.docx" className="link"
            onClick={() => event('letter download mayor', 'VA Virginia Beach')} data-no-snap
          >Mayor</a>
          <a href="/docs/Virginia Beach_VA_Police_Zucaro.docx" className="link"
            onClick={() => event('letter download police chief', 'VA Virginia Beach')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>WA</h2>
      <ul className="state">
        <li>
          <span className="city">Seattle</span>
          <a href="/docs/Seattle_WA_Mayor_Durkan.docx" className="link"
            onClick={() => event('letter download mayor', 'WA Seattle')} data-no-snap
          >Mayor</a>
          <a href="/docs/Seattle_WA_Police_Best.docx" className="link"
            onClick={() => event('letter download police chief', 'WA Seattle')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Spokane</span>
          <a href="/docs/Spokane_WA_Mayor_Woodward.docx" className="link"
            onClick={() => event('letter download mayor', 'WA Spokane')} data-no-snap
          >Mayor</a>
          <a href="/docs/Spokane_WA_Police_Meidl.docx" className="link"
            onClick={() => event('letter download police chief', 'WA Spokane')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>

      <h2>WI</h2>
      <ul className="state">
        <li>
          <span className="city">Madison</span>
          <a href="/docs/Madison_WI_Mayor_Rhodes.docx" className="link"
            onClick={() => event('letter download mayor', 'WI Madison')} data-no-snap
          >Mayor</a>
          <a href="/docs/Madison_WI_Police_Wahl.docx" className="link"
            onClick={() => event('letter download police chief', 'WI Madison')} data-no-snap
          >Police Chief</a>
        </li>
        <li>
          <span className="city">Milwaukee</span>
          <a href="/docs/Milwaukee_WI_Mayor_Barrett.docx" className="link"
            onClick={() => event('letter download mayor', 'WI Milwaukee')} data-no-snap
          >Mayor</a>
          <a href="/docs/Milwaukee_WI_Police_Morales.docx" className="link"
            onClick={() => event('letter download police chief', 'WI Milwaukee')} data-no-snap
          >Police Chief</a>
        </li>
      </ul>


      <h2>Blank Templates</h2>
      <ul className="pb-4">
        <li>
          <span className="city">Blank Letters</span>
          <a href="/docs/Template_Blank_Mayor.docx" className="link"
            onClick={() => event('letter download mayor', ' Blank Letters')} data-no-snap
          >Mayor</a>
          <a href="/docs/Tempalte_Blank_Police.docx" className="link"
            onClick={() => event('letter download police chief', ' Blank Letters')} data-no-snap
          >Police Chief</a>
        </li>
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
