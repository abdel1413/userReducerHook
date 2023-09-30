import { useRef, useState } from "react";
import { flushSync } from "react-dom";

export const SCrollView = () => {
  const [index, setIndex] = useState();
  const ref = useRef(null);

  let catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      url: `https://placekitten.com/250/200?image=$` + i,
    });
  }

  const nextImage = () => {
    flushSync(() => {
      if (index < catList.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div>
      <button onClick={nextImage}>Next</button>
      <ul className="cat-box">
        {catList.map((cat, i) => {
          return (
            <li key={cat.id} ref={index === i ? ref : null}>
              <img
                id="active"
                className={index === i ? "active" : ""}
                src={cat.url}
                alt={"cat#" + cat.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
