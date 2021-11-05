import { createGlobalStyle } from 'styled-components';

import boecklinsuniverseWoff from './boecklinsuniverse-x3jkm-webfont.woff';
import boecklinsuniverseWoff2 from './boecklinsuniverse-x3jkm-webfont.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'boecklins universe';
        src: local('boecklins universe'), local('boecklinsuniverse'),
        url(${boecklinsuniverseWoff2}) format('woff2'),
        url(${boecklinsuniverseWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;