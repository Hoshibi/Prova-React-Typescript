import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { gameActions } from '../../store/gameControl';

interface TypeProps {
    title: string,
}

const ModalComponent: React.FC<TypeProps> = ({ children, title }) => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state: RootStateOrAny) => state.game.modalOpen);

    const handleClose = () => {
        dispatch(gameActions.addPermission(false));
        dispatch(gameActions.modalState(false));
    }

    const Continuehandler = () => {
        dispatch(gameActions.addPermission(true));
        dispatch(gameActions.modalState(false));
        dispatch(gameActions.addToCartAfterPermission());
        dispatch(gameActions.savePurchase());
    }
        

    return (
        <>
        <Modal show={modalOpen} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="success" onClick={Continuehandler}>
                Continuar
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default ModalComponent;