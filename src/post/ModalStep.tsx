import { useState, useEffect } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  borderRadius: "8px",
  boxShadow: 24,
  width: 400,
};

interface MultiStepModalProps {
  open: boolean;
  onClose: () => void;
}

export default function MultiStepModal({ open, onClose }: MultiStepModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (!open) {
      setStep(1); // reset khi đóng
      setFormData({ name: "", email: "" });
    }
  }, [open]);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        {step === 1 && (
          <>
            <Typography variant="h6">Bước 1: Nhập tên</Typography>
            <TextField
              fullWidth
              label="Tên"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              sx={{ mt: 2 }}
            />
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!formData.name}
              >
                Tiếp tục
              </Button>
            </Box>
          </>
        )}

        {step === 2 && (
          <>
            <Typography variant="h6">Bước 2: Nhập email</Typography>
            <TextField
              fullWidth
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              sx={{ mt: 2 }}
            />
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="outlined" onClick={handleBack}>
                Quay lại
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!formData.email}
              >
                Tiếp tục
              </Button>
            </Box>
          </>
        )}

        {step === 3 && (
          <>
            <Typography variant="h6">Bước 3: Xác nhận</Typography>
            <Typography>Tên: {formData.name}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Box mt={2} display="flex" justifyContent="space-between">
              <Button variant="outlined" onClick={handleBack}>
                Quay lại
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  console.log("Dữ liệu đã gửi:", formData);
                  onClose();
                }}
              >
                Hoàn thành
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
}
