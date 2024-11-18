import { Container } from "react-bootstrap";
import styled from "styled-components";
import { CentralizedContainer } from "./CenteredOverlayForm";

export const CreatedOverlayForm = ({ children }) => {
    return (
        <CentralizedContainer>
            <h1>Dutch Pay</h1>
            {children}
        </CentralizedContainer>
    );
}

const CentralizedContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
`
