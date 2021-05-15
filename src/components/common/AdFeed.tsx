import React, { useEffect } from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../lib/styles/media';

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

function AdFeed() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <Block>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key="-6u+e7+18-4k+8t"
        data-ad-client="ca-pub-5574866530496701"
        data-ad-slot="3828701581"
      ></ins>
    </Block>
  );
}

const Block = styled.div`
  width: 20rem;
  margin: 1rem;
  min-height: 23.5625rem;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  background: white;

  ${mediaQuery(1056)} {
    width: calc(50% - 2rem);
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export default AdFeed;
