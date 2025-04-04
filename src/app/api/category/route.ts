import Category from "@/app/models/Category";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  await dbConnect();

  try {
    const categories = await Category.find({});
    return Response.json(categories);
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error in finding all categories: " + err.message);
      return Response.json({
        success: false,
        message: "Error in fetching categories",
      });
    }
  }
}
