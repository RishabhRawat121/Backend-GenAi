import { createError } from '../error.js';

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return next(createError(400, "Prompt is required"));
    }

    const encodedPrompt = encodeURIComponent(prompt);
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}`;

    return res.status(200).json({ photo: imageUrl });

  } catch (error) {
    next(
      createError(
        error.status || 500,
        error.message || "Failed to generate image"
      )
    );
  }
};
