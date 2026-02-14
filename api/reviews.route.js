import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router();

// router.route("/").get((req, res) => {
//     console.log("GET /rviews hit")
//     //res.json({"message": "reviews ok"})
//     res.send("hello world")
//     }
// );

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReviews)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router