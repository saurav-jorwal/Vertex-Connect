import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";

import { IconButton } from "@mui/material";
export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch {
        // IMPLEMENT SNACKBAR
      }
    };

    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0b1e4b 0%, #1f3fa3 55%, #4c6edb 100%)",
        color: "white",
        padding: "2rem 4rem",
        position: 'relative'
      }}
    >
      <IconButton onClick={() => routeTo("/home")} sx={{
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    color: 'white',
    background: 'rgba(11, 92, 255, 0.2)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '10px',
    padding: '8px',
    transition: 'all 0.25s ease',
    '&:hover': {
        background: '#0B5CFF',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 15px rgba(11,92,255,0.4)',
        border: '1px solid #0B5CFF',
    }
}}>
    <HomeIcon />
</IconButton>
      <h2 style={{ marginBottom: '1.5rem', paddingTop: '1rem', paddingLeft: '1rem' }}>Meeting History</h2>
      {meetings.length !== 0 ? (
        meetings.map((e, i) => (
          <Card
            key={i}
            variant="outlined"
            sx={{
              mb: 2,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "12px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                Code: {e.meetingCode}
              </Typography>
              <Typography sx={{ mb: 1.5, color: "rgba(255,255,255,0.9)" }}>
                Date: {formatDate(e.date)}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <p style={{ opacity: 0.6 }}>No meetings yet.</p>
      )}
    </div>
  );
}
