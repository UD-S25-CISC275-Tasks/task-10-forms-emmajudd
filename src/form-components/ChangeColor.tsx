import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "purple",
        "orange",
        "pink",
        "brown",
    ];
    const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {COLORS.map((color) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        label={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={updateColor}
                        style={{
                            backgroundColor: color,
                            padding: "5px",
                            borderRadius: "5px",
                        }}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: selectedColor,
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "150px",
                }}
            >
                You have chosen: {selectedColor}
            </div>
        </div>
    );
}
