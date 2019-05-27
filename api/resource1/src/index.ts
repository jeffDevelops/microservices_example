import * as express from "express";

const app = express();
const router = express.Router();

router.route("/")
  .get((req: express.Request, res: express.Response) => {
    console.log("A GET was made to /resource1");
    res.json({
      resource1: "GET response",
    });
  })

  .post((req: express.Request, res: express.Response) => {
    console.log("A POST was made to /resource1");
    res.json({
      resource2: "POST response",
    });
  });

// router.route('/:id')
// TODO:

app.use("/api/resource1", router);
module.exports = app;
