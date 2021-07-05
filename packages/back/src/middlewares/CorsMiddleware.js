import cors from "cors";

export default ((options = {}) => {
  const corsOptions = {
    origin: process.env.CLIENT_ORIGIN,
    optionsSuccessStatus: 200, // For legacy browser support`
    ...options,
  };

  return cors(corsOptions);
})();
