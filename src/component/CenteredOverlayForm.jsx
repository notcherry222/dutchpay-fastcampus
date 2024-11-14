import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { OverlayWrapper } from './OverlayWrapper';

export function CenteredOverlayForm({ children }) {
    return (
            <StyledCentralizedContainer>
                <StyledHeader>Dutch Pay</StyledHeader>
                <OverlayWrapper>
                {children}
                </OverlayWrapper>
            </StyledCentralizedContainer>
    );
}

const StyledHeader = styled.h1`
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