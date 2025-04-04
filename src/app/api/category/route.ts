import Category from "@/app/models/Category";
import dbConnect from "@/lib/dbConnect";
import { default as CategoryType } from "@/types/Category";

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

export async function POST(request: Request) {
  await dbConnect();
  const category: CategoryType = await request.json();

  if (!category.name || !category.description) {
    return Response.json({
      success: false,
      message: "Please provide all fields",
    });
  }

  const newCategory = new Category(category);

  try {
    await newCategory.save();
    return Response.json({ success: true, data: newCategory });
  } catch (err) {
    if (err instanceof Error) {
      console.log("Error in creating category: " + err.message);
      return Response.json({
        success: false,
        message: "Error in creating category",
      });
    }
  }
}
