import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useRecoilValue } from "recoil";
import { groupMembersState } from "../state/groupMembers";
import { expensesState } from "../state/expenses";
import { useSetRecoilState } from "recoil";

export const AddExpenseForm = () => {
    const today = new Date();
    const members = useRecoilValue(groupMembersState);
    const [date, setDate] = useState([today.getFullYear(), today.getMonth() + 1, today.getDate()].join('-'));
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState(0);
    const [payer, setPayer] = useState(null);

    const [validated, setValidated] = useState(false);
    const [isDescValid, setIsDescValid] = useState(false);
    const [isAmountValid, setIsAmountValid] = useState(false);
    const [isPayerValid, setIsPayerValid] = useState(false);

    const setExpense = useSetRecoilState(expensesState);

    const checkFormValidity = () => {
        const descValid = desc.lenght > 0;
        const amountValid = amount > 0;
        const payerValid = payer !== null;

        setIsDescValid(descValid);
        setIsAmountValid(amountValid);
        setIsPayerValid(payerValid);
        
        return descValid && amountValid && payerValid;
    }

    const handleSubmit = (event) => {

        event.preventDefault();
        
        const form = event.currentTarget;

        if (checkFormValidity()) {
            //state에 데이터 저장
            const newExpense = {date, desc, amount, payer};
            setExpense(prevExpenses => 
                [...prevExpenses, newExpense]);
        }

        setValidated(true);
    }

    return (
        <div>
            <Form noValidate onSubmit={handleSubmit}>
                <h3>1. 비용 추가</h3>
                <Form.Group>
                    <Form.Control
                        type="date"
                        name="expenseDate"
                        placeholder="결제한 날짜를 선택해 주세요"
                        value={date}
                        onChange={(event) => setDate(event.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="expenseDescription"
                        isValid={isDescValid}
                        isInvalid={!isDescValid && validated}
                        placeholder="비용에 대한 설명을 입력해 주세요 "
                        value={desc}
                        onChange={(event) => setDesc(event.target.value)}
                    />
                    <Form.Control.Feedback 
                        type="invalid"
                        data-valid={isDescValid}
                        >비용 내용을 입력해 주셔야 합니다.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="number"
                        name="expenseAmount"
                        isValid={isAmountValid}
                        isInvalid={!isAmountValid && validated}
                        placeholder="비용은 얼마였나요?"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                    <Form.Control.Feedback
                        type="invalid"
                        data-valid={isAmountValid}
                        >금액을 입력해 주셔야 합니다.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Select
                        name="expensePayer"
                        isValid={isPayerValid}
                        isInvalid={!isPayerValid && validated}
                        onChange={(event) => setPayer(event.target.value)}
                    >
                        <option disabled value="">누가 결제했나요?</option>
                        {members.map((member) => (
                            <option key={member} value={member}>{member}</option>
                        ))}
                    </Form.Select>
                    <Form.Control.Feedback 
                        type="invalid"
                        data-valid={isPayerValid}
                        >결제자를 선택해 주셔야 합니다.</Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">추가하기</Button>
            </Form>
        </div>
    );
};

