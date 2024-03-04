import { PostCreateRequest } from "@/shared/types/post";

export const validateCreatePost = ({ body }: { body: PostCreateRequest }) => {
  const errors = {} as PostCreateRequest;

  if (!body.photo) {
    errors.photo = "Photo is required.";
  }
  if (!body.title) {
    errors.title = "Title is required.";
  }
  const isFormValid = Object.keys(errors).length === 0;

  const fields = Object.values(errors).join("");

  if (!isFormValid) {
    const error = new Error();
    error.message = fields;
    throw error;
  }
};
