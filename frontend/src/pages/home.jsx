import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #0b1e4b 0%, #1f3fa3 55%, #4c6edb 100%)', color: 'white' }}>
        <div className="navBar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.2rem 4rem', background: '#08133d', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ color: 'white', fontWeight: 500 }}>Vertex Connect</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Button
                    onClick={() => navigate("/history")}
                    startIcon={<RestoreIcon />}
                    style={{ 
                        color: 'white', 
                        borderRadius: '8px', 
                        textTransform: 'none', 
                        // fontSize: '0.8rem',
                        border: '1px solid rgba(255,255,255,0.4)',
                        background: 'rgba(255,255,255,0.08)',
                        padding: '6px 16px',
                        transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={e => { 
                        e.currentTarget.style.transform = 'translateY(-2px)'; 
                        e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                        e.currentTarget.style.borderColor = 'white';
                    }}
                    onMouseLeave={e => { 
                        e.currentTarget.style.transform = 'translateY(0)'; 
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
                    }}
                >
                    History
                </Button>
                <Button onClick={() => { localStorage.removeItem("token"); navigate("/auth"); }}
                    style={{ 
                        background: '#0B5CFF', 
                        color: 'white', 
                        borderRadius: '8px', 
                        marginLeft: '10px',
                        padding: '6px 16px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={e => { 
                        e.currentTarget.style.transform = 'translateY(-2px)'; 
                        e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
                        e.currentTarget.style.background = '#0047cc';
                    }}
                    onMouseLeave={e => { 
                        e.currentTarget.style.transform = 'translateY(0)'; 
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.background = '#0B5CFF';
                    }}
                >
                    Logout
                </Button>
            </div>
        </div>

        <div className="meetContainer">
            <div className="leftPanel">
                <div>
                    <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1.5rem' }}>Connect with anyone,<br />anywhere instantly.</h2>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <TextField
                            onChange={e => setMeetingCode(e.target.value)}
                            label="Meeting Code"
                            variant="outlined"
                            sx={{ input: { color: 'white' }, label: { color: 'rgba(255,255,255,0.7)' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' }, '&:hover fieldset': { borderColor: 'white' } } }}
                        />
                        <Button onClick={handleJoinVideoCall} variant='contained'
                            style={{ 
                            background: '#0B5CFF', 
                            color: 'white', 
                            borderRadius: '8px', 
                            marginLeft: '10px',
                            padding: '6px 16px',
                            textTransform: 'none',
                            fontSize: '1rem',
                            transition: 'all 0.25s ease'
                        }}
                        onMouseEnter={e => { 
                            e.currentTarget.style.transform = 'translateY(-2px)'; 
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)';
                            e.currentTarget.style.background = '#0047cc';
                        }}
                        onMouseLeave={e => { 
                            e.currentTarget.style.transform = 'translateY(0)'; 
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.background = '#0B5CFF';
                        }}>
                            Join
                        </Button>
                    </div>
                </div>
            </div>
            <div className='rightPanel'>
                <img srcSet='/logo3.png' alt="" />
            </div>
        </div>
    </div>
)
}


export default withAuth(HomeComponent)