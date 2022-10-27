import React from "react";
import Card from "../components/Card";
import SearchFilters from "../components/SearchFilters";
function CreatePage() {
    return (
        <React.Fragment>
            <SearchFilters/>
            <Card/>
            <Card/>
            <Card/>
        </React.Fragment>
    );
}

export default CreatePage;