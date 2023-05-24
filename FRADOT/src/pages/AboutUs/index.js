// 전역 스타일
import LayOut from "@/components/common/layout";
import {
    // Main
    Main,
    Title,
    SubTitle,
    Ptag,
    //제목
    TitleContainer,
    // 컨텐츠
    ContentsContainer,
    // 인사말
    HelloContainer,
    Hello,
    // 팀원 소개
    TeamInformationContainer,
    Member,
    // 프로젝트 소개
    ProjecInformationContainer,
    // Logo
    LogoImgContainer,
    Logo,
    LogoImg_1,
    LogoImg_2,
    // Color
    Color,
    ColorContainer,
    MyColor,
    ColorContent,
} from "../../styles/AboutUs.style.js";

const AboutUs = () => {
    return (
        <LayOut>
            <Main>
                {/* 제목 */}
                <TitleContainer>
                    <h2>About US</h2>
                </TitleContainer>

                <ContentsContainer>
                    {/* 인사말 */}
                    <HelloContainer>
                        <Title>인사말</Title>
                        <Hello>
                            <Ptag>안녕하세요 평일 오전조 입니다.</Ptag>
                            <Ptag>이번경진대회를 기회로 사이트를 만들어 보게 되었습니다.</Ptag>
                            <Ptag>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quisquam dolorem iure sunt
                                ab dolor blanditiis et soluta repudiandae vero consequatur similique, impedit sed explicabo
                                voluptates molestias animi, perferendis dolores.
                            </Ptag>
                            <Ptag>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quisquam dolorem iure sunt
                                ab dolor blanditiis et soluta repudiandae vero consequatur similique, impedit sed explicabo
                                voluptates molestias animi, perferendis dolores.
                            </Ptag>
                        </Hello>
                    </HelloContainer>

                    {/* 팀원 소개 */}
                    <TeamInformationContainer>
                        <Title>팀원소개</Title>
                        <div>
                            <SubTitle>조장</SubTitle>
                            <div>
                                <Ptag>이름: 김재하</Ptag>
                                <Ptag>나이: 21</Ptag>
                                <Ptag>경력</Ptag>
                                <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                            </div>
                        </div>
                        <div>
                            <SubTitle>조원</SubTitle>
                            <Member>
                                <li>
                                    <Ptag>이름: 조해인</Ptag>
                                    <Ptag>나이: 23</Ptag>
                                    <Ptag>경력</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                </li>

                                <li>
                                    <Ptag>이름: 김대진</Ptag>
                                    <Ptag>나이: 25</Ptag>
                                    <Ptag>경력</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                </li>

                                <li>
                                    <Ptag>이름: 최지원</Ptag>
                                    <Ptag>나이: 25</Ptag>
                                    <Ptag>경력</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                </li>

                                <li>
                                    <Ptag>이름: 김규홍</Ptag>
                                    <Ptag>나이: 23</Ptag>
                                    <Ptag>경력</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                    <Ptag>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Ptag>
                                </li>
                            </Member>
                        </div>
                    </TeamInformationContainer>

                    {/* 프로젝트 소개 */}
                    <ProjecInformationContainer>
                        <Title>프로젝트 소개</Title>

                        {/* 제안배경 */}
                        <div>
                            <SubTitle>제안배경</SubTitle>
                            <Ptag>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur quisquam dolorem iure sunt
                                ab dolor blanditiis et soluta repudiandae vero consequatur similique, impedit sed explicabo
                                voluptates molestias animi, perferendis dolores.
                            </Ptag>
                        </div>

                        {/* logo */}
                        <div>
                            <SubTitle>Logo</SubTitle>
                            <div>
                                <LogoImgContainer>
                                    <Logo>
                                        <LogoImg_1 />
                                        <p>Logo</p>
                                    </Logo>

                                    <Logo>
                                        <LogoImg_2 />
                                        <p>Grid System</p>
                                    </Logo>
                                </LogoImgContainer>
                                <div></div>
                            </div>
                        </div>

                        {/* color */}
                        <Color>
                            <Title>COLOR</Title>
                            <SubTitle>Main Color</SubTitle>
                            <ColorContainer>
                                <ColorContent>
                                    <MyColor divColor="red"></MyColor>
                                    <Ptag>#000000</Ptag>
                                </ColorContent>
                                <ColorContent>
                                    <MyColor divColor="orange"></MyColor>
                                    <Ptag>#000000</Ptag>
                                </ColorContent>
                            </ColorContainer>

                            <SubTitle>Sub Color</SubTitle>
                            <ColorContainer>
                                <ColorContent>
                                    <MyColor divColor="red"></MyColor>
                                    <Ptag>#000000</Ptag>
                                </ColorContent>
                                <ColorContent>
                                    <MyColor divColor="green"></MyColor>
                                    <Ptag>#000000</Ptag>
                                </ColorContent>
                                <ColorContent>
                                    <MyColor divColor="blue"></MyColor>
                                    <Ptag>#000000</Ptag>
                                </ColorContent>
                            </ColorContainer>
                        </Color>
                    </ProjecInformationContainer>
                </ContentsContainer>
            </Main>
        </LayOut>
    );
};

export default AboutUs;
