import { Input } from "@material-tailwind/react";
import React, { HTMLInputTypeAttribute } from "react";
import { BiRupee } from "react-icons/bi";
import { toPascalCase } from "../utils/pascalCase";

interface Props {
    label: string;
    error?: boolean;
    errorMessage?: string;
    success?: boolean;
    register: any;
    type?: HTMLInputTypeAttribute;
    id?: string;
    hidden?: boolean;
    currency?: boolean;
    disabled?: boolean;
    required?: boolean;
    defaultValue?: any;
}

function LcoInput({
    label,
    error,
    errorMessage,
    success,
    register,
    type,
    id,
    hidden,
    currency,
    disabled,
    required,
    defaultValue,
}: Props) {
    return (
        <div className="flex flex-col items-start">
            <Input
                id={id}
                defaultValue={defaultValue}
                label={label}
                hidden={hidden}
                type={type}
                size="lg"
                error={error}
                success={success}
                color="purple"
                disabled={disabled}
                required={required}
                {...register(toPascalCase(label))}
            />
            {error && <p className="text-red-600 text-[12px] ml-1">{errorMessage}</p>}
        </div>
    );
}

export default LcoInput;
