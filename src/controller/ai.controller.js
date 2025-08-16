import aiservice from "../services/ai.service.js";

export async function getReview(req, res) {
  const code = req.query.Prompt || req.body.code;;
  if (!code) {
    return res.status(400).send("Prompt is required");
  }
  const response = await aiservice(code);
  res.send(response);
}
export default { getReview };
