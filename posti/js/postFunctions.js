import postService from "./PostService.js";
import { posts } from "./posts.js";
const $postsRow = document.getElementById("posts-row");

export async function renderPost() {
  try {
    const posts = await postService.getPosts();
    $postsRow.innerHTML = "";
    posts.forEach((post) => {
      const {
        title,
        imageUrl,
        category,
        publishDate,
        writtenBy,
        article,
      } = post;

      $postsRow.innerHTML += postService.postItem(
        title,
        imageUrl,
        category,
        publishDate,
        writtenBy,
        article
      );
    });
  } catch (err) {
    $postsRow.innerHTML = `<p><i>${err}</i></p>`;
  }
}

export async function renderByCategory(category) {
  $postsRow.innerHTML = "";
  const posts = await postService.getPosts();
  const toRender = posts.filter((post) => post.category == category);

  toRender.forEach((post) => {
    const { title, imageUrl, category, publishDate, writtenBy, article } = post;
    $postsRow.innerHTML += postService.postItem(
      title,
      imageUrl,
      category,
      publishDate,
      writtenBy,
      article
    );
  });
}

export async function renderBySearch(text) {
  const posts = await postService.getPosts();
  const toRender = posts.filter((post) =>
    post.title.toLowerCase().includes(text)
  );
  $postsRow.innerHTML = "";

  toRender.forEach((post) => {
    const { title, imageUrl, category, publishDate, writtenBy, article } = post;

    $postsRow.innerHTML += postService.postItem(
      title,
      imageUrl,
      category,
      publishDate,
      writtenBy,
      article
    );
  });
}
