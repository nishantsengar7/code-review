import express from "express";
import aiController from "../controller/ai.controller.js"; // Named import

const router = express.Router(); // ✅ define router BEFORE using it

router.post("/get-review", aiController.getReview); // ✅ use it after definition
    
export default router; // ✅ export router so app.js can use it
