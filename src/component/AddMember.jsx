import React, { useState } from 'react';
import { CenteredOverlayForm } from "./shared/CenteredOverlayForm";
import { useRecoilState, useRecoilValue } from "recoil";
import { groupNameState } from "../state/groupName";
import "react-bootstrap-tagsinput/dist/index.css";
import { groupMembersState } from "../state/groupMembers";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import styled from 'styled-components';

export default function AddMember() {
    const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
    const groupName = useRecoilValue(groupNameState);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
    };

    const header = `${groupName} 누구와 함께 더치페이 하나요?`;

    return (
        <CenteredOverlayForm
        title={header}
        validated={validated}
        handleSubmit={handleSubmit}
        >
            <InputGroupText
                value={groupMembers}
                onChange={(value) => setGroupMembers(value)}
                placeholder="이름 입력 후 엔터"
            />
            { validated && groupMembers.length === 0 && 
                <StyledErrorMessage>그룹 멤버들의 이름을 입력해주세요</StyledErrorMessage>}             
        </CenteredOverlayForm>
    );
}

const StyledErrorMessage = styled.span`
    color: red;
`

