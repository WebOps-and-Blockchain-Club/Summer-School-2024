import { PrismaClient } from "@prisma/client";
import jwt, { decode } from "jsonwebtoken";
import dotenv from "dotenv";

export default function authMiddleware(req: any, res: any, next: any) {
  //check if the token is present in the headers
  // console.log("hello");
  const prisma = new PrismaClient();
  const header: string = req.headers["authorization"];
  if (header) {
    const token: string = header.split(" ")[1];
    //verify the token and call the next function to go the route further.
    try {
      //jwt.verify will throw an error if the token is not valid, which will be catched below.

      const decodedData = Object(jwt.verify(token, "webops2024")); //a sync function
      // * Here we need to convert it into object to get access to the data else it returns a jwt payload type which cannot be accessed as a object.

      // it would be good if we pass the userId to the request further, so that we can use it in the routes.

      //set userId variable in req
      console.log(decodedData);
      req.userId = decodedData.userId;
      next();
    } catch (err) {
      res
        .status(401)
        .json({
          message: "Invalid jwt token, please try logging in again.",
          err: err,
        });
    }
  } else {
    res.status(401).json({ message: "No access token." });
  }

  //if we get the decodedData that means the token is valid, so call the next function.
  // if (decodedData)
  // {
  //     next()
  // }
  // else
  // {
  //     res.status(401).json({message: "Invalid jwt token, please try logging in again."})
  // }
}
