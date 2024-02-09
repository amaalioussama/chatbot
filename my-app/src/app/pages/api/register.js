import connectDB from "../../utils/db";
import User from "../../../model/schema";

// connectDB to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Extract user data from the request body
    const { user, email, password } = req.body;

    // Create a new user document
    const newUser = new User({ user, email, password });

    // Save the user document to the database
    const savedUser = await newUser.save();

    // Return a success response
    res.status(201).json({ message: "User created successfully", user: savedUser });
  } catch (error) {
    // Return an error response if saving the user failed
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
}
