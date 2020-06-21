import React from "react";
import "./Main.scss";
import banner from "./banner.jpg";
import { to } from "../../helpers";

function Main() {
  return (
    <div className="page-main pt-5">
      <p>
        The death of George Floyd and history of police brutality in America has
        been deeply distressing to me personally. I have found a way to
        peacefully respond and take direct action that will produce needed
        change.
      </p>
      <h2>Will you help make a difference and join the Movement?</h2>
      <img src={banner} alt="Call to action banner" className="py-4" />
      <p>
        The Million Letter Movement empowers citizens to send{" "}
        <a href={to(`/letters`)}>letters</a> to the Police Chiefs and Mayors of
        America’s 50 most populous, and 10 deadliest cities. These letters
        demand the{" "}
        <a className="ecw" href="https://8cantwait.org/">
          8 Can’t Wait
        </a>{" "}
        police reforms be adopted NOW. You will use pre-written{" "}
        <a href={to(`/letters`)}>letters</a> based on city specific research.
        The goal is one million letters sent in two weeks.
      </p>
      <p>
        For information about the{" "}
        <a className="ecw" href="https://8cantwait.org/">
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
          Join the{" "}
          <a href="https://www.facebook.com/groups/millionlettermovement/">
            Million Letter Movement Facebook Group
          </a>{" "}
          for instructions, <a href={to(`/letters`)}>pre-written letters</a>,
          and information.
        </li>
        <li>
          Send your <a href={to(`/letters`)}>letters</a> to the Chief of Police
          and Mayor of your city.
        </li>
        <li>
          Share the invitation with your friends &amp; followers, asking them to
          join us.
        </li>
      </ul>
      <p>
        Please join me in making history with the Million Letter Movement.
        Together we can reduce police brutality and stop excessive force. Take a
        moment and send your <a href={to(`/letters`)}>letters</a>.
      </p>
      <p className="text-center text-2xl text-theme">
        <b>NOW.</b>
      </p>
      <p>
        #millionlettermovement <br />
        #blacklivesmatter <br />
        #strongertogether <br />
        #wethepeople <br />
      </p>
    </div>
  );
}

export default Main;
