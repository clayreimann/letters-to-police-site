import React from "react";
import "./Main.scss";

function Main() {
  return (
    <div className="page-main">
      {[1, 2, 3, 4, 5, 6].map(() => (
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          excepturi dolorum earum quia officia nesciunt ipsam nostrum iure
          deserunt doloribus et libero dolor laudantium id magni, repudiandae
          eligendi maiores esse. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto excepturi dolorum earum quia officia
          nesciunt ipsam nostrum iure deserunt doloribus et libero dolor
          laudantium id magni, repudiandae eligendi maiores esse. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Architecto excepturi
          dolorum earum quia officia nesciunt ipsam nostrum iure deserunt
          doloribus et libero dolor laudantium id magni, repudiandae eligendi
          maiores esse.
        </p>
      ))}
    </div>
  );
}

export default Main;
