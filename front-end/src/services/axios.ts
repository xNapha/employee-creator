import axios from "axios";

export const getEmployees = (setTest: Function) => {
  axios
    .get("http://localhost:8080/employees")
    .then((response) => setTest(response.data))
    .catch((error) => console.error(error));
};

export const postNewEmployee = async (data: any) => {
  return axios
    .post("http://localhost:8080/employees", data)
    .then((response) => {
      console.log(response);
      return true;
    })
    .catch((error) => console.error(error));
};
