import { Helmet } from 'react-helmet';

const Meta = ({ title = 'SUWIKI', description = '수위키, 강의평가의 모든 것' }) => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://suwiki.kr" />
      <meta property="og:title" content="SUWIKI" />
      <meta property="og:description" content={description} />
      <title>{title}</title>
      <meta property="og:image" content="https://suwiki.kr/images/oglogo.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};

export default Meta;
