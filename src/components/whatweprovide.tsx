import './css/sec1.css';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Whatweprovide() {
    return (
        <>
            <div className='Whatwedo-section'>
                <h1 className='Whatwedo-h1'>How We Can Help Your Business Grow</h1>
                <div className='whatwedo-cen'>
                    <Accordion
                        className='accordion'
                        sx={{
                            width: '90%',
                            marginTop: '50px',
                            background: 'linear-gradient(235deg, rgba(169, 169, 169, 0.3), rgba(169, 169, 169, 0.15))',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(15px)', // For Safari support
                            borderRadius: '20px', // Set border radius for rounded corners
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Adds a soft shadow for depth
                            minHeight: '60px', // Increase height by 10px
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color: '#EDFD3B' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className="panel-header"
                        >
                          <h1  className="panel-header">Custom Web Development</h1>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p className='panel-text'>Tailored to fit your business goals and user needs.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            width: '90%',
                            marginTop: '20px',
                            background: 'linear-gradient(235deg, rgba(169, 169, 169, 0.3), rgba(169, 169, 169, 0.15))',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(15px)', // For Safari support
                            borderRadius: '20px', // Set border radius for rounded corners
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            minHeight: '60px', // Increase height by 10px
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color: '#EDFD3B' }} />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                 <h1  className="panel-header">Creative Design & Branding</h1>
                        </AccordionSummary>
                        <AccordionDetails>
                        <p className='panel-text'>Unique, visually appealing designs that strengthen your brand.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        sx={{
                            width: '90%',
                            marginTop: '20px',
                            background: 'linear-gradient(235deg, rgba(169, 169, 169, 0.3), rgba(169, 169, 169, 0.15))',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(15px)', // For Safari support
                            borderRadius: '20px', // Set border radius for rounded corners
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            minHeight: '60px', // Increase height by 10px
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: '#EDFD3B' }} />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                 <h1  className="panel-header">Performance & SEO Optimization</h1>
                        </AccordionSummary>
                        <AccordionDetails>
                        <p className='panel-text'> Fast, optimized websites that rank higher and provide seamless experiences.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </>
    );
}

export default Whatweprovide;
