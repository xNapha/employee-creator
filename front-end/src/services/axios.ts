import axios from "axios";

export const getEmployees = (setTest: Function) => {
  axios
    .get("http://localhost:8080/employees")
    .then((response) => setTest(response.data))
    .catch((error) => console.error(error));
};
