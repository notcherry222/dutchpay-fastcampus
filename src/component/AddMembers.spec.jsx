import { RecoilRoot } from "recoil";
import { fireEvent, render, screen } from "@testing-library/react";

import AddMembers from "./AddMembers";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
    return render(
        <RecoilRoot>
            <AddMembers />
        </RecoilRoot>
    );

    const input = screen.getByTestId('input-member-name');    
    const submitButton = screen.getByText('저장'); 
    const errorMessage = screen.getByTestId('그룹 이름을 입력해 주세요.');

    return { input, submitButton, errorMessage };
};

describe('그룹 멤버 추가 페이지', () => {
    
    test('그룹 멤버 입력 컴포넌트가 렌더링 되는가', () => {
        const { input, submitButton } = renderComponent();

        expect(input).not.toBeNull();
        expect(submitButton).not.toBeNull();
    });

    test('그룹 멤버 입력하지 않고, 저장버튼을 누를 시, 에러 메시지가 렌더링 되는가', async () => {
        const { input, submitButton } = renderComponent();

        await userEvent.click(submitButton);

        const errorMessage = await screen.findByText('그룹 이름을 입력해 주세요.');
        expect(errorMessage).toBeInTheDocument();
    });

    test('그룹 멤버 입력 후, 저장버튼을 누를 시, 저장에 성공', async () => {
        const { input, submitButton } = renderComponent();

        await userEvent.type(input, '철수 영희 영수');
        await userEvent.click(submitButton);

        const successMessage = screen.queryByText('그룹 멤버 추가에 성공하였습니다.');
        expect(successMessage).toBeNull();
    });
});
