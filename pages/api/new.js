import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://AuthClass:AuthClass@codelab.u4drr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const uri = "mongodb://localhost/newCourses";

const handler = async (req, res) => {
  // console.log(req);
  if (req.method !== "POST") {
    return;
  }

  const { name, course } = req.body;
  const slug = name;

  if (!name || !course) return;

  const client = await MongoClient.connect(uri).then(() =>
    console.log("now Connected")
  );

  const db = client.db();

  const myData = db.collection("gamers");
  const result = await myData.insertOne({ name, course, slug });
  await client.close();

  res.status(201).json({
    data: result,
    message: "success",
  });
};

export default handler;
