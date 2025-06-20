import clientPromise from "../../../lib/mongodb"; // or "@/lib/mongodb" if alias works

export async function GET() {
  try {
    console.log("Connecting to DB...");
    const client = await clientPromise;
    const db = client.db();
    const users = await db.collection("users").find().toArray();
    console.log("Users fetched:", users);
    return Response.json(users);
  } catch (error) {
    console.error("GET ERROR:", error);
    return new Response("Failed to fetch users", { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;
    console.log("Adding user:", name, email);

    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection("users").insertOne({ name, email });
    console.log("User inserted:", result.insertedId);

    return Response.json({ message: "User added", id: result.insertedId });
  } catch (error) {
    console.error("POST ERROR:", error);
    return new Response("Failed to add user", { status: 500 });
  }
}
