import Styled from 'styled-components';

interface Props {
  percentage: string
}

export const Aside = Styled.aside`
  background-color: #090f23;
  height: 100vh;
  width: 20vw;
  position: fixed;
  top: 0;
  left: 0;
  
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 40px;
    margin-bottom: 5px;

    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;

      border: 2px solid #3a506b;
    }

    .name {
      margin: 20px 0;
      color: #4b8895;
      font-size: 2.6rem;
    }

    .title {
      color: #3a506b;
      font-size: 1.8rem;
    }
  }

  .skills-container {
    padding: 0 20px;
    h2 {
      color: #4b8895;
      font-size: 2.4rem;
    }
  }

  .social-media {
    padding: 0 20px 40px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    a {
      color: #3a506b;
      text-decoration: none;
      transition: color .2s;
    }
  

    .github {
      &:hover {
        color: #6e5494;
      }
    }

    .linkedin {
      &:hover {
        color: #0077b5;
      }
    }

    .twitter {
      &:hover {
        color: #1da1f2;
      }
    }

    .dev {
      &:hover {
        color: #f2fdff;
      }
    }

    .facebook {
      &:hover {
        color: #4267b2;
      }
    }
  }

`;

export const Skill = Styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin: 5px 0;

  .skill-name {
    color: #3a506b;
    font-size: 2rem;
    margin-bottom: 5px;
  }

  .percentage {
    background: #3a506b;
    width: 100%;
    height: 10px;

    div {
      background: linear-gradient(90deg, #8a2563 0%, #f72585 100%, #f72585 100%);
      height: 100%;
      width: ${p => p.percentage}%;
    }
  }
`
