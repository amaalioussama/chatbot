import connectDB from '../../../utils/db';
import User from '../../../models/user';

connectDB();

export const POST = async (request) => {
  const { email, username, password } = request.body;

  try {
    const newUser = new User({
      email,
      username,
      password,
    });

    const savedUser = await newUser.save();

    return savedUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
