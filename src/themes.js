import { createGlobalStyle } from 'styled-components';

export const light = {
  color: '#161838',
  titlecolor: '#60118C',
  backgroundColor: '#fefefe',
  backgroundSize: '20%',
};

export const dark = {
  color: '#ffffff',
  titlecolor: '#ffffff',
  backgroundColor: '#6f6f6f',
  backgroundSize: '20%',
};

export const GlobalStyles = createGlobalStyle`

@media only screen and (max-width: 960px) {
    .nav__links{
        background-color: ${(props) => props.theme.backgroundColor};
    }

    .nav__links--item{
        color: ${(props) => props.theme.color};
    }
}

.home {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    background-size: ${(props) => props.theme.backgroundSize};
}
.home__title, .portfolio__title, .about__title, .contact__title{
        color: ${(props) => props.theme.titlecolor};
}
.portfolio {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
}

.about{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    background-size: ${(props) => props.theme.backgroundSize};
}

.contact{
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
}
.blogPage{
    background-color:${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
}
`;
