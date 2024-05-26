import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ClockForm from "../clock-form/Index";
import { useState } from "react";
import useTimer from "../../../hooks/useTimer";

const ClockDispaly = ({
  clock,
  date,
  timezone,
  offset,
  local = false,
  updateClock,
  theme,
  handleTheme,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handleEditOpen = () => setIsEdit(true);
  const handleEditClose = () => setIsEdit(false);
  const handleCreateOpen = () => setIsCreate(true);
  const handleCreateClose = () => setIsCreate(false);

  const timer = useTimer(date);

  const offsetHour = offset / 60;

  const themeStyle = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    cursor: "pointer",
    opacity: "0.5",
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 1,
  };

  return (
    <div>
      <Card sx={{ width: 300, position: "relative" }}>
        {local &&
          (theme ? (
            <LightModeIcon
              sx={themeStyle}
              onClick={() => handleTheme(!theme)}
            />
          ) : (
            <Brightness4Icon
              sx={themeStyle}
              onClick={() => handleTheme(!theme)}
            />
          ))}

        <CardContent align="center" sx={{ marginTop: local && 4 }}>
          <Typography sx={{ paddingBottom: 1 }} variant="h5">
            {clock.title}
          </Typography>

          <Typography sx={{}} variant="h4" fontWeight="bold">
            {timer.toLocaleTimeString()}
          </Typography>

          <Typography fontSize="14px" sx={{}}>
            {date.toTimeString().split(" ").slice(2).join(" ")}
          </Typography>

          <Typography variant="p" sx={{ padding: 3 }}>{`${timezone} | ${
            offsetHour < 0
              ? `-${Math.abs(offsetHour)}`
              : `+${Math.abs(offsetHour)}`
          }`}</Typography>

          <ButtonGroup
            sx={{ paddingTop: 3 }}
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
          >
            <Button
              onClick={handleEditOpen}
              size="small"
              variant="contained"
              sx={{}}
            >
              Edit
            </Button>
            {local ? (
              <Button
                onClick={handleCreateOpen}
                size="small"
                variant="contained"
                sx={{}}
              >
                Create
              </Button>
            ) : (
              <Button
                onClick={() => deleteClock(clock.id)}
                size="small"
                variant="contained"
              >
                Delete
              </Button>
            )}
          </ButtonGroup>
        </CardContent>
      </Card>

      <Modal open={isEdit} onClose={handleEditClose}>
        <Box sx={modalStyle}>
          <ClockForm
            values={clock}
            handleClock={updateClock}
            edit={true}
            onClose={handleEditClose}
          />
        </Box>
      </Modal>

      <Modal open={isCreate} onClose={handleCreateClose}>
        <Box sx={modalStyle}>
          <ClockForm handleClock={createClock} onClose={handleCreateClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default ClockDispaly;