import styled from 'styled-components';

export const OverlayWrapper = ({ children }) => {
    return (
        <StyledOverlayWrapper>
            {children}
        </StyledOverlayWrapper>
    );
};

const StyledOverlayWrapper = styled.div`
    padding: ${({ padding }) => padding || '5vw'};
    border-radius: 15px;
    background-color: #fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    min-height: ${(props) => props.minHeight || '0'};
`;
