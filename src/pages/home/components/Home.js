import styled from "styled-components";
import Spacer from "../../../helpers/Spacer";
import Button from "../../../layout/Button";

const Home = () => {
  return (
    <HomeWrapper>
      <Banner>
        <p>View full terms and conditions here.</p>
      </Banner>
      <section>
        <div>
          <h1>OUR BIRTHDAY IS SO MONEY</h1>
          <p>
            There’s no birthday party like our birthday party because we’re
            giving YOU money when you party with us! Sign up for It’s Just
            Rewards and get $10 refunded to your card at the end of the month
            when you order $20 or more from June 1 through June 23.
          </p>
          <Button
            margin={"0 0 3rem 3rem"}
            text={"SIGN UP"}
            fontSize={"1.2rem"}
            color={"#f47d20"}
            bgColor={"#fff"}
          />
        </div>
        <aside></aside>
      </section>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  section {
    display: flex;
    flex: 1;
    @media screen and (max-width: 850px) {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
    }
    div {
      flex: 1;
      background-color: #f47d20;
      color: #fff;
      h1 {
        font-size: 5rem;
        padding: 3rem 3rem 0 3rem;
      }
      p {
        padding: 0 3rem 0rem 3rem;
        font-size: 1.5rem;
      }
    }
    aside {
      flex: 1;
      background-image: url("/images/aside.jpeg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      @media screen and (max-width: 850px) {
        flex: unset;
        height: 500px;
        width: 100%;
      }
    }
  }
`;

const Banner = styled.div`
  max-height: 400px;
  height: 40vh;
  background-image: url("/images/banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  p {
    color: #fff;
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default Home;
