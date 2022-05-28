import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import useProp from "../hooks/useProp";

const Page = ({ route }) => {
  const { id } = route;

  const [components, setComponents] = useState(null);

  const { getPropMap } = useProp();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8080/pages/" + id);

      if (data?.type === "components") {
        setComponents(data?.components);
      }
    })();
  }, [id]);

  return (
    <>
      <div>
        {components &&
          components.map((component) => {
            const Component = require(`./${component?.name}`).default;
            return (
              <Component key={nanoid()} {...getPropMap(component?.props)} />
            );
          })}
      </div>
    </>
  );
};

export default Page;
