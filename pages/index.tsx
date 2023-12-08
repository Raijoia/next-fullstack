import { withConfig } from '@src/services/template/withConfig';

export { default } from '@src/screens/HomeScreen/HomeScreen';

export async function getStaticProps() {
  return {
    props: await withConfig({})
  };
}
