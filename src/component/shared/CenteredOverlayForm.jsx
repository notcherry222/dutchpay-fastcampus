import styled from 'styled-components';
import { Container, Form, Button, Row } from "react-bootstrap";
import { OverlayWrapper } from '../OverlayWrapper';

export function CenteredOverlayForm({ title, children, handleSubmit, validated }) {
    return (
            <StyledCentralizedContainer>
                <StyledLogo>Dutch Pay</StyledLogo>
                <OverlayWrapper>
                    <Container>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <StyledRow>
                                <Row className="aligin-items-start">
                                    <StyledTitle>{title}</StyledTitle>
                                </Row>
                                <Row className="aligin-items-center">
                                    {children}
                                </Row>
                                <Row className="aligin-items-end">
                                    <StyledSubmitButton type="submit">
                                        저장
                                    </StyledSubmitButton>
                                </Row>
                            </StyledRow>
                        </Form>
                    </Container>
                </OverlayWrapper>
            </StyledCentralizedContainer>
    );
}

const StyledLogo = styled.h1`
    letter-spacing: -0.05em;
    font-weight: 10px
`;

const StyledCentralizedContainer = styled(Container)`
    width: 50vw;
    min-height: 50vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
`;

const StyledTitle = styled.h2`
    font-weight: 700;
    line-height: 35px;
    
    text-align: right;
    overflow-wrap: break-word;
    word-break: keep-all;
`;

const StyledSubmitButton = styled(Button).attrs({
    type: 'submit',
})`
    background-color: #6610F2;
    border-radius: 8px;
    border: none;

    &:hover {
        background-color: #6610F2;
        filter: brightness(80%);
    }
`;

const StyledRow = styled(Row)`
    height: 60vh;
    justify-content: center;
    align-items: center;
`;
