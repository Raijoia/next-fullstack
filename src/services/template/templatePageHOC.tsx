import Head from 'next/head';

import { ConfigProvider } from './ConfigContext';
import { Config } from './withConfig';

interface TemplatePageHOCProps {
  title?: string;
}

export default function templatePageHOC(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: (props: any) => JSX.Element,
  templatePageHOCProps: TemplatePageHOCProps = {}
) {
  return function WrappedComponent(props: { config: Config }) {
    console.log(props);
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps.title
              ? `${templatePageHOCProps.title} | ${props.config.site.title}`
              : props.config.site.title}
          </title>
        </Head>
        <ConfigProvider value={props.config}>
          <Component {...props} />
        </ConfigProvider>
      </>
    );
  };
}
