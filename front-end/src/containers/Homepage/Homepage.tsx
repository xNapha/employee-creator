import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/employees")
      .then((response) => setTest(response.data))
      .catch((error) => console.error(error));
  }, []);
  return <div>{test[0].email}</div>;
};

export default Homepage;
