import app from "./app";
import { connectDB } from "./app/config/db";

const PORT = 4000;

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  await connectDB();
});
