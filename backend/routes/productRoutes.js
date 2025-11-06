import expres from "express";
import {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = expres.Router();

router.get("/", getAllProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.put("/:id", deleteProduct);

export default router;
