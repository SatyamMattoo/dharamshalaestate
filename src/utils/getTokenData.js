import jwt from "jsonwebtoken";

export const getDataFromToken = (request) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    if(token===""){
      return token
    }
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    return decodedToken.id;
  } catch (error) {
    throw new Error(error.message);
  }
};
