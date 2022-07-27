import { Router } from "express";
import passport from 'passport'
import controller from "../controllers/messageControllers.js";



const router = Router();

router.get('/', controller.viewAllMessages)

router.get('/view/:_id', controller.getMessageById)

router.get('/categoryName/:category', controller.viewMessageByCategory)

router.post('/', controller.createMessage)

// These routes are protected for only authorizes user
router.use(passport.authenticate('jwt',{session:false}));

router.get('/view/user/:user_id', controller.viewMessagesByUserId)

router.patch('/update/:id', controller.updateMessage)

router.patch('/delete/:id', controller.deleteMessage)


export default router;
