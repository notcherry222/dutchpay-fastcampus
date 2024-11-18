import React, { useState } from 'react';
import { CenteredOverlayForm } from "./shared/CenteredOverlayForm";
import { useRecoilState, useRecoilValue } from "recoil";
import { groupNameState } from "../state/groupName";
import "react-bootstrap-tagsinput/dist/index.css";
import { groupMembersState } from "../state/groupMembers";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

export default function AddMember() {
    const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
    const groupName = useRecoilValue(groupNameState);
    const [validated, setValidated] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
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
            { formSubmitted && groupMembers.length === 0 && 
                <span>그룹 멤버들의 이름을 입력해주세요</span>}             
        </CenteredOverlayForm>
    );
}
