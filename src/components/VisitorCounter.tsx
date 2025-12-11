import { useEffect, useState } from "react";
import { updateVisitorCount } from "../api/visitior";

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    updateVisitorCount().then((newCount) => {
      if (newCount !== null) setCount(newCount);
    });
  }, []);

  return <div>방문자 수: {count ?? "0"}</div>;
}

export default VisitorCounter;
