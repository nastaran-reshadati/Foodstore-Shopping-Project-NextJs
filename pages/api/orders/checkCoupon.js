import axios from "axios";
import { handleErrorMessage } from "../../../helpers/helper";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // console.log(req.cookies.token);
    // console.log("******************", req.body.code);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/check-coupon",
        {
          code: req.body.code,
        },
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
          },
        }
      );
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      console.log("***********", response.data.data.message);
      res.status(200).json(response.data.data);
    } catch (error) {
      console.log("%%%%%%%%%%%", error);
      res.status(422).json({ message: { error: [handleErrorMessage(error)] } });
    }
  } else {
    res.status(405).json({ message: "erorr😈" });
  }
}
