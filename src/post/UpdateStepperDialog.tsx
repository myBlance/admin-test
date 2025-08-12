import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Stepper,
    Step,
    StepLabel,
    Box,
    TextField
} from "@mui/material";
import { useTranslate } from "react-admin";

interface UpdateStepperDialogProps {
    open: boolean;
    onClose: () => void;
    onFinish?: (data: any) => void;
}

const steps = ["Nhập tên", "Nhập email", "Xác nhận"];

const UpdateStepperDialog: React.FC<UpdateStepperDialogProps> = ({ open, onClose, onFinish }) => {
    const translate = useTranslate();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            if (onFinish) onFinish({ ...formData });
            handleClose();
        } else {
            setActiveStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleClose = () => {
        onClose();
        setActiveStep(0);
        setFormData({ name: "", email: "", phone: "" });
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>{translate("buttons.upload")}</DialogTitle>
            <DialogContent>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Box sx={{ mt: 3 }}>
                    {activeStep === 0 && (
                        <TextField
                            label="Tên"
                            fullWidth
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            sx={{ mb: 2 }}
                        />
                    )}

                    {activeStep === 1 && (
                        <>
                            <TextField
                                label="Email"
                                fullWidth
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                label="Số điện thoại"
                                fullWidth
                                value={formData.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                sx={{ mb: 2 }}
                            />
                        </>
                    )}

                    {activeStep === 2 && (
                        <Box>
                            <strong>Thông tin đã nhập:</strong>
                            <Box mt={1}>
                                <p><strong>Tên:</strong> {formData.name}</p>
                                <p><strong>Email:</strong> {formData.email}</p>
                                <p><strong>Số điện thoại:</strong> {formData.phone}</p>
                            </Box>
                        </Box>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{translate("buttons.cancel")}</Button>
                    {activeStep > 0 && (
                        <Button onClick={handleBack}>{translate("buttons.back")}</Button>
                    )}
                        <Button
                            onClick={handleNext}
                            variant="contained"
                            disabled={activeStep === 0 && !formData.name.trim()}
                        >
                    {activeStep === steps.length - 1
                            ? translate("buttons.confirm")
                            : translate("buttons.next")}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default UpdateStepperDialog;
