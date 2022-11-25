import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Comments.css';



const Comments = (props) => {
    const { name, email, id, body } = props.comments
    return (
        <div className='comment_container'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className='comment__user'>
                            <div><img src={`https://xsgames.co/randomusers/assets/avatars/male/${id}.jpg`} alt="" /></div>
                            <div className='comment__name'>{name}</div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div>
                            <h5>{email}</h5>
                            <h6>Coments: {body}</h6>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Comments;