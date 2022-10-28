import React from "react";
function ListCard(props) {
    return (
        <React.Fragment>
           {props.children}
        </React.Fragment>
    );
}

export default ListCard;