import React from "react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { handler } from "@material-tailwind/react/types/components/dialog";

interface Props {
    headerTitle: string;
    cancelText: string;
    okText: string;
    show: boolean;
    handleModalOpen: handler;
    content: () => JSX.Element;
    onCancel: () => void;
}

function Modal({
    cancelText,
    headerTitle,
    okText,
    handleModalOpen,
    show,
    content,
    onCancel,
}: Props) {
    if (show) {
        return (
            <Dialog open={show} handler={handleModalOpen}>
                <DialogHeader>{headerTitle}</DialogHeader>
                <DialogBody>{content()}</DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={onCancel} className="mr-1">
                        <span>{cancelText}</span>
                    </Button>
                    <Button variant="gradient" color="purple" onClick={handleModalOpen}>
                        <span>{okText}</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        );
    } else {
        return <div />;
    }
}

export default Modal;
