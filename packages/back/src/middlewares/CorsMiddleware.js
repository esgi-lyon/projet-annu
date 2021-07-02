import cors from "cors";

export default ((options = {}) => {
  const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // For legacy browser support`
    ...options,
  };

  return cors(corsOptions);
})();
