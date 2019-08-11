export default (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(500).json({ error: "Login is required" });
  }
};
