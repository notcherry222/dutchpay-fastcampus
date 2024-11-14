import { Container, Form, Button } from "react-bootstrap";
import { CenteredOverlayForm } from "./CenteredOverlayForm";
import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { useState } from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

export default function CreateGroup() {
    const [validated, setValidated] = useState(false);
    const [validGroupName, setValidGroupName] = useState(true);
    const [groupName, setGroupName] = useRecoilState(groupNameState);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if(form.checkValidity()) {
            setValidated(true);
            setValidGroupName(true);
        } else {
            event.stopPropagation();
            setValidated(true);
            setValidGroupName(false);
        }
    };

    const handleGroupNameChange = (event) => {
        setGroupName(event.target.value);
        setValidGroupName(true);
    };

    return (
        <CenteredOverlayForm>
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <StyledRow>
                        <Row className="aligin-items-start">
                            <StyledH2>먼저, 더치 페이 할 그룹의 이름을 정해볼까요?</StyledH2>
                        </Row>
                        <Row className="aligin-items-center">
                            <Form.Group controlId="validationGroupName">
                                <Form.Control
                                    type="text"
                                    placeholder="2022제주도 여행"
                                    required
                                    value={groupName}
                                    onChange={handleGroupNameChange}
                                />
                                <Form.Control.Feedback 
                                    type="invalid"
                                    data-testid="error-message"
                                    data-validated={validGroupName}
                                >
                                그룹 이름을 입력해주세요.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="aligin-items-end">
                            <StyledSubmitButton type="submit">
                                저장
                            </StyledSubmitButton>
                        </Row>
                    </StyledRow>
                </Form>
            </Container>
        </CenteredOverlayForm>
    );
}

const StyledH2 = styled.h2`
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

