import React from 'react'
import Container from '@material-ui/core/Container';
/* @person who is assigned this page set your styles here. height 600 is just for layout.*/
const style ={
   minHeight:"600px",
   padding:"100px"
}

function Alumni() {
    return(
        <Container maxWidth="sm">
                    <div className="aboutus" style={style}>
            About Us coming soon in version 2.0
        </div>
        </Container>

    );
}
export default Alumni;