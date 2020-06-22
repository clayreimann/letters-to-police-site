import React from "react";
import "./Main.scss";
import banner from "./banner.jpg";
import { to, pageView } from "../../helpers";

const letters = (
  <a href={to(`/letters`)} className="text-theme">
    letters
  </a>
);

function Main() {
  pageView("/");

  return (
    <div className="page-main pt-5">
      <p className="text-2xl">
        The death of George Floyd and history of police brutality in America has
        been deeply distressing to me personally. I have found a way to
        peacefully respond and take direct action that will produce needed
        change.
      </p>
      <h2>Will you help make a difference and join the Movement?</h2>
      <img src={banner} alt="Call to action banner" className="py-4" />
      <p>
        The Million Letter Movement empowers citizens to send {letters} to the
        Police Chiefs and Mayors of America’s 50 most populous, and 10 deadliest
        cities. These letters demand the{" "}
        <a className="text-theme" href="https://8cantwait.org/">
          8 Can’t Wait
        </a>{" "}
        police reforms be adopted NOW. You will use pre-written {letters} based
        on city specific research. The goal is one million letters sent in two
        weeks.
      </p>
      <p>
        For information about the{" "}
        <a className="text-theme" href="https://8cantwait.org/">
          8 Can’t Wait
        </a>{" "}
        policies, visit their website. These policies are proven to reduce harm
        caused by police, and are endorsed by President Barack Obama, Oprah
        Winfrey, and Jack Dorsey (co-founder of Twitter).
      </p>

      <p>
        <b className="text-theme">Here’s how you can make a difference:</b>
      </p>
      <ul className="list-disc list-outside pl-5">
        <li>
          Download your {letters} and send them to your city's mayor, and chief
          of police.
        </li>
        <li>
          For help customizing your letter join the{" "}
          <a href="https://www.facebook.com/groups/millionlettermovement/">
            Million Letter Movement Facebook Group
          </a>{" "}
          You will find instructions, pre-written {letters} , and more
          information.
        </li>
        <li>
          Share the invitation with your friends &amp; followers, asking them to
          join us.
        </li>
        <li>
          Join our movement to demand that your local official make changes{" "}
          <b className="text-theme">NOW</b>. Together we can make our voices
          heard. Take a moment and send your letters{" "}
          <b className="text-theme">TODAY</b>.
        </li>
        <li>
          Join us at{" "}
          <a href="https://www.facebook.com/groups/millionlettermovement/">
            https://www.facebook.com/groups/millionlettermovement/
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Main;
