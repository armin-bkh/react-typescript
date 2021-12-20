import React from "react";
import { Button } from "../Button/Button";

export const CostumComponent = (props: React.ComponentProps<typeof Button>) => {
    return (
        <button className={props.variant}>
        </button>
    )
};