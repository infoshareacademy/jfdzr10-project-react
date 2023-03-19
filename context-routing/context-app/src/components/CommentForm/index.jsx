import { useEffect, useState } from "react";
import { fetchPosts, uploadComment } from "../../api/fetchData";

function CommentForm() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const addComment = (event) => {
    event.preventDefault();
    uploadComment(event.target.value);
    event.target.form.reset();
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        placeholder="body"
        onChange={handleChange}
      />
      <button type="submit" onClick={addComment}>
        Add comment
      </button>
    </form>
  );
}

export default CommentForm;
