import { Container, Form, Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { groupNameState } from "../state/groupName";
import { useState } from "react";
import { Row } from "react-bootstrap";

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
        <div>
            <h1>Dutch Pay</h1>
            <Container>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <h1>먼저, 더치 페이 할 그룹의 이름을 정해볼까요?</h1>
                    </Row>
                    <Row>
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
                    <Row>
                        <Button type="submit">
                            저장
                        </Button>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

