import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("todos");
});

router.post("/", (req, res) => {
  res.send("created");
});

router.put("/:id", (req, res) => {
  res.send(`${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`${req.params.id} deleted`);
});

router.get("/:id", (req, res) => {
  res.send(`${req.params.id} todo get`);
});

export default router;
