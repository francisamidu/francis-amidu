import { v4 } from "uuid";
const uid = () => {
  const id = v4();
  return id;
};
export default uid;
