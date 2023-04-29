import LayOut from "@/components/common/layout";
import {
  ContentWrap,
  Cover,
  ExpalinNav,
  ExplainContainer,
  ExplainItem,
  ExplainItemWrap,
  ExplainText,
  ExplainWrap,
  Img,
  NavLabel,
  Ocean,
  ShortCutBtn,
  StepText,
  Text,
  TopContainer,
  Wave,
} from "@/styles/main.styles";

const MainPage = () => {
  return (
    <LayOut>
      <TopContainer>
        <Ocean>
          <Wave></Wave>
          <Wave></Wave>
        </Ocean>
        <Cover></Cover>
        <Text>
          <h1>내 주변의 모든 것, 프라닷</h1>
          <p>
            내가 원하는 인프라를 갖춘 동네를, 우리 동네에 있는 인프라를 한 눈에
            살펴보세요
          </p>
        </Text>
      </TopContainer>

      <ExplainContainer>
        <ExpalinNav>
          <li>
            <NavLabel current>동네찾기 알아보기</NavLabel>
          </li>
          <li>
            <NavLabel>인프라찾기 알아보기</NavLabel>
          </li>
        </ExpalinNav>

        <ExplainWrap part="town">
          <ContentWrap>
            <ExplainText>
              <h2>동네찾기란?</h2>
              <p>
                원하는 인프라 시설을 선택하여
                <br />
                해당 인프라가 모여있는 동네를 찾아보세요!
              </p>
            </ExplainText>

            <ExplainItemWrap>
              <ExplainItem>
                <Img></Img>
                <StepText>
                  <h2>Step 1.</h2>
                  <p>원하는 인프라 시설을 선택합니다.</p>
                </StepText>
              </ExplainItem>

              <ExplainItem>
                <Img></Img>
                <StepText>
                  <h2>Step 2.</h2>
                  <p>해당 인프라 시설들이 모여있는 지역을 확인합니다.</p>
                </StepText>
              </ExplainItem>

              <ExplainItem>
                <Img></Img>
                <StepText>
                  <h2>Step 3.</h2>
                  <p>
                    특정 동을 선택하면 인프라찾기로 이동하여 해당 동에 모여있는
                    다양한 인프라 시설을 확인할 수 있습니다.
                  </p>
                </StepText>
              </ExplainItem>
            </ExplainItemWrap>

            <ShortCutBtn part="town">바로가기</ShortCutBtn>
          </ContentWrap>
        </ExplainWrap>

        <ExplainWrap part="infra">
          <ContentWrap>
            <ExplainText>
              <h2>인프라찾기란?</h2>
              <p>
                특정 지역을 검색하여
                <br />
                해당 지역에 모여있는 인프라 시설을 살펴보세요!
              </p>
            </ExplainText>

            <ExplainItemWrap>
              <ExplainItem>
                <StepText>
                  <h2>Step 1.</h2>
                  <p>인프라 시설을 확인하고 싶은 지역을 검색합니다.</p>
                </StepText>
                <Img></Img>
              </ExplainItem>

              <ExplainItem>
                <StepText>
                  <h2>Step 2.</h2>
                  <p>해당 지역에 모여있는 인프라 시설들을 확인합니다.</p>
                </StepText>
                <Img></Img>
              </ExplainItem>
            </ExplainItemWrap>

            <ShortCutBtn part="infra">바로가기</ShortCutBtn>
          </ContentWrap>
        </ExplainWrap>
      </ExplainContainer>
    </LayOut>
  );
};

export default MainPage;
