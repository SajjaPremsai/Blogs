import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import matter from "gray-matter";
import { marked } from "marked";

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(`/blogs/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text);
        setMeta(data);
        setContent(marked(content));
      });
  }, [slug]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{meta.title}</h1>
      <p><i>{meta.date}</i></p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
