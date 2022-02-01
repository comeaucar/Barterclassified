import React from 'react';
import {useDispatch} from "react-redux";
import {Modal} from "semantic-ui-react";
import {closeModal} from "../../store/modalSlice";

function ModalWrapper({childern: children, size, header}) {
    const dispatch = useDispatch();
    return (
        <Modal open={true} onclose={() => dispatch(closeModal())} size={size}>
            {header && <Modal.Header>{header}</Modal.Header>}
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    );
}

export default ModalWrapper;