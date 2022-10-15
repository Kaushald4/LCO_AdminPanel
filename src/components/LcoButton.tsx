import { Button } from "@material-tailwind/react";

interface LCOButtonProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
    type?: "submit" | "button" | "reset";
}

function LcoButton({ onClick, title, disabled, loading, type = "button" }: LCOButtonProps) {
    return (
        <Button
            type={type}
            disabled={disabled}
            className="flex items-center justify-center gap-2 rounded-[4px] bg-purple-500 hover:scale-105 hover:drop-shadow-sm hover:shadow-purple-200 shadow-none active:scale-95 w-[200px]"
            onClick={onclick as any}
        >
            {loading && <div className="loader" />}
            {title}
        </Button>
    );
}

export default LcoButton;
