import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";


export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function useAttempt() {
        setAttemptsLeft(attemptsLeft - 1);
    }

    function gainAttempts() {
        if (!isNaN(requestedAttempts) && requestedAttempts > 0) {
            setAttemptsLeft(attemptsLeft + requestedAttempts);
        }
    }

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(parseInt(event.target.value) || 0);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <Form.Group>
                <Form.Label>Request More Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequest}
                />
            </Form.Group>
            <Button onClick={useAttempt} disabled={attemptsLeft <= 0}>
                Use
            </Button>
            <Button onClick={gainAttempts}>Gain</Button>
        </div>
    );
}
