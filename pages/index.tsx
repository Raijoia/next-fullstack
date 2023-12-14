import PostsService from '@src/services/posts/PostsService';
import { withConfig } from '@src/services/template/withConfig';

export { default } from '@src/screens/HomeScreen/HomeScreen';

export async function getStaticProps() {
  const posts = await PostsService().getAll();

  return {
    props: await withConfig({
      posts
    })
  };
}
